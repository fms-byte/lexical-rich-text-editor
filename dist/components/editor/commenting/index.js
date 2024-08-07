"use strict";
/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentStore = void 0;
exports.createComment = createComment;
exports.createThread = createThread;
exports.useCommentStore = useCommentStore;
const react_1 = require("react");
function createUID() {
    return Math.random()
        .toString(36)
        .replace(/[^a-z]+/g, '')
        .substr(0, 5);
}
function createComment(content, author, id, timeStamp, deleted) {
    return {
        author,
        content,
        deleted: deleted === undefined ? false : deleted,
        id: id === undefined ? createUID() : id,
        timeStamp: timeStamp === undefined ? performance.now() : timeStamp,
        type: 'comment',
    };
}
function createThread(quote, comments, id) {
    return {
        comments,
        id: id === undefined ? createUID() : id,
        quote,
        type: 'thread',
    };
}
function cloneThread(thread) {
    return {
        comments: Array.from(thread.comments),
        id: thread.id,
        quote: thread.quote,
        type: 'thread',
    };
}
function markDeleted(comment) {
    return {
        author: comment.author,
        content: '[Deleted Comment]',
        deleted: true,
        id: comment.id,
        timeStamp: comment.timeStamp,
        type: 'comment',
    };
}
function triggerOnChange(commentStore) {
    const listeners = commentStore._changeListeners;
    for (const listener of listeners) {
        listener();
    }
}
class CommentStore {
    _editor;
    _comments;
    _changeListeners;
    _collabProvider;
    constructor(editor) {
        this._comments = [];
        this._editor = editor;
        this._collabProvider = null;
        this._changeListeners = new Set();
    }
    isCollaborative() {
        return this._collabProvider !== null;
    }
    getComments() {
        return this._comments;
    }
    addComment(commentOrThread, thread, offset) {
        const nextComments = Array.from(this._comments);
        // The YJS types explicitly use `any` as well.
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        if (thread !== undefined && commentOrThread.type === 'comment') {
            for (let i = 0; i < nextComments.length; i++) {
                const comment = nextComments[i];
                if (comment.type === 'thread' && comment.id === thread.id) {
                    const newThread = cloneThread(comment);
                    nextComments.splice(i, 1, newThread);
                    const insertOffset = offset !== undefined ? offset : newThread.comments.length;
                    newThread.comments.splice(insertOffset, 0, commentOrThread);
                    break;
                }
            }
        }
        else {
            const insertOffset = offset !== undefined ? offset : nextComments.length;
            nextComments.splice(insertOffset, 0, commentOrThread);
        }
        this._comments = nextComments;
        triggerOnChange(this);
    }
    deleteCommentOrThread(commentOrThread, thread) {
        const nextComments = Array.from(this._comments);
        // The YJS types explicitly use `any` as well.
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        let commentIndex = null;
        if (thread !== undefined) {
            for (let i = 0; i < nextComments.length; i++) {
                const nextComment = nextComments[i];
                if (nextComment.type === 'thread' && nextComment.id === thread.id) {
                    const newThread = cloneThread(nextComment);
                    nextComments.splice(i, 1, newThread);
                    const threadComments = newThread.comments;
                    commentIndex = threadComments.indexOf(commentOrThread);
                    threadComments.splice(commentIndex, 1);
                    break;
                }
            }
        }
        else {
            commentIndex = nextComments.indexOf(commentOrThread);
            nextComments.splice(commentIndex, 1);
        }
        this._comments = nextComments;
        triggerOnChange(this);
        if (commentOrThread.type === 'comment') {
            return {
                index: commentIndex,
                markedComment: markDeleted(commentOrThread),
            };
        }
        return null;
    }
    registerOnChange(onChange) {
        const changeListeners = this._changeListeners;
        changeListeners.add(onChange);
        return () => {
            changeListeners.delete(onChange);
        };
    }
    _withRemoteTransaction(fn) {
        const provider = this._collabProvider;
        if (provider !== null) {
            // @ts-expect-error doc does exist
            const doc = provider.doc;
            doc.transact(fn, this);
        }
    }
    _withLocalTransaction(fn) {
        const collabProvider = this._collabProvider;
        try {
            this._collabProvider = null;
            fn();
        }
        finally {
            this._collabProvider = collabProvider;
        }
    }
}
exports.CommentStore = CommentStore;
function useCommentStore(commentStore) {
    const [comments, setComments] = (0, react_1.useState)(commentStore.getComments());
    (0, react_1.useEffect)(() => {
        return commentStore.registerOnChange(() => {
            setComments(commentStore.getComments());
        });
    }, [commentStore]);
    return comments;
}
