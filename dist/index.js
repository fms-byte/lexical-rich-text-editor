"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __knownSymbol = (name, symbol) => (symbol = Symbol[name]) ? symbol : Symbol.for("Symbol." + name);
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
var __await = function(promise, isYieldStar) {
  this[0] = promise;
  this[1] = isYieldStar;
};
var __asyncGenerator = (__this, __arguments, generator) => {
  var resume = (k, v, yes, no) => {
    try {
      var x = generator[k](v), isAwait = (v = x.value) instanceof __await, done = x.done;
      Promise.resolve(isAwait ? v[0] : v).then((y) => isAwait ? resume(k === "return" ? k : "next", v[1] ? { done: y.done, value: y.value } : y, yes, no) : yes({ value: y, done })).catch((e) => resume("throw", e, yes, no));
    } catch (e) {
      no(e);
    }
  }, method = (k) => it[k] = (x) => new Promise((yes, no) => resume(k, x, yes, no)), it = {};
  return generator = generator.apply(__this, __arguments), it[__knownSymbol("asyncIterator")] = () => it, method("next"), method("throw"), method("return"), it;
};
var __forAwait = (obj, it, method) => (it = obj[__knownSymbol("asyncIterator")]) ? it.call(obj) : (obj = obj[__knownSymbol("iterator")](), it = {}, method = (key, fn) => (fn = obj[key]) && (it[key] = (arg) => new Promise((yes, no, done) => (arg = fn.call(obj, arg), done = arg.done, Promise.resolve(arg.value).then((value) => yes({ value, done }), no)))), method("next"), method("return"), it);

// node_modules/tsup/assets/cjs_shims.js
var init_cjs_shims = __esm({
  "node_modules/tsup/assets/cjs_shims.js"() {
    "use strict";
  }
});

// src/components/editor/nodes/EmojiNode.tsx
function $createEmojiNode(className, emojiText) {
  const node = new EmojiNode(className, emojiText).setMode("token");
  return (0, import_lexical3.$applyNodeReplacement)(node);
}
var import_lexical3, EmojiNode;
var init_EmojiNode = __esm({
  "src/components/editor/nodes/EmojiNode.tsx"() {
    "use strict";
    init_cjs_shims();
    import_lexical3 = require("lexical");
    EmojiNode = class _EmojiNode extends import_lexical3.TextNode {
      static getType() {
        return "emoji";
      }
      static clone(node) {
        return new _EmojiNode(node.__className, node.__text, node.__key);
      }
      constructor(className, text, key) {
        super(text, key);
        this.__className = className;
      }
      createDOM(config) {
        const dom = document.createElement("span");
        const inner = super.createDOM(config);
        dom.className = this.__className;
        inner.className = "emoji-inner";
        dom.appendChild(inner);
        return dom;
      }
      updateDOM(prevNode, dom, config) {
        const inner = dom.firstChild;
        if (inner === null) {
          return true;
        }
        super.updateDOM(prevNode, inner, config);
        return false;
      }
      static importJSON(serializedNode) {
        const node = $createEmojiNode(
          serializedNode.className,
          serializedNode.text
        );
        node.setFormat(serializedNode.format);
        node.setDetail(serializedNode.detail);
        node.setMode(serializedNode.mode);
        node.setStyle(serializedNode.style);
        return node;
      }
      exportJSON() {
        return __spreadProps(__spreadValues({}, super.exportJSON()), {
          className: this.getClassName(),
          type: "emoji"
        });
      }
      getClassName() {
        const self = this.getLatest();
        return self.__className;
      }
    };
  }
});

// src/components/editor/nodes/ImageNode.css
var init_ImageNode = __esm({
  "src/components/editor/nodes/ImageNode.css"() {
  }
});

// src/components/editor/context/SharedHistoryContext.tsx
var import_LexicalHistoryPlugin, React5, import_react5, Context3, SharedHistoryContext, useSharedHistoryContext;
var init_SharedHistoryContext = __esm({
  "src/components/editor/context/SharedHistoryContext.tsx"() {
    "use strict";
    init_cjs_shims();
    import_LexicalHistoryPlugin = require("@lexical/react/LexicalHistoryPlugin");
    React5 = __toESM(require("react"));
    import_react5 = require("react");
    Context3 = (0, import_react5.createContext)({});
    SharedHistoryContext = ({
      children
    }) => {
      const historyContext = (0, import_react5.useMemo)(
        () => ({ historyState: (0, import_LexicalHistoryPlugin.createEmptyHistoryState)() }),
        []
      );
      return /* @__PURE__ */ React5.createElement(Context3.Provider, { value: historyContext }, children);
    };
    useSharedHistoryContext = () => {
      return (0, import_react5.useContext)(Context3);
    };
  }
});

// src/components/editor/plugins/EmojisPlugin/index.ts
function $findAndTransformEmoji(node) {
  const text = node.getTextContent();
  for (let i = 0; i < text.length; i++) {
    const emojiData = emojis.get(text[i]) || emojis.get(text.slice(i, i + 2));
    if (emojiData !== void 0) {
      const [emojiStyle, emojiText] = emojiData;
      let targetNode;
      if (i === 0) {
        [targetNode] = node.splitText(i + 2);
      } else {
        [, targetNode] = node.splitText(i, i + 2);
      }
      const emojiNode = $createEmojiNode(emojiStyle, emojiText);
      targetNode.replace(emojiNode);
      return emojiNode;
    }
  }
  return null;
}
function $textNodeTransform(node) {
  let targetNode = node;
  while (targetNode !== null) {
    if (!targetNode.isSimpleText()) {
      return;
    }
    targetNode = $findAndTransformEmoji(targetNode);
  }
}
function useEmojis(editor) {
  (0, import_react6.useEffect)(() => {
    if (!editor.hasNodes([EmojiNode])) {
      throw new Error("EmojisPlugin: EmojiNode not registered on editor");
    }
    return editor.registerNodeTransform(import_lexical4.TextNode, $textNodeTransform);
  }, [editor]);
}
function EmojisPlugin() {
  const [editor] = (0, import_LexicalComposerContext2.useLexicalComposerContext)();
  useEmojis(editor);
  return null;
}
var import_LexicalComposerContext2, import_lexical4, import_react6, emojis;
var init_EmojisPlugin = __esm({
  "src/components/editor/plugins/EmojisPlugin/index.ts"() {
    "use strict";
    init_cjs_shims();
    import_LexicalComposerContext2 = require("@lexical/react/LexicalComposerContext");
    import_lexical4 = require("lexical");
    import_react6 = require("react");
    init_EmojiNode();
    emojis = /* @__PURE__ */ new Map([
      [":)", ["emoji happysmile", "\u{1F642}"]],
      [":D", ["emoji veryhappysmile", "\u{1F600}"]],
      [":(", ["emoji unhappysmile", "\u{1F641}"]],
      ["<3", ["emoji heart", "\u2764"]]
    ]);
  }
});

// src/components/editor/nodes/KeywordNode.ts
function $createKeywordNode(keyword) {
  return new KeywordNode(keyword);
}
var import_lexical5, KeywordNode;
var init_KeywordNode = __esm({
  "src/components/editor/nodes/KeywordNode.ts"() {
    "use strict";
    init_cjs_shims();
    import_lexical5 = require("lexical");
    KeywordNode = class _KeywordNode extends import_lexical5.TextNode {
      static getType() {
        return "keyword";
      }
      static clone(node) {
        return new _KeywordNode(node.__text, node.__key);
      }
      static importJSON(serializedNode) {
        const node = $createKeywordNode(serializedNode.text);
        node.setFormat(serializedNode.format);
        node.setDetail(serializedNode.detail);
        node.setMode(serializedNode.mode);
        node.setStyle(serializedNode.style);
        return node;
      }
      exportJSON() {
        return __spreadProps(__spreadValues({}, super.exportJSON()), {
          type: "keyword",
          version: 1
        });
      }
      createDOM(config) {
        const dom = super.createDOM(config);
        dom.style.cursor = "default";
        dom.className = "keyword";
        return dom;
      }
      canInsertTextBefore() {
        return false;
      }
      canInsertTextAfter() {
        return false;
      }
      isTextEntity() {
        return true;
      }
    };
  }
});

// src/components/editor/plugins/KeywordsPlugin/index.ts
function KeywordsPlugin() {
  const [editor] = (0, import_LexicalComposerContext3.useLexicalComposerContext)();
  (0, import_react7.useEffect)(() => {
    if (!editor.hasNodes([KeywordNode])) {
      throw new Error("KeywordsPlugin: KeywordNode not registered on editor");
    }
  }, [editor]);
  const $createKeywordNode_ = (0, import_react7.useCallback)((textNode) => {
    return $createKeywordNode(textNode.getTextContent());
  }, []);
  const getKeywordMatch = (0, import_react7.useCallback)((text) => {
    const matchArr = KEYWORDS_REGEX.exec(text);
    if (matchArr === null) {
      return null;
    }
    const hashtagLength = matchArr[2].length;
    const startOffset = matchArr.index + matchArr[1].length;
    const endOffset = startOffset + hashtagLength;
    return {
      end: endOffset,
      start: startOffset
    };
  }, []);
  (0, import_useLexicalTextEntity.useLexicalTextEntity)(
    getKeywordMatch,
    KeywordNode,
    $createKeywordNode_
  );
  return null;
}
var import_LexicalComposerContext3, import_useLexicalTextEntity, import_react7, KEYWORDS_REGEX;
var init_KeywordsPlugin = __esm({
  "src/components/editor/plugins/KeywordsPlugin/index.ts"() {
    "use strict";
    init_cjs_shims();
    import_LexicalComposerContext3 = require("@lexical/react/LexicalComposerContext");
    import_useLexicalTextEntity = require("@lexical/react/useLexicalTextEntity");
    import_react7 = require("react");
    init_KeywordNode();
    KEYWORDS_REGEX = /(^|$|[^A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԧԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࢠࢢ-ࢬऄ-हऽॐक़-ॡॱ-ॷॹ-ॿঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘౙౠౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൠൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦫᧁ-ᧇᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃↄⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々〆〱-〵〻〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿌ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚗꚠ-ꛥꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐ-ꞓꞠ-Ɦꟸ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꪀ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ])(congrats|congratulations|gratuluju|gratuluji|gratulujeme|blahopřeju|blahopřeji|blahopřejeme|Til lykke|Tillykke|Glückwunsch|Gratuliere|felicitaciones|enhorabuena|paljon onnea|onnittelut|Félicitations|gratula|gratulálok|gratulálunk|congratulazioni|complimenti|おめでとう|おめでとうございます|축하해|축하해요|gratulerer|Gefeliciteerd|gratulacje|Parabéns|parabéns|felicitações|felicitări|мои поздравления|поздравляем|поздравляю|gratulujem|blahoželám|ยินดีด้วย|ขอแสดงความยินดี|tebrikler|tebrik ederim|恭喜|祝贺你|恭喜你|恭喜|恭喜|baie geluk|veels geluk|অভিনন্দন|Čestitam|Čestitke|Čestitamo|Συγχαρητήρια|Μπράβο|અભિનંદન|badhai|बधाई|अभिनंदन|Честитам|Свака част|hongera|வாழ்த்துகள்|வாழ்த்துக்கள்|అభినందనలు|അഭിനന്ദനങ്ങൾ|Chúc mừng|מזל טוב|mazel tov|mazal tov)(^|$|[^A-Za-zªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԧԱ-Ֆՙա-ևא-תװ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࢠࢢ-ࢬऄ-हऽॐक़-ॡॱ-ॷॹ-ॿঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-ళవ-హఽౘౙౠౡಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൠൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄງຈຊຍດ-ທນ-ຟມ-ຣລວສຫອ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏼᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡷᢀ-ᢨᢪᢰ-ᣵᤀ-ᤜᥐ-ᥭᥰ-ᥴᦀ-ᦫᧁ-ᧇᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᳩ-ᳬᳮ-ᳱᳵᳶᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕℙ-ℝℤΩℨK-ℭℯ-ℹℼ-ℿⅅ-ⅉⅎↃↄⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞⸯ々〆〱-〵〻〼ぁ-ゖゝ-ゟァ-ヺー-ヿㄅ-ㄭㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿌ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚗꚠ-ꛥꜗ-ꜟꜢ-ꞈꞋ-ꞎꞐ-ꞓꞠ-Ɦꟸ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꪀ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꯀ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ])/i;
  }
});

// src/components/editor/utils/url.ts
function sanitizeUrl(url) {
  try {
    const parsedUrl = new URL(url);
    if (!SUPPORTED_URL_PROTOCOLS.has(parsedUrl.protocol)) {
      return "about:blank";
    }
  } catch (e) {
    return url;
  }
  return url;
}
function validateUrl(url) {
  return url === "https://" || urlRegExp.test(url);
}
var SUPPORTED_URL_PROTOCOLS, urlRegExp;
var init_url = __esm({
  "src/components/editor/utils/url.ts"() {
    "use strict";
    init_cjs_shims();
    SUPPORTED_URL_PROTOCOLS = /* @__PURE__ */ new Set([
      "http:",
      "https:",
      "mailto:",
      "sms:",
      "tel:"
    ]);
    urlRegExp = new RegExp(
      /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=+$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=+$,\w]+@)[A-Za-z0-9.-]+)((?:\/[+~%/.\w-_]*)?\??(?:[-+=&;%@.\w_]*)#?(?:[\w]*))?)/
    );
  }
});

// src/components/editor/plugins/LinkPlugin/index.tsx
function LinkPlugin() {
  return /* @__PURE__ */ React6.createElement(import_LexicalLinkPlugin.LinkPlugin, { validateUrl });
}
var import_LexicalLinkPlugin, React6;
var init_LinkPlugin = __esm({
  "src/components/editor/plugins/LinkPlugin/index.tsx"() {
    "use strict";
    init_cjs_shims();
    import_LexicalLinkPlugin = require("@lexical/react/LexicalLinkPlugin");
    React6 = __toESM(require("react"));
    init_url();
  }
});

// src/components/editor/nodes/MentionNode.ts
function $convertMentionElement(domNode) {
  const textContent = domNode.textContent;
  if (textContent !== null) {
    const node = $createMentionNode(textContent);
    return {
      node
    };
  }
  return null;
}
function $createMentionNode(mentionName) {
  const mentionNode = new MentionNode(mentionName);
  mentionNode.setMode("segmented").toggleDirectionless();
  return (0, import_lexical6.$applyNodeReplacement)(mentionNode);
}
var import_lexical6, mentionStyle, MentionNode;
var init_MentionNode = __esm({
  "src/components/editor/nodes/MentionNode.ts"() {
    "use strict";
    init_cjs_shims();
    import_lexical6 = require("lexical");
    mentionStyle = "background-color: rgba(24, 119, 232, 0.2)";
    MentionNode = class _MentionNode extends import_lexical6.TextNode {
      static getType() {
        return "mention";
      }
      static clone(node) {
        return new _MentionNode(node.__mention, node.__text, node.__key);
      }
      static importJSON(serializedNode) {
        const node = $createMentionNode(serializedNode.mentionName);
        node.setTextContent(serializedNode.text);
        node.setFormat(serializedNode.format);
        node.setDetail(serializedNode.detail);
        node.setMode(serializedNode.mode);
        node.setStyle(serializedNode.style);
        return node;
      }
      constructor(mentionName, text, key) {
        super(text != null ? text : mentionName, key);
        this.__mention = mentionName;
      }
      exportJSON() {
        return __spreadProps(__spreadValues({}, super.exportJSON()), {
          mentionName: this.__mention,
          type: "mention",
          version: 1
        });
      }
      createDOM(config) {
        const dom = super.createDOM(config);
        dom.style.cssText = mentionStyle;
        dom.className = "mention";
        return dom;
      }
      exportDOM() {
        const element = document.createElement("span");
        element.setAttribute("data-lexical-mention", "true");
        element.textContent = this.__text;
        return { element };
      }
      static importDOM() {
        return {
          span: (domNode) => {
            if (!domNode.hasAttribute("data-lexical-mention")) {
              return null;
            }
            return {
              conversion: $convertMentionElement,
              priority: 1
            };
          }
        };
      }
      isTextEntity() {
        return true;
      }
      canInsertTextBefore() {
        return false;
      }
      canInsertTextAfter() {
        return false;
      }
    };
  }
});

// src/components/editor/plugins/MentionsPlugin/index.tsx
function useMentionLookupService(mentionString) {
  const [results, setResults] = (0, import_react8.useState)([]);
  (0, import_react8.useEffect)(() => {
    const cachedResults = mentionsCache.get(mentionString);
    if (mentionString == null) {
      setResults([]);
      return;
    }
    if (cachedResults === null) {
      return;
    } else if (cachedResults !== void 0) {
      setResults(cachedResults);
      return;
    }
    mentionsCache.set(mentionString, null);
    dummyLookupService.search(mentionString, (newResults) => {
      mentionsCache.set(mentionString, newResults);
      setResults(newResults);
    });
  }, [mentionString]);
  return results;
}
function checkForAtSignMentions(text, minMatchLength) {
  let match = AtSignMentionsRegex.exec(text);
  if (match === null) {
    match = AtSignMentionsRegexAliasRegex.exec(text);
  }
  if (match !== null) {
    const maybeLeadingWhitespace = match[1];
    const matchingString = match[3];
    if (matchingString.length >= minMatchLength) {
      return {
        leadOffset: match.index + maybeLeadingWhitespace.length,
        matchingString,
        replaceableString: match[2]
      };
    }
  }
  return null;
}
function getPossibleQueryMatch(text) {
  return checkForAtSignMentions(text, 1);
}
function MentionsTypeaheadMenuItem({
  index,
  isSelected,
  onClick,
  onMouseEnter,
  option
}) {
  let className = "item";
  if (isSelected) {
    className += " selected";
  }
  return /* @__PURE__ */ React7.createElement(
    "li",
    {
      key: option.key,
      tabIndex: -1,
      className,
      ref: option.setRefElement,
      role: "option",
      "aria-selected": isSelected,
      id: "typeahead-item-" + index,
      onMouseEnter,
      onClick
    },
    option.picture,
    /* @__PURE__ */ React7.createElement("span", { className: "text" }, option.name)
  );
}
function NewMentionsPlugin() {
  const [editor] = (0, import_LexicalComposerContext4.useLexicalComposerContext)();
  const [queryString, setQueryString] = (0, import_react8.useState)(null);
  const results = useMentionLookupService(queryString);
  const checkForSlashTriggerMatch = (0, import_LexicalTypeaheadMenuPlugin.useBasicTypeaheadTriggerMatch)("/", {
    minLength: 0
  });
  const options = (0, import_react8.useMemo)(
    () => results.map(
      (result) => new MentionTypeaheadOption(result, /* @__PURE__ */ React7.createElement("i", { className: "icon user" }))
    ).slice(0, SUGGESTION_LIST_LENGTH_LIMIT),
    [results]
  );
  const onSelectOption = (0, import_react8.useCallback)(
    (selectedOption, nodeToReplace, closeMenu) => {
      editor.update(() => {
        const mentionNode = $createMentionNode(selectedOption.name);
        if (nodeToReplace) {
          nodeToReplace.replace(mentionNode);
        }
        mentionNode.select();
        closeMenu();
      });
    },
    [editor]
  );
  const checkForMentionMatch = (0, import_react8.useCallback)(
    (text) => {
      const slashMatch = checkForSlashTriggerMatch(text, editor);
      if (slashMatch !== null) {
        return null;
      }
      return getPossibleQueryMatch(text);
    },
    [checkForSlashTriggerMatch, editor]
  );
  return /* @__PURE__ */ React7.createElement(
    import_LexicalTypeaheadMenuPlugin.LexicalTypeaheadMenuPlugin,
    {
      onQueryChange: setQueryString,
      onSelectOption,
      triggerFn: checkForMentionMatch,
      options,
      menuRenderFn: (anchorElementRef, { selectedIndex, selectOptionAndCleanUp, setHighlightedIndex }) => anchorElementRef.current && results.length ? ReactDOM.createPortal(
        /* @__PURE__ */ React7.createElement("div", { className: "typeahead-popover mentions-menu" }, /* @__PURE__ */ React7.createElement("ul", null, options.map((option, i) => /* @__PURE__ */ React7.createElement(
          MentionsTypeaheadMenuItem,
          {
            index: i,
            isSelected: selectedIndex === i,
            onClick: () => {
              setHighlightedIndex(i);
              selectOptionAndCleanUp(option);
            },
            onMouseEnter: () => {
              setHighlightedIndex(i);
            },
            key: option.key,
            option
          }
        )))),
        anchorElementRef.current
      ) : null
    }
  );
}
var import_LexicalComposerContext4, import_LexicalTypeaheadMenuPlugin, import_react8, React7, ReactDOM, PUNCTUATION, NAME, DocumentMentionsRegex, PUNC, TRIGGERS, VALID_CHARS, VALID_JOINS, LENGTH_LIMIT, AtSignMentionsRegex, ALIAS_LENGTH_LIMIT, AtSignMentionsRegexAliasRegex, SUGGESTION_LIST_LENGTH_LIMIT, mentionsCache, dummyMentionsData, dummyLookupService, MentionTypeaheadOption;
var init_MentionsPlugin = __esm({
  "src/components/editor/plugins/MentionsPlugin/index.tsx"() {
    "use strict";
    init_cjs_shims();
    import_LexicalComposerContext4 = require("@lexical/react/LexicalComposerContext");
    import_LexicalTypeaheadMenuPlugin = require("@lexical/react/LexicalTypeaheadMenuPlugin");
    import_react8 = require("react");
    React7 = __toESM(require("react"));
    ReactDOM = __toESM(require("react-dom"));
    init_MentionNode();
    PUNCTUATION = `\\.,\\+\\*\\?\\$\\@\\|#{}\\(\\)\\^\\-\\[\\]\\\\/!%'"~=<>_:;`;
    NAME = "\\b[A-Z][^\\s" + PUNCTUATION + "]";
    DocumentMentionsRegex = {
      NAME,
      PUNCTUATION
    };
    PUNC = DocumentMentionsRegex.PUNCTUATION;
    TRIGGERS = ["@"].join("");
    VALID_CHARS = "[^" + TRIGGERS + PUNC + "\\s]";
    VALID_JOINS = "(?:\\.[ |$]| |[" + PUNC + "]|)";
    LENGTH_LIMIT = 75;
    AtSignMentionsRegex = new RegExp(
      "(^|\\s|\\()([" + TRIGGERS + "]((?:" + VALID_CHARS + VALID_JOINS + "){0," + LENGTH_LIMIT + "}))$"
    );
    ALIAS_LENGTH_LIMIT = 50;
    AtSignMentionsRegexAliasRegex = new RegExp(
      "(^|\\s|\\()([" + TRIGGERS + "]((?:" + VALID_CHARS + "){0," + ALIAS_LENGTH_LIMIT + "}))$"
    );
    SUGGESTION_LIST_LENGTH_LIMIT = 5;
    mentionsCache = /* @__PURE__ */ new Map();
    dummyMentionsData = [
      "Aayla Secura",
      "Adi Gallia",
      "Admiral Dodd Rancit",
      "Admiral Firmus Piett",
      "Admiral Gial Ackbar",
      "Admiral Ozzel",
      "Admiral Raddus",
      "Admiral Terrinald Screed",
      "Admiral Trench",
      "Admiral U.O. Statura",
      "Agen Kolar",
      "Agent Kallus",
      "Aiolin and Morit Astarte",
      "Aks Moe",
      "Almec",
      "Alton Kastle",
      "Amee",
      "AP-5",
      "Armitage Hux",
      "Artoo",
      "Arvel Crynyd",
      "Asajj Ventress",
      "Aurra Sing",
      "AZI-3",
      "Bala-Tik",
      "Barada",
      "Bargwill Tomder",
      "Baron Papanoida",
      "Barriss Offee",
      "Baze Malbus",
      "Bazine Netal",
      "BB-8",
      "BB-9E",
      "Ben Quadinaros",
      "Berch Teller",
      "Beru Lars",
      "Bib Fortuna",
      "Biggs Darklighter",
      "Black Krrsantan",
      "Bo-Katan Kryze",
      "Boba Fett",
      "Bobbajo",
      "Bodhi Rook",
      "Borvo the Hutt",
      "Boss Nass",
      "Bossk",
      "Breha Antilles-Organa",
      "Bren Derlin",
      "Brendol Hux",
      "BT-1",
      "C-3PO",
      "C1-10P",
      "Cad Bane",
      "Caluan Ematt",
      "Captain Gregor",
      "Captain Phasma",
      "Captain Quarsh Panaka",
      "Captain Rex",
      "Carlist Rieekan",
      "Casca Panzoro",
      "Cassian Andor",
      "Cassio Tagge",
      "Cham Syndulla",
      "Che Amanwe Papanoida",
      "Chewbacca",
      "Chi Eekway Papanoida",
      "Chief Chirpa",
      "Chirrut \xCEmwe",
      "Ciena Ree",
      "Cin Drallig",
      "Clegg Holdfast",
      "Cliegg Lars",
      "Coleman Kcaj",
      "Coleman Trebor",
      "Colonel Kaplan",
      "Commander Bly",
      "Commander Cody (CC-2224)",
      "Commander Fil (CC-3714)",
      "Commander Fox",
      "Commander Gree",
      "Commander Jet",
      "Commander Wolffe",
      "Conan Antonio Motti",
      "Conder Kyl",
      "Constable Zuvio",
      "Cord\xE9",
      "Cpatain Typho",
      "Crix Madine",
      "Cut Lawquane",
      "Dak Ralter",
      "Dapp",
      "Darth Bane",
      "Darth Maul",
      "Darth Tyranus",
      "Daultay Dofine",
      "Del Meeko",
      "Delian Mors",
      "Dengar",
      "Depa Billaba",
      "Derek Klivian",
      "Dexter Jettster",
      "Dine\xE9 Ellberger",
      "DJ",
      "Doctor Aphra",
      "Doctor Evazan",
      "Dogma",
      "Dorm\xE9",
      "Dr. Cylo",
      "Droidbait",
      "Droopy McCool",
      "Dryden Vos",
      "Dud Bolt",
      "Ebe E. Endocott",
      "Echuu Shen-Jon",
      "Eeth Koth",
      "Eighth Brother",
      "Eirta\xE9",
      "Eli Vanto",
      "Ell\xE9",
      "Ello Asty",
      "Embo",
      "Eneb Ray",
      "Enfys Nest",
      "EV-9D9",
      "Evaan Verlaine",
      "Even Piell",
      "Ezra Bridger",
      "Faro Argyus",
      "Feral",
      "Fifth Brother",
      "Finis Valorum",
      "Finn",
      "Fives",
      "FN-1824",
      "FN-2003",
      "Fodesinbeed Annodue",
      "Fulcrum",
      "FX-7",
      "GA-97",
      "Galen Erso",
      "Gallius Rax",
      'Garazeb "Zeb" Orrelios',
      "Gardulla the Hutt",
      "Garrick Versio",
      "Garven Dreis",
      "Gavyn Sykes",
      "Gideon Hask",
      "Gizor Dellso",
      "Gonk droid",
      "Grand Inquisitor",
      "Greeata Jendowanian",
      "Greedo",
      "Greer Sonnel",
      "Grievous",
      "Grummgar",
      "Gungi",
      "Hammerhead",
      "Han Solo",
      "Harter Kalonia",
      "Has Obbit",
      "Hera Syndulla",
      "Hevy",
      "Hondo Ohnaka",
      "Huyang",
      "Iden Versio",
      "IG-88",
      "Ima-Gun Di",
      "Inquisitors",
      "Inspector Thanoth",
      "Jabba",
      "Jacen Syndulla",
      "Jan Dodonna",
      "Jango Fett",
      "Janus Greejatus",
      "Jar Jar Binks",
      "Jas Emari",
      "Jaxxon",
      "Jek Tono Porkins",
      "Jeremoch Colton",
      "Jira",
      "Jobal Naberrie",
      "Jocasta Nu",
      "Joclad Danva",
      "Joh Yowza",
      "Jom Barell",
      "Joph Seastriker",
      "Jova Tarkin",
      "Jubnuk",
      "Jyn Erso",
      "K-2SO",
      "Kanan Jarrus",
      "Karbin",
      "Karina the Great",
      "Kes Dameron",
      "Ketsu Onyo",
      "Ki-Adi-Mundi",
      "King Katuunko",
      "Kit Fisto",
      "Kitster Banai",
      "Klaatu",
      "Klik-Klak",
      "Korr Sella",
      "Kylo Ren",
      "L3-37",
      "Lama Su",
      "Lando Calrissian",
      "Lanever Villecham",
      "Leia Organa",
      "Letta Turmond",
      "Lieutenant Kaydel Ko Connix",
      "Lieutenant Thire",
      "Lobot",
      "Logray",
      "Lok Durd",
      "Longo Two-Guns",
      "Lor San Tekka",
      "Lorth Needa",
      "Lott Dod",
      "Luke Skywalker",
      "Lumat",
      "Luminara Unduli",
      "Lux Bonteri",
      "Lyn Me",
      "Lyra Erso",
      "Mace Windu",
      "Malakili",
      "Mama the Hutt",
      "Mars Guo",
      "Mas Amedda",
      "Mawhonic",
      "Max Rebo",
      "Maximilian Veers",
      "Maz Kanata",
      "ME-8D9",
      "Meena Tills",
      "Mercurial Swift",
      "Mina Bonteri",
      "Miraj Scintel",
      "Mister Bones",
      "Mod Terrik",
      "Moden Canady",
      "Mon Mothma",
      "Moradmin Bast",
      "Moralo Eval",
      "Morley",
      "Mother Talzin",
      "Nahdar Vebb",
      "Nahdonnis Praji",
      "Nien Nunb",
      "Niima the Hutt",
      "Nines",
      "Norra Wexley",
      "Nute Gunray",
      "Nuvo Vindi",
      "Obi-Wan Kenobi",
      "Odd Ball",
      "Ody Mandrell",
      "Omi",
      "Onaconda Farr",
      "Oola",
      "OOM-9",
      "Oppo Rancisis",
      "Orn Free Taa",
      "Oro Dassyne",
      "Orrimarko",
      "Osi Sobeck",
      "Owen Lars",
      "Pablo-Jill",
      "Padm\xE9 Amidala",
      "Pagetti Rook",
      "Paige Tico",
      "Paploo",
      "Petty Officer Thanisson",
      "Pharl McQuarrie",
      "Plo Koon",
      "Po Nudo",
      "Poe Dameron",
      "Poggle the Lesser",
      "Pong Krell",
      "Pooja Naberrie",
      "PZ-4CO",
      "Quarrie",
      "Quay Tolsite",
      "Queen Apailana",
      "Queen Jamillia",
      "Queen Neeyutnee",
      "Qui-Gon Jinn",
      "Quiggold",
      "Quinlan Vos",
      "R2-D2",
      "R2-KT",
      "R3-S6",
      "R4-P17",
      "R5-D4",
      "RA-7",
      "Rab\xE9",
      "Rako Hardeen",
      "Ransolm Casterfo",
      "Rappertunie",
      "Ratts Tyerell",
      "Raymus Antilles",
      "Ree-Yees",
      "Reeve Panzoro",
      "Rey",
      "Ric Oli\xE9",
      "Riff Tamson",
      "Riley",
      "Rinnriyin Di",
      "Rio Durant",
      "Rogue Squadron",
      "Romba",
      "Roos Tarpals",
      "Rose Tico",
      "Rotta the Hutt",
      "Rukh",
      "Rune Haako",
      "Rush Clovis",
      "Ruwee Naberrie",
      "Ryoo Naberrie",
      "Sab\xE9",
      "Sabine Wren",
      "Sach\xE9",
      "Saelt-Marae",
      "Saesee Tiin",
      "Salacious B. Crumb",
      "San Hill",
      "Sana Starros",
      "Sarco Plank",
      "Sarkli",
      "Satine Kryze",
      "Savage Opress",
      "Sebulba",
      "Senator Organa",
      "Sergeant Kreel",
      "Seventh Sister",
      "Shaak Ti",
      "Shara Bey",
      "Shmi Skywalker",
      "Shu Mai",
      "Sidon Ithano",
      "Sifo-Dyas",
      "Sim Aloo",
      "Siniir Rath Velus",
      "Sio Bibble",
      "Sixth Brother",
      "Slowen Lo",
      "Sly Moore",
      "Snaggletooth",
      "Snap Wexley",
      "Snoke",
      "Sola Naberrie",
      "Sora Bulq",
      "Strono Tuggs",
      "Sy Snootles",
      "Tallissan Lintra",
      "Tarfful",
      "Tasu Leech",
      "Taun We",
      "TC-14",
      "Tee Watt Kaa",
      "Teebo",
      "Teedo",
      "Teemto Pagalies",
      "Temiri Blagg",
      "Tessek",
      "Tey How",
      "Thane Kyrell",
      "The Bendu",
      "The Smuggler",
      "Thrawn",
      "Tiaan Jerjerrod",
      "Tion Medon",
      "Tobias Beckett",
      "Tulon Voidgazer",
      "Tup",
      "U9-C4",
      "Unkar Plutt",
      "Val Beckett",
      "Vanden Willard",
      "Vice Admiral Amilyn Holdo",
      "Vober Dand",
      "WAC-47",
      "Wag Too",
      "Wald",
      "Walrus Man",
      "Warok",
      "Wat Tambor",
      "Watto",
      "Wedge Antilles",
      "Wes Janson",
      "Wicket W. Warrick",
      "Wilhuff Tarkin",
      "Wollivan",
      "Wuher",
      "Wullf Yularen",
      "Xamuel Lennox",
      "Yaddle",
      "Yarael Poof",
      "Yoda",
      "Zam Wesell",
      "Zev Senesca",
      "Ziro the Hutt",
      "Zuckuss"
    ];
    dummyLookupService = {
      search(string, callback) {
        setTimeout(() => {
          const results = dummyMentionsData.filter(
            (mention) => mention.toLowerCase().includes(string.toLowerCase())
          );
          callback(results);
        }, 500);
      }
    };
    MentionTypeaheadOption = class extends import_LexicalTypeaheadMenuPlugin.MenuOption {
      constructor(name, picture) {
        super(name);
        this.name = name;
        this.picture = picture;
      }
    };
  }
});

// src/components/editor/plugins/TreeViewPlugin/index.tsx
function TreeViewPlugin() {
  const [editor] = (0, import_LexicalComposerContext5.useLexicalComposerContext)();
  return /* @__PURE__ */ React8.createElement(
    import_LexicalTreeView.TreeView,
    {
      viewClassName: "tree-view-output",
      treeTypeButtonClassName: "debug-treetype-button",
      timeTravelPanelClassName: "debug-timetravel-panel",
      timeTravelButtonClassName: "debug-timetravel-button",
      timeTravelPanelSliderClassName: "debug-timetravel-panel-slider",
      timeTravelPanelButtonClassName: "debug-timetravel-panel-button",
      editor
    }
  );
}
var import_LexicalComposerContext5, import_LexicalTreeView, React8;
var init_TreeViewPlugin = __esm({
  "src/components/editor/plugins/TreeViewPlugin/index.tsx"() {
    "use strict";
    init_cjs_shims();
    import_LexicalComposerContext5 = require("@lexical/react/LexicalComposerContext");
    import_LexicalTreeView = require("@lexical/react/LexicalTreeView");
    React8 = __toESM(require("react"));
  }
});

// src/components/editor/ui/ContentEditable.css
var init_ContentEditable = __esm({
  "src/components/editor/ui/ContentEditable.css"() {
  }
});

// src/components/editor/ui/ContentEditable.tsx
function LexicalContentEditable({
  className
}) {
  return /* @__PURE__ */ React9.createElement(import_LexicalContentEditable.ContentEditable, { className: className || "ContentEditable__root" });
}
var import_LexicalContentEditable, React9;
var init_ContentEditable2 = __esm({
  "src/components/editor/ui/ContentEditable.tsx"() {
    "use strict";
    init_cjs_shims();
    init_ContentEditable();
    import_LexicalContentEditable = require("@lexical/react/LexicalContentEditable");
    React9 = __toESM(require("react"));
  }
});

// src/components/editor/ui/ImageResizer.tsx
function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}
function ImageResizer({
  onResizeStart,
  onResizeEnd,
  buttonRef,
  imageRef,
  maxWidth,
  editor,
  showCaption,
  setShowCaption,
  captionsEnabled
}) {
  const controlWrapperRef = (0, import_react9.useRef)(null);
  const userSelect = (0, import_react9.useRef)({
    priority: "",
    value: "default"
  });
  const positioningRef = (0, import_react9.useRef)({
    currentHeight: 0,
    currentWidth: 0,
    direction: 0,
    isResizing: false,
    ratio: 0,
    startHeight: 0,
    startWidth: 0,
    startX: 0,
    startY: 0
  });
  const editorRootElement = editor.getRootElement();
  const maxWidthContainer = maxWidth ? maxWidth : editorRootElement !== null ? editorRootElement.getBoundingClientRect().width - 20 : 100;
  const maxHeightContainer = editorRootElement !== null ? editorRootElement.getBoundingClientRect().height - 20 : 100;
  const minWidth = 100;
  const minHeight = 100;
  const setStartCursor = (direction) => {
    const ew = direction === Direction.east || direction === Direction.west;
    const ns = direction === Direction.north || direction === Direction.south;
    const nwse = direction & Direction.north && direction & Direction.west || direction & Direction.south && direction & Direction.east;
    const cursorDir = ew ? "ew" : ns ? "ns" : nwse ? "nwse" : "nesw";
    if (editorRootElement !== null) {
      editorRootElement.style.setProperty(
        "cursor",
        `${cursorDir}-resize`,
        "important"
      );
    }
    if (document.body !== null) {
      document.body.style.setProperty(
        "cursor",
        `${cursorDir}-resize`,
        "important"
      );
      userSelect.current.value = document.body.style.getPropertyValue(
        "-webkit-user-select"
      );
      userSelect.current.priority = document.body.style.getPropertyPriority(
        "-webkit-user-select"
      );
      document.body.style.setProperty(
        "-webkit-user-select",
        `none`,
        "important"
      );
    }
  };
  const setEndCursor = () => {
    if (editorRootElement !== null) {
      editorRootElement.style.setProperty("cursor", "text");
    }
    if (document.body !== null) {
      document.body.style.setProperty("cursor", "default");
      document.body.style.setProperty(
        "-webkit-user-select",
        userSelect.current.value,
        userSelect.current.priority
      );
    }
  };
  const handlePointerDown = (event, direction) => {
    if (!editor.isEditable()) {
      return;
    }
    const image = imageRef.current;
    const controlWrapper = controlWrapperRef.current;
    if (image !== null && controlWrapper !== null) {
      event.preventDefault();
      const { width, height } = image.getBoundingClientRect();
      const zoom = (0, import_utils2.calculateZoomLevel)(image);
      const positioning = positioningRef.current;
      positioning.startWidth = width;
      positioning.startHeight = height;
      positioning.ratio = width / height;
      positioning.currentWidth = width;
      positioning.currentHeight = height;
      positioning.startX = event.clientX / zoom;
      positioning.startY = event.clientY / zoom;
      positioning.isResizing = true;
      positioning.direction = direction;
      setStartCursor(direction);
      onResizeStart();
      controlWrapper.classList.add("image-control-wrapper--resizing");
      image.style.height = `${height}px`;
      image.style.width = `${width}px`;
      document.addEventListener("pointermove", handlePointerMove);
      document.addEventListener("pointerup", handlePointerUp);
    }
  };
  const handlePointerMove = (event) => {
    const image = imageRef.current;
    const positioning = positioningRef.current;
    const isHorizontal = positioning.direction & (Direction.east | Direction.west);
    const isVertical = positioning.direction & (Direction.south | Direction.north);
    if (image !== null && positioning.isResizing) {
      const zoom = (0, import_utils2.calculateZoomLevel)(image);
      if (isHorizontal && isVertical) {
        let diff = Math.floor(positioning.startX - event.clientX / zoom);
        diff = positioning.direction & Direction.east ? -diff : diff;
        const width = clamp(
          positioning.startWidth + diff,
          minWidth,
          maxWidthContainer
        );
        const height = width / positioning.ratio;
        image.style.width = `${width}px`;
        image.style.height = `${height}px`;
        positioning.currentHeight = height;
        positioning.currentWidth = width;
      } else if (isVertical) {
        let diff = Math.floor(positioning.startY - event.clientY / zoom);
        diff = positioning.direction & Direction.south ? -diff : diff;
        const height = clamp(
          positioning.startHeight + diff,
          minHeight,
          maxHeightContainer
        );
        image.style.height = `${height}px`;
        positioning.currentHeight = height;
      } else {
        let diff = Math.floor(positioning.startX - event.clientX / zoom);
        diff = positioning.direction & Direction.east ? -diff : diff;
        const width = clamp(
          positioning.startWidth + diff,
          minWidth,
          maxWidthContainer
        );
        image.style.width = `${width}px`;
        positioning.currentWidth = width;
      }
    }
  };
  const handlePointerUp = () => {
    const image = imageRef.current;
    const positioning = positioningRef.current;
    const controlWrapper = controlWrapperRef.current;
    if (image !== null && controlWrapper !== null && positioning.isResizing) {
      const width = positioning.currentWidth;
      const height = positioning.currentHeight;
      positioning.startWidth = 0;
      positioning.startHeight = 0;
      positioning.ratio = 0;
      positioning.startX = 0;
      positioning.startY = 0;
      positioning.currentWidth = 0;
      positioning.currentHeight = 0;
      positioning.isResizing = false;
      controlWrapper.classList.remove("image-control-wrapper--resizing");
      setEndCursor();
      onResizeEnd(width, height);
      document.removeEventListener("pointermove", handlePointerMove);
      document.removeEventListener("pointerup", handlePointerUp);
    }
  };
  return /* @__PURE__ */ React10.createElement("div", { ref: controlWrapperRef }, !showCaption && captionsEnabled && /* @__PURE__ */ React10.createElement(
    "button",
    {
      className: "image-caption-button",
      ref: buttonRef,
      onClick: () => {
        setShowCaption(!showCaption);
      }
    },
    "Add Caption"
  ), /* @__PURE__ */ React10.createElement(
    "div",
    {
      className: "image-resizer image-resizer-n",
      onPointerDown: (event) => {
        handlePointerDown(event, Direction.north);
      }
    }
  ), /* @__PURE__ */ React10.createElement(
    "div",
    {
      className: "image-resizer image-resizer-ne",
      onPointerDown: (event) => {
        handlePointerDown(event, Direction.north | Direction.east);
      }
    }
  ), /* @__PURE__ */ React10.createElement(
    "div",
    {
      className: "image-resizer image-resizer-e",
      onPointerDown: (event) => {
        handlePointerDown(event, Direction.east);
      }
    }
  ), /* @__PURE__ */ React10.createElement(
    "div",
    {
      className: "image-resizer image-resizer-se",
      onPointerDown: (event) => {
        handlePointerDown(event, Direction.south | Direction.east);
      }
    }
  ), /* @__PURE__ */ React10.createElement(
    "div",
    {
      className: "image-resizer image-resizer-s",
      onPointerDown: (event) => {
        handlePointerDown(event, Direction.south);
      }
    }
  ), /* @__PURE__ */ React10.createElement(
    "div",
    {
      className: "image-resizer image-resizer-sw",
      onPointerDown: (event) => {
        handlePointerDown(event, Direction.south | Direction.west);
      }
    }
  ), /* @__PURE__ */ React10.createElement(
    "div",
    {
      className: "image-resizer image-resizer-w",
      onPointerDown: (event) => {
        handlePointerDown(event, Direction.west);
      }
    }
  ), /* @__PURE__ */ React10.createElement(
    "div",
    {
      className: "image-resizer image-resizer-nw",
      onPointerDown: (event) => {
        handlePointerDown(event, Direction.north | Direction.west);
      }
    }
  ));
}
var import_utils2, React10, import_react9, Direction;
var init_ImageResizer = __esm({
  "src/components/editor/ui/ImageResizer.tsx"() {
    "use strict";
    init_cjs_shims();
    import_utils2 = require("@lexical/utils");
    React10 = __toESM(require("react"));
    import_react9 = require("react");
    Direction = {
      east: 1 << 0,
      north: 1 << 3,
      south: 1 << 1,
      west: 1 << 2
    };
  }
});

// src/components/editor/ui/Placeholder.css
var init_Placeholder = __esm({
  "src/components/editor/ui/Placeholder.css"() {
  }
});

// src/components/editor/ui/Placeholder.tsx
function Placeholder({
  children,
  className
}) {
  return /* @__PURE__ */ React11.createElement("div", { className: className || "Placeholder__root" }, children);
}
var React11;
var init_Placeholder2 = __esm({
  "src/components/editor/ui/Placeholder.tsx"() {
    "use strict";
    init_cjs_shims();
    init_Placeholder();
    React11 = __toESM(require("react"));
  }
});

// src/components/editor/nodes/ImageComponent.tsx
var ImageComponent_exports = {};
__export(ImageComponent_exports, {
  RIGHT_CLICK_IMAGE_COMMAND: () => RIGHT_CLICK_IMAGE_COMMAND,
  default: () => ImageComponent
});
function useSuspenseImage(src) {
  if (!imageCache.has(src)) {
    throw new Promise((resolve) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        imageCache.add(src);
        resolve(null);
      };
      img.onerror = () => {
        imageCache.add(src);
      };
    });
  }
}
function LazyImage({
  altText,
  className,
  imageRef,
  src,
  width,
  height,
  maxWidth,
  onError
}) {
  useSuspenseImage(src);
  return /* @__PURE__ */ import_react10.default.createElement(
    "img",
    {
      className: className || void 0,
      src,
      alt: altText,
      ref: imageRef,
      style: {
        height,
        maxWidth,
        width
      },
      onError,
      draggable: "false"
    }
  );
}
function BrokenImage() {
  return /* @__PURE__ */ import_react10.default.createElement(
    "img",
    {
      alt: "Broken image icon",
      src: "https://www.shutterstock.com/image-vector/broken-image-icon-vector-design-600nw-2405524013.jpg",
      className: "opacity-50",
      height: 200,
      width: 200,
      draggable: "false"
    }
  );
}
function ImageComponent({
  src,
  altText,
  nodeKey,
  width,
  height,
  maxWidth,
  resizable,
  showCaption,
  caption,
  captionsEnabled
}) {
  const imageRef = (0, import_react11.useRef)(null);
  const buttonRef = (0, import_react11.useRef)(null);
  const [isSelected, setSelected, clearSelection] = (0, import_useLexicalNodeSelection.useLexicalNodeSelection)(nodeKey);
  const [isResizing, setIsResizing] = (0, import_react11.useState)(false);
  const { isCollabActive } = (0, import_LexicalCollaborationContext.useCollaborationContext)();
  const [editor] = (0, import_LexicalComposerContext6.useLexicalComposerContext)();
  const [selection, setSelection] = (0, import_react11.useState)(null);
  const activeEditorRef = (0, import_react11.useRef)(null);
  const [isLoadError, setIsLoadError] = (0, import_react11.useState)(false);
  const $onDelete = (0, import_react11.useCallback)(
    (payload) => {
      if (isSelected && (0, import_lexical7.$isNodeSelection)((0, import_lexical7.$getSelection)())) {
        const event = payload;
        event.preventDefault();
        const node = (0, import_lexical7.$getNodeByKey)(nodeKey);
        if ($isImageNode(node)) {
          node.remove();
          return true;
        }
      }
      return false;
    },
    [isSelected, nodeKey]
  );
  const $onEnter = (0, import_react11.useCallback)(
    (event) => {
      const latestSelection = (0, import_lexical7.$getSelection)();
      const buttonElem = buttonRef.current;
      if (isSelected && (0, import_lexical7.$isNodeSelection)(latestSelection) && latestSelection.getNodes().length === 1) {
        if (showCaption) {
          (0, import_lexical7.$setSelection)(null);
          event.preventDefault();
          caption.focus();
          return true;
        } else if (buttonElem !== null && buttonElem !== document.activeElement) {
          event.preventDefault();
          buttonElem.focus();
          return true;
        }
      }
      return false;
    },
    [caption, isSelected, showCaption]
  );
  const $onEscape = (0, import_react11.useCallback)(
    (event) => {
      if (activeEditorRef.current === caption || buttonRef.current === event.target) {
        (0, import_lexical7.$setSelection)(null);
        editor.update(() => {
          setSelected(true);
          const parentRootElement = editor.getRootElement();
          if (parentRootElement !== null) {
            parentRootElement.focus();
          }
        });
        return true;
      }
      return false;
    },
    [caption, editor, setSelected]
  );
  const onClick = (0, import_react11.useCallback)(
    (payload) => {
      const event = payload;
      if (isResizing) {
        return true;
      }
      if (event.target === imageRef.current) {
        if (event.shiftKey) {
          setSelected(!isSelected);
        } else {
          clearSelection();
          setSelected(true);
        }
        return true;
      }
      return false;
    },
    [isResizing, isSelected, setSelected, clearSelection]
  );
  const onRightClick = (0, import_react11.useCallback)(
    (event) => {
      editor.getEditorState().read(() => {
        const latestSelection = (0, import_lexical7.$getSelection)();
        const domElement = event.target;
        if (domElement.tagName === "IMG" && (0, import_lexical7.$isRangeSelection)(latestSelection) && latestSelection.getNodes().length === 1) {
          editor.dispatchCommand(
            RIGHT_CLICK_IMAGE_COMMAND,
            event
          );
        }
      });
    },
    [editor]
  );
  (0, import_react11.useEffect)(() => {
    let isMounted = true;
    const rootElement = editor.getRootElement();
    const unregister = (0, import_utils3.mergeRegister)(
      editor.registerUpdateListener(({ editorState }) => {
        if (isMounted) {
          setSelection(editorState.read(() => (0, import_lexical7.$getSelection)()));
        }
      }),
      editor.registerCommand(
        import_lexical7.SELECTION_CHANGE_COMMAND,
        (_, activeEditor) => {
          activeEditorRef.current = activeEditor;
          return false;
        },
        import_lexical7.COMMAND_PRIORITY_LOW
      ),
      editor.registerCommand(
        import_lexical7.CLICK_COMMAND,
        onClick,
        import_lexical7.COMMAND_PRIORITY_LOW
      ),
      editor.registerCommand(
        RIGHT_CLICK_IMAGE_COMMAND,
        onClick,
        import_lexical7.COMMAND_PRIORITY_LOW
      ),
      editor.registerCommand(
        import_lexical7.DRAGSTART_COMMAND,
        (event) => {
          if (event.target === imageRef.current) {
            event.preventDefault();
            return true;
          }
          return false;
        },
        import_lexical7.COMMAND_PRIORITY_LOW
      ),
      editor.registerCommand(
        import_lexical7.KEY_DELETE_COMMAND,
        $onDelete,
        import_lexical7.COMMAND_PRIORITY_LOW
      ),
      editor.registerCommand(
        import_lexical7.KEY_BACKSPACE_COMMAND,
        $onDelete,
        import_lexical7.COMMAND_PRIORITY_LOW
      ),
      editor.registerCommand(import_lexical7.KEY_ENTER_COMMAND, $onEnter, import_lexical7.COMMAND_PRIORITY_LOW),
      editor.registerCommand(
        import_lexical7.KEY_ESCAPE_COMMAND,
        $onEscape,
        import_lexical7.COMMAND_PRIORITY_LOW
      )
    );
    rootElement == null ? void 0 : rootElement.addEventListener("contextmenu", onRightClick);
    return () => {
      isMounted = false;
      unregister();
      rootElement == null ? void 0 : rootElement.removeEventListener("contextmenu", onRightClick);
    };
  }, [
    clearSelection,
    editor,
    isResizing,
    isSelected,
    nodeKey,
    $onDelete,
    $onEnter,
    $onEscape,
    onClick,
    onRightClick,
    setSelected
  ]);
  const setShowCaption = () => {
    editor.update(() => {
      const node = (0, import_lexical7.$getNodeByKey)(nodeKey);
      if ($isImageNode(node)) {
        node.setShowCaption(true);
      }
    });
  };
  const onResizeEnd = (nextWidth, nextHeight) => {
    setTimeout(() => {
      setIsResizing(false);
    }, 200);
    editor.update(() => {
      const node = (0, import_lexical7.$getNodeByKey)(nodeKey);
      if ($isImageNode(node)) {
        node.setWidthAndHeight(nextWidth, nextHeight);
      }
    });
  };
  const onResizeStart = () => {
    setIsResizing(true);
  };
  const { historyState } = useSharedHistoryContext();
  const draggable = isSelected && (0, import_lexical7.$isNodeSelection)(selection) && !isResizing;
  const isFocused = isSelected || isResizing;
  return /* @__PURE__ */ import_react10.default.createElement(import_react11.Suspense, { fallback: null }, /* @__PURE__ */ import_react10.default.createElement(import_react10.default.Fragment, null, /* @__PURE__ */ import_react10.default.createElement("div", { draggable }, isLoadError ? /* @__PURE__ */ import_react10.default.createElement(BrokenImage, null) : /* @__PURE__ */ import_react10.default.createElement(
    LazyImage,
    {
      className: isFocused ? `focused ${(0, import_lexical7.$isNodeSelection)(selection) ? "draggable" : ""}` : null,
      src,
      altText,
      imageRef,
      width,
      height,
      maxWidth,
      onError: () => setIsLoadError(true)
    }
  )), showCaption && /* @__PURE__ */ import_react10.default.createElement("div", { className: "image-caption-container" }, /* @__PURE__ */ import_react10.default.createElement(import_LexicalNestedComposer.LexicalNestedComposer, { initialEditor: caption }, /* @__PURE__ */ import_react10.default.createElement(import_LexicalAutoFocusPlugin.AutoFocusPlugin, null), /* @__PURE__ */ import_react10.default.createElement(NewMentionsPlugin, null), /* @__PURE__ */ import_react10.default.createElement(LinkPlugin, null), /* @__PURE__ */ import_react10.default.createElement(EmojisPlugin, null), /* @__PURE__ */ import_react10.default.createElement(import_LexicalHashtagPlugin.HashtagPlugin, null), /* @__PURE__ */ import_react10.default.createElement(KeywordsPlugin, null), /* @__PURE__ */ import_react10.default.createElement(import_LexicalHistoryPlugin2.HistoryPlugin, { externalHistoryState: historyState }), /* @__PURE__ */ import_react10.default.createElement(
    import_LexicalRichTextPlugin.RichTextPlugin,
    {
      contentEditable: /* @__PURE__ */ import_react10.default.createElement(LexicalContentEditable, { className: "ImageNode__contentEditable" }),
      placeholder: /* @__PURE__ */ import_react10.default.createElement(Placeholder, { className: "ImageNode__placeholder" }, "Enter a caption..."),
      ErrorBoundary: import_LexicalErrorBoundary.default
    }
  ), /* @__PURE__ */ import_react10.default.createElement(TreeViewPlugin, null))), resizable && (0, import_lexical7.$isNodeSelection)(selection) && isFocused && /* @__PURE__ */ import_react10.default.createElement(
    ImageResizer,
    {
      showCaption,
      setShowCaption,
      editor,
      buttonRef,
      imageRef,
      maxWidth,
      onResizeStart,
      onResizeEnd,
      captionsEnabled: !isLoadError && captionsEnabled
    }
  )));
}
var import_LexicalAutoFocusPlugin, import_LexicalCollaborationContext, import_LexicalComposerContext6, import_LexicalErrorBoundary, import_LexicalHashtagPlugin, import_LexicalHistoryPlugin2, import_LexicalNestedComposer, import_LexicalRichTextPlugin, import_useLexicalNodeSelection, import_utils3, import_lexical7, import_react10, import_react11, imageCache, RIGHT_CLICK_IMAGE_COMMAND;
var init_ImageComponent = __esm({
  "src/components/editor/nodes/ImageComponent.tsx"() {
    "use strict";
    init_cjs_shims();
    init_ImageNode();
    import_LexicalAutoFocusPlugin = require("@lexical/react/LexicalAutoFocusPlugin");
    import_LexicalCollaborationContext = require("@lexical/react/LexicalCollaborationContext");
    import_LexicalComposerContext6 = require("@lexical/react/LexicalComposerContext");
    import_LexicalErrorBoundary = __toESM(require("@lexical/react/LexicalErrorBoundary"));
    import_LexicalHashtagPlugin = require("@lexical/react/LexicalHashtagPlugin");
    import_LexicalHistoryPlugin2 = require("@lexical/react/LexicalHistoryPlugin");
    import_LexicalNestedComposer = require("@lexical/react/LexicalNestedComposer");
    import_LexicalRichTextPlugin = require("@lexical/react/LexicalRichTextPlugin");
    import_useLexicalNodeSelection = require("@lexical/react/useLexicalNodeSelection");
    import_utils3 = require("@lexical/utils");
    import_lexical7 = require("lexical");
    import_react10 = __toESM(require("react"));
    import_react11 = require("react");
    init_SharedHistoryContext();
    init_EmojisPlugin();
    init_KeywordsPlugin();
    init_LinkPlugin();
    init_MentionsPlugin();
    init_TreeViewPlugin();
    init_ContentEditable2();
    init_ImageResizer();
    init_Placeholder2();
    init_ImageNode2();
    imageCache = /* @__PURE__ */ new Set();
    RIGHT_CLICK_IMAGE_COMMAND = (0, import_lexical7.createCommand)("RIGHT_CLICK_IMAGE_COMMAND");
  }
});

// src/components/editor/nodes/ImageNode.tsx
function isGoogleDocCheckboxImg(img) {
  return img.parentElement != null && img.parentElement.tagName === "LI" && img.previousSibling === null && img.getAttribute("aria-roledescription") === "checkbox";
}
function $convertImageElement(domNode) {
  const img = domNode;
  if (img.src.startsWith("file:///") || isGoogleDocCheckboxImg(img)) {
    return null;
  }
  const { alt: altText, src, width, height } = img;
  const node = $createImageNode({ altText, height, src, width });
  return { node };
}
function $createImageNode({
  altText,
  height,
  maxWidth = 500,
  captionsEnabled,
  src,
  width,
  showCaption,
  caption,
  key
}) {
  return (0, import_lexical8.$applyNodeReplacement)(
    new ImageNode(
      src,
      altText,
      maxWidth,
      width,
      height,
      showCaption,
      caption,
      captionsEnabled,
      key
    )
  );
}
function $isImageNode(node) {
  return node instanceof ImageNode;
}
var import_lexical8, React13, import_react12, ImageComponent2, ImageNode;
var init_ImageNode2 = __esm({
  "src/components/editor/nodes/ImageNode.tsx"() {
    "use strict";
    init_cjs_shims();
    import_lexical8 = require("lexical");
    React13 = __toESM(require("react"));
    import_react12 = require("react");
    ImageComponent2 = React13.lazy(() => Promise.resolve().then(() => (init_ImageComponent(), ImageComponent_exports)));
    ImageNode = class _ImageNode extends import_lexical8.DecoratorNode {
      static getType() {
        return "image";
      }
      static clone(node) {
        return new _ImageNode(
          node.__src,
          node.__altText,
          node.__maxWidth,
          node.__width,
          node.__height,
          node.__showCaption,
          node.__caption,
          node.__captionsEnabled,
          node.__key
        );
      }
      static importJSON(serializedNode) {
        const { altText, height, width, maxWidth, caption, src, showCaption } = serializedNode;
        const node = $createImageNode({
          altText,
          height,
          maxWidth,
          showCaption,
          src,
          width
        });
        const nestedEditor = node.__caption;
        const editorState = nestedEditor.parseEditorState(caption.editorState);
        if (!editorState.isEmpty()) {
          nestedEditor.setEditorState(editorState);
        }
        return node;
      }
      exportDOM() {
        const element = document.createElement("img");
        element.setAttribute("src", this.__src);
        element.setAttribute("alt", this.__altText);
        element.setAttribute("width", this.__width.toString());
        element.setAttribute("height", this.__height.toString());
        return { element };
      }
      static importDOM() {
        return {
          img: (node) => ({
            conversion: $convertImageElement,
            priority: 0
          })
        };
      }
      constructor(src, altText, maxWidth, width, height, showCaption, caption, captionsEnabled, key) {
        super(key);
        this.__src = src;
        this.__altText = altText;
        this.__maxWidth = maxWidth;
        this.__width = width || "inherit";
        this.__height = height || "inherit";
        this.__showCaption = showCaption || false;
        this.__caption = caption || (0, import_lexical8.createEditor)();
        this.__captionsEnabled = captionsEnabled || captionsEnabled === void 0;
      }
      exportJSON() {
        return {
          altText: this.getAltText(),
          caption: this.__caption.toJSON(),
          height: this.__height === "inherit" ? 0 : this.__height,
          maxWidth: this.__maxWidth,
          showCaption: this.__showCaption,
          src: this.getSrc(),
          type: "image",
          version: 1,
          width: this.__width === "inherit" ? 0 : this.__width
        };
      }
      setWidthAndHeight(width, height) {
        const writable = this.getWritable();
        writable.__width = width;
        writable.__height = height;
      }
      setShowCaption(showCaption) {
        const writable = this.getWritable();
        writable.__showCaption = showCaption;
      }
      // View
      createDOM(config) {
        const span = document.createElement("span");
        const theme2 = config.theme;
        const className = theme2.image;
        if (className !== void 0) {
          span.className = className;
        }
        return span;
      }
      updateDOM() {
        return false;
      }
      getSrc() {
        return this.__src;
      }
      getAltText() {
        return this.__altText;
      }
      decorate() {
        return /* @__PURE__ */ React13.createElement(import_react12.Suspense, { fallback: null }, /* @__PURE__ */ React13.createElement(
          ImageComponent2,
          {
            src: this.__src,
            altText: this.__altText,
            width: this.__width,
            height: this.__height,
            maxWidth: this.__maxWidth,
            nodeKey: this.getKey(),
            showCaption: this.__showCaption,
            caption: this.__caption,
            captionsEnabled: this.__captionsEnabled,
            resizable: true
          }
        ));
      }
    };
  }
});

// src/components/editor/utils/emoji-list.ts
var emoji_list_exports = {};
__export(emoji_list_exports, {
  default: () => emoji_list_default
});
var emoji_list_default;
var init_emoji_list = __esm({
  "src/components/editor/utils/emoji-list.ts"() {
    "use strict";
    init_cjs_shims();
    emoji_list_default = [
      {
        description: "grinning face",
        emoji: "\u{1F600}",
        category: "Smileys & Emotion",
        aliases: ["grinning"],
        tags: ["smile", "happy"],
        unicode_version: "6.1",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F603}",
        description: "grinning face with big eyes",
        category: "Smileys & Emotion",
        aliases: ["smiley"],
        tags: ["happy", "joy", "haha"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F604}",
        description: "grinning face with smiling eyes",
        category: "Smileys & Emotion",
        aliases: ["smile"],
        tags: ["happy", "joy", "laugh", "pleased"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F601}",
        description: "beaming face with smiling eyes",
        category: "Smileys & Emotion",
        aliases: ["grin"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F606}",
        description: "grinning squinting face",
        category: "Smileys & Emotion",
        aliases: ["laughing", "satisfied"],
        tags: ["happy", "haha"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F605}",
        description: "grinning face with sweat",
        category: "Smileys & Emotion",
        aliases: ["sweat_smile"],
        tags: ["hot"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F923}",
        description: "rolling on the floor laughing",
        category: "Smileys & Emotion",
        aliases: ["rofl"],
        tags: ["lol", "laughing"],
        unicode_version: "9.0",
        ios_version: "10.2"
      },
      {
        emoji: "\u{1F602}",
        description: "face with tears of joy",
        category: "Smileys & Emotion",
        aliases: ["joy"],
        tags: ["tears"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F642}",
        description: "slightly smiling face",
        category: "Smileys & Emotion",
        aliases: ["slightly_smiling_face"],
        tags: [],
        unicode_version: "7.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F643}",
        description: "upside-down face",
        category: "Smileys & Emotion",
        aliases: ["upside_down_face"],
        tags: [],
        unicode_version: "8.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F609}",
        description: "winking face",
        category: "Smileys & Emotion",
        aliases: ["wink"],
        tags: ["flirt"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F60A}",
        description: "smiling face with smiling eyes",
        category: "Smileys & Emotion",
        aliases: ["blush"],
        tags: ["proud"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F607}",
        description: "smiling face with halo",
        category: "Smileys & Emotion",
        aliases: ["innocent"],
        tags: ["angel"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F970}",
        description: "smiling face with hearts",
        category: "Smileys & Emotion",
        aliases: ["smiling_face_with_three_hearts"],
        tags: ["love"],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F60D}",
        description: "smiling face with heart-eyes",
        category: "Smileys & Emotion",
        aliases: ["heart_eyes"],
        tags: ["love", "crush"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F929}",
        description: "star-struck",
        category: "Smileys & Emotion",
        aliases: ["star_struck"],
        tags: ["eyes"],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F618}",
        description: "face blowing a kiss",
        category: "Smileys & Emotion",
        aliases: ["kissing_heart"],
        tags: ["flirt"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F617}",
        description: "kissing face",
        category: "Smileys & Emotion",
        aliases: ["kissing"],
        tags: [],
        unicode_version: "6.1",
        ios_version: "6.0"
      },
      {
        emoji: "\u263A\uFE0F",
        description: "smiling face",
        category: "Smileys & Emotion",
        aliases: ["relaxed"],
        tags: ["blush", "pleased"],
        unicode_version: "",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F61A}",
        description: "kissing face with closed eyes",
        category: "Smileys & Emotion",
        aliases: ["kissing_closed_eyes"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F619}",
        description: "kissing face with smiling eyes",
        category: "Smileys & Emotion",
        aliases: ["kissing_smiling_eyes"],
        tags: [],
        unicode_version: "6.1",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F972}",
        description: "smiling face with tear",
        category: "Smileys & Emotion",
        aliases: ["smiling_face_with_tear"],
        tags: [],
        unicode_version: "13.0",
        ios_version: "14.0"
      },
      {
        emoji: "\u{1F60B}",
        description: "face savoring food",
        category: "Smileys & Emotion",
        aliases: ["yum"],
        tags: ["tongue", "lick"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F61B}",
        description: "face with tongue",
        category: "Smileys & Emotion",
        aliases: ["stuck_out_tongue"],
        tags: [],
        unicode_version: "6.1",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F61C}",
        description: "winking face with tongue",
        category: "Smileys & Emotion",
        aliases: ["stuck_out_tongue_winking_eye"],
        tags: ["prank", "silly"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F92A}",
        description: "zany face",
        category: "Smileys & Emotion",
        aliases: ["zany_face"],
        tags: ["goofy", "wacky"],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F61D}",
        description: "squinting face with tongue",
        category: "Smileys & Emotion",
        aliases: ["stuck_out_tongue_closed_eyes"],
        tags: ["prank"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F911}",
        description: "money-mouth face",
        category: "Smileys & Emotion",
        aliases: ["money_mouth_face"],
        tags: ["rich"],
        unicode_version: "8.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F917}",
        description: "hugging face",
        category: "Smileys & Emotion",
        aliases: ["hugs"],
        tags: [],
        unicode_version: "8.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F92D}",
        description: "face with hand over mouth",
        category: "Smileys & Emotion",
        aliases: ["hand_over_mouth"],
        tags: ["quiet", "whoops"],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F92B}",
        description: "shushing face",
        category: "Smileys & Emotion",
        aliases: ["shushing_face"],
        tags: ["silence", "quiet"],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F914}",
        description: "thinking face",
        category: "Smileys & Emotion",
        aliases: ["thinking"],
        tags: [],
        unicode_version: "8.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F910}",
        description: "zipper-mouth face",
        category: "Smileys & Emotion",
        aliases: ["zipper_mouth_face"],
        tags: ["silence", "hush"],
        unicode_version: "8.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F928}",
        description: "face with raised eyebrow",
        category: "Smileys & Emotion",
        aliases: ["raised_eyebrow"],
        tags: ["suspicious"],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F610}",
        description: "neutral face",
        category: "Smileys & Emotion",
        aliases: ["neutral_face"],
        tags: ["meh"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F611}",
        description: "expressionless face",
        category: "Smileys & Emotion",
        aliases: ["expressionless"],
        tags: [],
        unicode_version: "6.1",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F636}",
        description: "face without mouth",
        category: "Smileys & Emotion",
        aliases: ["no_mouth"],
        tags: ["mute", "silence"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F636}\u200D\u{1F32B}\uFE0F",
        description: "face in clouds",
        category: "Smileys & Emotion",
        aliases: ["face_in_clouds"],
        tags: [],
        unicode_version: "13.1",
        ios_version: "14.0"
      },
      {
        emoji: "\u{1F60F}",
        description: "smirking face",
        category: "Smileys & Emotion",
        aliases: ["smirk"],
        tags: ["smug"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F612}",
        description: "unamused face",
        category: "Smileys & Emotion",
        aliases: ["unamused"],
        tags: ["meh"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F644}",
        description: "face with rolling eyes",
        category: "Smileys & Emotion",
        aliases: ["roll_eyes"],
        tags: [],
        unicode_version: "8.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F62C}",
        description: "grimacing face",
        category: "Smileys & Emotion",
        aliases: ["grimacing"],
        tags: [],
        unicode_version: "6.1",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F62E}\u200D\u{1F4A8}",
        description: "face exhaling",
        category: "Smileys & Emotion",
        aliases: ["face_exhaling"],
        tags: [],
        unicode_version: "13.1",
        ios_version: "14.0"
      },
      {
        emoji: "\u{1F925}",
        description: "lying face",
        category: "Smileys & Emotion",
        aliases: ["lying_face"],
        tags: ["liar"],
        unicode_version: "9.0",
        ios_version: "10.2"
      },
      {
        emoji: "\u{1F60C}",
        description: "relieved face",
        category: "Smileys & Emotion",
        aliases: ["relieved"],
        tags: ["whew"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F614}",
        description: "pensive face",
        category: "Smileys & Emotion",
        aliases: ["pensive"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F62A}",
        description: "sleepy face",
        category: "Smileys & Emotion",
        aliases: ["sleepy"],
        tags: ["tired"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F924}",
        description: "drooling face",
        category: "Smileys & Emotion",
        aliases: ["drooling_face"],
        tags: [],
        unicode_version: "9.0",
        ios_version: "10.2"
      },
      {
        emoji: "\u{1F634}",
        description: "sleeping face",
        category: "Smileys & Emotion",
        aliases: ["sleeping"],
        tags: ["zzz"],
        unicode_version: "6.1",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F637}",
        description: "face with medical mask",
        category: "Smileys & Emotion",
        aliases: ["mask"],
        tags: ["sick", "ill"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F912}",
        description: "face with thermometer",
        category: "Smileys & Emotion",
        aliases: ["face_with_thermometer"],
        tags: ["sick"],
        unicode_version: "8.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F915}",
        description: "face with head-bandage",
        category: "Smileys & Emotion",
        aliases: ["face_with_head_bandage"],
        tags: ["hurt"],
        unicode_version: "8.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F922}",
        description: "nauseated face",
        category: "Smileys & Emotion",
        aliases: ["nauseated_face"],
        tags: ["sick", "barf", "disgusted"],
        unicode_version: "9.0",
        ios_version: "10.2"
      },
      {
        emoji: "\u{1F92E}",
        description: "face vomiting",
        category: "Smileys & Emotion",
        aliases: ["vomiting_face"],
        tags: ["barf", "sick"],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F927}",
        description: "sneezing face",
        category: "Smileys & Emotion",
        aliases: ["sneezing_face"],
        tags: ["achoo", "sick"],
        unicode_version: "9.0",
        ios_version: "10.2"
      },
      {
        emoji: "\u{1F975}",
        description: "hot face",
        category: "Smileys & Emotion",
        aliases: ["hot_face"],
        tags: ["heat", "sweating"],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F976}",
        description: "cold face",
        category: "Smileys & Emotion",
        aliases: ["cold_face"],
        tags: ["freezing", "ice"],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F974}",
        description: "woozy face",
        category: "Smileys & Emotion",
        aliases: ["woozy_face"],
        tags: ["groggy"],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F635}",
        description: "knocked-out face",
        category: "Smileys & Emotion",
        aliases: ["dizzy_face"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F635}\u200D\u{1F4AB}",
        description: "face with spiral eyes",
        category: "Smileys & Emotion",
        aliases: ["face_with_spiral_eyes"],
        tags: [],
        unicode_version: "13.1",
        ios_version: "14.0"
      },
      {
        emoji: "\u{1F92F}",
        description: "exploding head",
        category: "Smileys & Emotion",
        aliases: ["exploding_head"],
        tags: ["mind", "blown"],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F920}",
        description: "cowboy hat face",
        category: "Smileys & Emotion",
        aliases: ["cowboy_hat_face"],
        tags: [],
        unicode_version: "9.0",
        ios_version: "10.2"
      },
      {
        emoji: "\u{1F973}",
        description: "partying face",
        category: "Smileys & Emotion",
        aliases: ["partying_face"],
        tags: ["celebration", "birthday"],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F978}",
        description: "disguised face",
        category: "Smileys & Emotion",
        aliases: ["disguised_face"],
        tags: [],
        unicode_version: "13.0",
        ios_version: "14.0"
      },
      {
        emoji: "\u{1F60E}",
        description: "smiling face with sunglasses",
        category: "Smileys & Emotion",
        aliases: ["sunglasses"],
        tags: ["cool"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F913}",
        description: "nerd face",
        category: "Smileys & Emotion",
        aliases: ["nerd_face"],
        tags: ["geek", "glasses"],
        unicode_version: "8.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F9D0}",
        description: "face with monocle",
        category: "Smileys & Emotion",
        aliases: ["monocle_face"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F615}",
        description: "confused face",
        category: "Smileys & Emotion",
        aliases: ["confused"],
        tags: [],
        unicode_version: "6.1",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F61F}",
        description: "worried face",
        category: "Smileys & Emotion",
        aliases: ["worried"],
        tags: ["nervous"],
        unicode_version: "6.1",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F641}",
        description: "slightly frowning face",
        category: "Smileys & Emotion",
        aliases: ["slightly_frowning_face"],
        tags: [],
        unicode_version: "7.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u2639\uFE0F",
        description: "frowning face",
        category: "Smileys & Emotion",
        aliases: ["frowning_face"],
        tags: [],
        unicode_version: "",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F62E}",
        description: "face with open mouth",
        category: "Smileys & Emotion",
        aliases: ["open_mouth"],
        tags: ["surprise", "impressed", "wow"],
        unicode_version: "6.1",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F62F}",
        description: "hushed face",
        category: "Smileys & Emotion",
        aliases: ["hushed"],
        tags: ["silence", "speechless"],
        unicode_version: "6.1",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F632}",
        description: "astonished face",
        category: "Smileys & Emotion",
        aliases: ["astonished"],
        tags: ["amazed", "gasp"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F633}",
        description: "flushed face",
        category: "Smileys & Emotion",
        aliases: ["flushed"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F97A}",
        description: "pleading face",
        category: "Smileys & Emotion",
        aliases: ["pleading_face"],
        tags: ["puppy", "eyes"],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F626}",
        description: "frowning face with open mouth",
        category: "Smileys & Emotion",
        aliases: ["frowning"],
        tags: [],
        unicode_version: "6.1",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F627}",
        description: "anguished face",
        category: "Smileys & Emotion",
        aliases: ["anguished"],
        tags: ["stunned"],
        unicode_version: "6.1",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F628}",
        description: "fearful face",
        category: "Smileys & Emotion",
        aliases: ["fearful"],
        tags: ["scared", "shocked", "oops"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F630}",
        description: "anxious face with sweat",
        category: "Smileys & Emotion",
        aliases: ["cold_sweat"],
        tags: ["nervous"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F625}",
        description: "sad but relieved face",
        category: "Smileys & Emotion",
        aliases: ["disappointed_relieved"],
        tags: ["phew", "sweat", "nervous"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F622}",
        description: "crying face",
        category: "Smileys & Emotion",
        aliases: ["cry"],
        tags: ["sad", "tear"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F62D}",
        description: "loudly crying face",
        category: "Smileys & Emotion",
        aliases: ["sob"],
        tags: ["sad", "cry", "bawling"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F631}",
        description: "face screaming in fear",
        category: "Smileys & Emotion",
        aliases: ["scream"],
        tags: ["horror", "shocked"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F616}",
        description: "confounded face",
        category: "Smileys & Emotion",
        aliases: ["confounded"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F623}",
        description: "persevering face",
        category: "Smileys & Emotion",
        aliases: ["persevere"],
        tags: ["struggling"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F61E}",
        description: "disappointed face",
        category: "Smileys & Emotion",
        aliases: ["disappointed"],
        tags: ["sad"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F613}",
        description: "downcast face with sweat",
        category: "Smileys & Emotion",
        aliases: ["sweat"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F629}",
        description: "weary face",
        category: "Smileys & Emotion",
        aliases: ["weary"],
        tags: ["tired"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F62B}",
        description: "tired face",
        category: "Smileys & Emotion",
        aliases: ["tired_face"],
        tags: ["upset", "whine"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F971}",
        description: "yawning face",
        category: "Smileys & Emotion",
        aliases: ["yawning_face"],
        tags: [],
        unicode_version: "12.0",
        ios_version: "13.0"
      },
      {
        emoji: "\u{1F624}",
        description: "face with steam from nose",
        category: "Smileys & Emotion",
        aliases: ["triumph"],
        tags: ["smug"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F621}",
        description: "pouting face",
        category: "Smileys & Emotion",
        aliases: ["rage", "pout"],
        tags: ["angry"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F620}",
        description: "angry face",
        category: "Smileys & Emotion",
        aliases: ["angry"],
        tags: ["mad", "annoyed"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F92C}",
        description: "face with symbols on mouth",
        category: "Smileys & Emotion",
        aliases: ["cursing_face"],
        tags: ["foul"],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F608}",
        description: "smiling face with horns",
        category: "Smileys & Emotion",
        aliases: ["smiling_imp"],
        tags: ["devil", "evil", "horns"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F47F}",
        description: "angry face with horns",
        category: "Smileys & Emotion",
        aliases: ["imp"],
        tags: ["angry", "devil", "evil", "horns"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F480}",
        description: "skull",
        category: "Smileys & Emotion",
        aliases: ["skull"],
        tags: ["dead", "danger", "poison"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u2620\uFE0F",
        description: "skull and crossbones",
        category: "Smileys & Emotion",
        aliases: ["skull_and_crossbones"],
        tags: ["danger", "pirate"],
        unicode_version: "",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F4A9}",
        description: "pile of poo",
        category: "Smileys & Emotion",
        aliases: ["hankey", "poop", "shit"],
        tags: ["crap"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F921}",
        description: "clown face",
        category: "Smileys & Emotion",
        aliases: ["clown_face"],
        tags: [],
        unicode_version: "9.0",
        ios_version: "10.2"
      },
      {
        emoji: "\u{1F479}",
        description: "ogre",
        category: "Smileys & Emotion",
        aliases: ["japanese_ogre"],
        tags: ["monster"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F47A}",
        description: "goblin",
        category: "Smileys & Emotion",
        aliases: ["japanese_goblin"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F47B}",
        description: "ghost",
        category: "Smileys & Emotion",
        aliases: ["ghost"],
        tags: ["halloween"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F47D}",
        description: "alien",
        category: "Smileys & Emotion",
        aliases: ["alien"],
        tags: ["ufo"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F47E}",
        description: "alien monster",
        category: "Smileys & Emotion",
        aliases: ["space_invader"],
        tags: ["game", "retro"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F916}",
        description: "robot",
        category: "Smileys & Emotion",
        aliases: ["robot"],
        tags: [],
        unicode_version: "8.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F63A}",
        description: "grinning cat",
        category: "Smileys & Emotion",
        aliases: ["smiley_cat"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F638}",
        description: "grinning cat with smiling eyes",
        category: "Smileys & Emotion",
        aliases: ["smile_cat"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F639}",
        description: "cat with tears of joy",
        category: "Smileys & Emotion",
        aliases: ["joy_cat"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F63B}",
        description: "smiling cat with heart-eyes",
        category: "Smileys & Emotion",
        aliases: ["heart_eyes_cat"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F63C}",
        description: "cat with wry smile",
        category: "Smileys & Emotion",
        aliases: ["smirk_cat"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F63D}",
        description: "kissing cat",
        category: "Smileys & Emotion",
        aliases: ["kissing_cat"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F640}",
        description: "weary cat",
        category: "Smileys & Emotion",
        aliases: ["scream_cat"],
        tags: ["horror"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F63F}",
        description: "crying cat",
        category: "Smileys & Emotion",
        aliases: ["crying_cat_face"],
        tags: ["sad", "tear"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F63E}",
        description: "pouting cat",
        category: "Smileys & Emotion",
        aliases: ["pouting_cat"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F648}",
        description: "see-no-evil monkey",
        category: "Smileys & Emotion",
        aliases: ["see_no_evil"],
        tags: ["monkey", "blind", "ignore"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F649}",
        description: "hear-no-evil monkey",
        category: "Smileys & Emotion",
        aliases: ["hear_no_evil"],
        tags: ["monkey", "deaf"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F64A}",
        description: "speak-no-evil monkey",
        category: "Smileys & Emotion",
        aliases: ["speak_no_evil"],
        tags: ["monkey", "mute", "hush"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F48B}",
        description: "kiss mark",
        category: "Smileys & Emotion",
        aliases: ["kiss"],
        tags: ["lipstick"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F48C}",
        description: "love letter",
        category: "Smileys & Emotion",
        aliases: ["love_letter"],
        tags: ["email", "envelope"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F498}",
        description: "heart with arrow",
        category: "Smileys & Emotion",
        aliases: ["cupid"],
        tags: ["love", "heart"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F49D}",
        description: "heart with ribbon",
        category: "Smileys & Emotion",
        aliases: ["gift_heart"],
        tags: ["chocolates"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F496}",
        description: "sparkling heart",
        category: "Smileys & Emotion",
        aliases: ["sparkling_heart"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F497}",
        description: "growing heart",
        category: "Smileys & Emotion",
        aliases: ["heartpulse"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F493}",
        description: "beating heart",
        category: "Smileys & Emotion",
        aliases: ["heartbeat"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F49E}",
        description: "revolving hearts",
        category: "Smileys & Emotion",
        aliases: ["revolving_hearts"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F495}",
        description: "two hearts",
        category: "Smileys & Emotion",
        aliases: ["two_hearts"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F49F}",
        description: "heart decoration",
        category: "Smileys & Emotion",
        aliases: ["heart_decoration"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u2763\uFE0F",
        description: "heart exclamation",
        category: "Smileys & Emotion",
        aliases: ["heavy_heart_exclamation"],
        tags: [],
        unicode_version: "",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F494}",
        description: "broken heart",
        category: "Smileys & Emotion",
        aliases: ["broken_heart"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u2764\uFE0F\u200D\u{1F525}",
        description: "heart on fire",
        category: "Smileys & Emotion",
        aliases: ["heart_on_fire"],
        tags: [],
        unicode_version: "13.1",
        ios_version: "14.0"
      },
      {
        emoji: "\u2764\uFE0F\u200D\u{1FA79}",
        description: "mending heart",
        category: "Smileys & Emotion",
        aliases: ["mending_heart"],
        tags: [],
        unicode_version: "13.1",
        ios_version: "14.0"
      },
      {
        emoji: "\u2764\uFE0F",
        description: "red heart",
        category: "Smileys & Emotion",
        aliases: ["heart"],
        tags: ["love"],
        unicode_version: "",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F9E1}",
        description: "orange heart",
        category: "Smileys & Emotion",
        aliases: ["orange_heart"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F49B}",
        description: "yellow heart",
        category: "Smileys & Emotion",
        aliases: ["yellow_heart"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F49A}",
        description: "green heart",
        category: "Smileys & Emotion",
        aliases: ["green_heart"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F499}",
        description: "blue heart",
        category: "Smileys & Emotion",
        aliases: ["blue_heart"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F49C}",
        description: "purple heart",
        category: "Smileys & Emotion",
        aliases: ["purple_heart"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F90E}",
        description: "brown heart",
        category: "Smileys & Emotion",
        aliases: ["brown_heart"],
        tags: [],
        unicode_version: "12.0",
        ios_version: "13.0"
      },
      {
        emoji: "\u{1F5A4}",
        description: "black heart",
        category: "Smileys & Emotion",
        aliases: ["black_heart"],
        tags: [],
        unicode_version: "9.0",
        ios_version: "10.2"
      },
      {
        emoji: "\u{1F90D}",
        description: "white heart",
        category: "Smileys & Emotion",
        aliases: ["white_heart"],
        tags: [],
        unicode_version: "12.0",
        ios_version: "13.0"
      },
      {
        emoji: "\u{1F4AF}",
        description: "hundred points",
        category: "Smileys & Emotion",
        aliases: ["100"],
        tags: ["score", "perfect"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F4A2}",
        description: "anger symbol",
        category: "Smileys & Emotion",
        aliases: ["anger"],
        tags: ["angry"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F4A5}",
        description: "collision",
        category: "Smileys & Emotion",
        aliases: ["boom", "collision"],
        tags: ["explode"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F4AB}",
        description: "dizzy",
        category: "Smileys & Emotion",
        aliases: ["dizzy"],
        tags: ["star"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F4A6}",
        description: "sweat droplets",
        category: "Smileys & Emotion",
        aliases: ["sweat_drops"],
        tags: ["water", "workout"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F4A8}",
        description: "dashing away",
        category: "Smileys & Emotion",
        aliases: ["dash"],
        tags: ["wind", "blow", "fast"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F573}\uFE0F",
        description: "hole",
        category: "Smileys & Emotion",
        aliases: ["hole"],
        tags: [],
        unicode_version: "7.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F4A3}",
        description: "bomb",
        category: "Smileys & Emotion",
        aliases: ["bomb"],
        tags: ["boom"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F4AC}",
        description: "speech balloon",
        category: "Smileys & Emotion",
        aliases: ["speech_balloon"],
        tags: ["comment"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F441}\uFE0F\u200D\u{1F5E8}\uFE0F",
        description: "eye in speech bubble",
        category: "Smileys & Emotion",
        aliases: ["eye_speech_bubble"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F5E8}\uFE0F",
        description: "left speech bubble",
        category: "Smileys & Emotion",
        aliases: ["left_speech_bubble"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F5EF}\uFE0F",
        description: "right anger bubble",
        category: "Smileys & Emotion",
        aliases: ["right_anger_bubble"],
        tags: [],
        unicode_version: "7.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F4AD}",
        description: "thought balloon",
        category: "Smileys & Emotion",
        aliases: ["thought_balloon"],
        tags: ["thinking"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F4A4}",
        description: "zzz",
        category: "Smileys & Emotion",
        aliases: ["zzz"],
        tags: ["sleeping"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F44B}",
        description: "waving hand",
        category: "People & Body",
        aliases: ["wave"],
        tags: ["goodbye"],
        unicode_version: "6.0",
        ios_version: "6.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F91A}",
        description: "raised back of hand",
        category: "People & Body",
        aliases: ["raised_back_of_hand"],
        tags: [],
        unicode_version: "9.0",
        ios_version: "10.2",
        skin_tones: true
      },
      {
        emoji: "\u{1F590}\uFE0F",
        description: "hand with fingers splayed",
        category: "People & Body",
        aliases: ["raised_hand_with_fingers_splayed"],
        tags: [],
        unicode_version: "7.0",
        ios_version: "9.1",
        skin_tones: true
      },
      {
        emoji: "\u270B",
        description: "raised hand",
        category: "People & Body",
        aliases: ["hand", "raised_hand"],
        tags: ["highfive", "stop"],
        unicode_version: "6.0",
        ios_version: "6.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F596}",
        description: "vulcan salute",
        category: "People & Body",
        aliases: ["vulcan_salute"],
        tags: ["prosper", "spock"],
        unicode_version: "7.0",
        ios_version: "8.3",
        skin_tones: true
      },
      {
        emoji: "\u{1F44C}",
        description: "OK hand",
        category: "People & Body",
        aliases: ["ok_hand"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F90C}",
        description: "pinched fingers",
        category: "People & Body",
        aliases: ["pinched_fingers"],
        tags: [],
        unicode_version: "13.0",
        ios_version: "14.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F90F}",
        description: "pinching hand",
        category: "People & Body",
        aliases: ["pinching_hand"],
        tags: [],
        unicode_version: "12.0",
        ios_version: "13.0",
        skin_tones: true
      },
      {
        emoji: "\u270C\uFE0F",
        description: "victory hand",
        category: "People & Body",
        aliases: ["v"],
        tags: ["victory", "peace"],
        unicode_version: "",
        ios_version: "6.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F91E}",
        description: "crossed fingers",
        category: "People & Body",
        aliases: ["crossed_fingers"],
        tags: ["luck", "hopeful"],
        unicode_version: "9.0",
        ios_version: "10.2",
        skin_tones: true
      },
      {
        emoji: "\u{1F91F}",
        description: "love-you gesture",
        category: "People & Body",
        aliases: ["love_you_gesture"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1",
        skin_tones: true
      },
      {
        emoji: "\u{1F918}",
        description: "sign of the horns",
        category: "People & Body",
        aliases: ["metal"],
        tags: [],
        unicode_version: "8.0",
        ios_version: "9.1",
        skin_tones: true
      },
      {
        emoji: "\u{1F919}",
        description: "call me hand",
        category: "People & Body",
        aliases: ["call_me_hand"],
        tags: [],
        unicode_version: "9.0",
        ios_version: "10.2",
        skin_tones: true
      },
      {
        emoji: "\u{1F448}",
        description: "backhand index pointing left",
        category: "People & Body",
        aliases: ["point_left"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F449}",
        description: "backhand index pointing right",
        category: "People & Body",
        aliases: ["point_right"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F446}",
        description: "backhand index pointing up",
        category: "People & Body",
        aliases: ["point_up_2"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F595}",
        description: "middle finger",
        category: "People & Body",
        aliases: ["middle_finger", "fu"],
        tags: [],
        unicode_version: "7.0",
        ios_version: "9.1",
        skin_tones: true
      },
      {
        emoji: "\u{1F447}",
        description: "backhand index pointing down",
        category: "People & Body",
        aliases: ["point_down"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0",
        skin_tones: true
      },
      {
        emoji: "\u261D\uFE0F",
        description: "index pointing up",
        category: "People & Body",
        aliases: ["point_up"],
        tags: [],
        unicode_version: "",
        ios_version: "6.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F44D}",
        description: "thumbs up",
        category: "People & Body",
        aliases: ["+1", "thumbsup"],
        tags: ["approve", "ok"],
        unicode_version: "6.0",
        ios_version: "6.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F44E}",
        description: "thumbs down",
        category: "People & Body",
        aliases: ["-1", "thumbsdown"],
        tags: ["disapprove", "bury"],
        unicode_version: "6.0",
        ios_version: "6.0",
        skin_tones: true
      },
      {
        emoji: "\u270A",
        description: "raised fist",
        category: "People & Body",
        aliases: ["fist_raised", "fist"],
        tags: ["power"],
        unicode_version: "6.0",
        ios_version: "6.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F44A}",
        description: "oncoming fist",
        category: "People & Body",
        aliases: ["fist_oncoming", "facepunch", "punch"],
        tags: ["attack"],
        unicode_version: "6.0",
        ios_version: "6.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F91B}",
        description: "left-facing fist",
        category: "People & Body",
        aliases: ["fist_left"],
        tags: [],
        unicode_version: "9.0",
        ios_version: "10.2",
        skin_tones: true
      },
      {
        emoji: "\u{1F91C}",
        description: "right-facing fist",
        category: "People & Body",
        aliases: ["fist_right"],
        tags: [],
        unicode_version: "9.0",
        ios_version: "10.2",
        skin_tones: true
      },
      {
        emoji: "\u{1F44F}",
        description: "clapping hands",
        category: "People & Body",
        aliases: ["clap"],
        tags: ["praise", "applause"],
        unicode_version: "6.0",
        ios_version: "6.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F64C}",
        description: "raising hands",
        category: "People & Body",
        aliases: ["raised_hands"],
        tags: ["hooray"],
        unicode_version: "6.0",
        ios_version: "6.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F450}",
        description: "open hands",
        category: "People & Body",
        aliases: ["open_hands"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F932}",
        description: "palms up together",
        category: "People & Body",
        aliases: ["palms_up_together"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1",
        skin_tones: true
      },
      {
        emoji: "\u{1F91D}",
        description: "handshake",
        category: "People & Body",
        aliases: ["handshake"],
        tags: ["deal"],
        unicode_version: "9.0",
        ios_version: "10.2"
      },
      {
        emoji: "\u{1F64F}",
        description: "folded hands",
        category: "People & Body",
        aliases: ["pray"],
        tags: ["please", "hope", "wish"],
        unicode_version: "6.0",
        ios_version: "6.0",
        skin_tones: true
      },
      {
        emoji: "\u270D\uFE0F",
        description: "writing hand",
        category: "People & Body",
        aliases: ["writing_hand"],
        tags: [],
        unicode_version: "",
        ios_version: "9.1",
        skin_tones: true
      },
      {
        emoji: "\u{1F485}",
        description: "nail polish",
        category: "People & Body",
        aliases: ["nail_care"],
        tags: ["beauty", "manicure"],
        unicode_version: "6.0",
        ios_version: "6.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F933}",
        description: "selfie",
        category: "People & Body",
        aliases: ["selfie"],
        tags: [],
        unicode_version: "9.0",
        ios_version: "10.2",
        skin_tones: true
      },
      {
        emoji: "\u{1F4AA}",
        description: "flexed biceps",
        category: "People & Body",
        aliases: ["muscle"],
        tags: ["flex", "bicep", "strong", "workout"],
        unicode_version: "6.0",
        ios_version: "6.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F9BE}",
        description: "mechanical arm",
        category: "People & Body",
        aliases: ["mechanical_arm"],
        tags: [],
        unicode_version: "12.0",
        ios_version: "13.0"
      },
      {
        emoji: "\u{1F9BF}",
        description: "mechanical leg",
        category: "People & Body",
        aliases: ["mechanical_leg"],
        tags: [],
        unicode_version: "12.0",
        ios_version: "13.0"
      },
      {
        emoji: "\u{1F9B5}",
        description: "leg",
        category: "People & Body",
        aliases: ["leg"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1",
        skin_tones: true
      },
      {
        emoji: "\u{1F9B6}",
        description: "foot",
        category: "People & Body",
        aliases: ["foot"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1",
        skin_tones: true
      },
      {
        emoji: "\u{1F442}",
        description: "ear",
        category: "People & Body",
        aliases: ["ear"],
        tags: ["hear", "sound", "listen"],
        unicode_version: "6.0",
        ios_version: "6.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F9BB}",
        description: "ear with hearing aid",
        category: "People & Body",
        aliases: ["ear_with_hearing_aid"],
        tags: [],
        unicode_version: "12.0",
        ios_version: "13.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F443}",
        description: "nose",
        category: "People & Body",
        aliases: ["nose"],
        tags: ["smell"],
        unicode_version: "6.0",
        ios_version: "6.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F9E0}",
        description: "brain",
        category: "People & Body",
        aliases: ["brain"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1FAC0}",
        description: "anatomical heart",
        category: "People & Body",
        aliases: ["anatomical_heart"],
        tags: [],
        unicode_version: "13.0",
        ios_version: "14.0"
      },
      {
        emoji: "\u{1FAC1}",
        description: "lungs",
        category: "People & Body",
        aliases: ["lungs"],
        tags: [],
        unicode_version: "13.0",
        ios_version: "14.0"
      },
      {
        emoji: "\u{1F9B7}",
        description: "tooth",
        category: "People & Body",
        aliases: ["tooth"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F9B4}",
        description: "bone",
        category: "People & Body",
        aliases: ["bone"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F440}",
        description: "eyes",
        category: "People & Body",
        aliases: ["eyes"],
        tags: ["look", "see", "watch"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F441}\uFE0F",
        description: "eye",
        category: "People & Body",
        aliases: ["eye"],
        tags: [],
        unicode_version: "7.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F445}",
        description: "tongue",
        category: "People & Body",
        aliases: ["tongue"],
        tags: ["taste"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F444}",
        description: "mouth",
        category: "People & Body",
        aliases: ["lips"],
        tags: ["kiss"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F476}",
        description: "baby",
        category: "People & Body",
        aliases: ["baby"],
        tags: ["child", "newborn"],
        unicode_version: "6.0",
        ios_version: "6.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F9D2}",
        description: "child",
        category: "People & Body",
        aliases: ["child"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1",
        skin_tones: true
      },
      {
        emoji: "\u{1F466}",
        description: "boy",
        category: "People & Body",
        aliases: ["boy"],
        tags: ["child"],
        unicode_version: "6.0",
        ios_version: "6.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F467}",
        description: "girl",
        category: "People & Body",
        aliases: ["girl"],
        tags: ["child"],
        unicode_version: "6.0",
        ios_version: "6.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F9D1}",
        description: "person",
        category: "People & Body",
        aliases: ["adult"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1",
        skin_tones: true
      },
      {
        emoji: "\u{1F471}",
        description: "person: blond hair",
        category: "People & Body",
        aliases: ["blond_haired_person"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F468}",
        description: "man",
        category: "People & Body",
        aliases: ["man"],
        tags: ["mustache", "father", "dad"],
        unicode_version: "6.0",
        ios_version: "6.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F9D4}",
        description: "person: beard",
        category: "People & Body",
        aliases: ["bearded_person"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1",
        skin_tones: true
      },
      {
        emoji: "\u{1F9D4}\u200D\u2642\uFE0F",
        description: "man: beard",
        category: "People & Body",
        aliases: ["man_beard"],
        tags: [],
        unicode_version: "13.1",
        ios_version: "14.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F9D4}\u200D\u2640\uFE0F",
        description: "woman: beard",
        category: "People & Body",
        aliases: ["woman_beard"],
        tags: [],
        unicode_version: "13.1",
        ios_version: "14.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F468}\u200D\u{1F9B0}",
        description: "man: red hair",
        category: "People & Body",
        aliases: ["red_haired_man"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1",
        skin_tones: true
      },
      {
        emoji: "\u{1F468}\u200D\u{1F9B1}",
        description: "man: curly hair",
        category: "People & Body",
        aliases: ["curly_haired_man"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1",
        skin_tones: true
      },
      {
        emoji: "\u{1F468}\u200D\u{1F9B3}",
        description: "man: white hair",
        category: "People & Body",
        aliases: ["white_haired_man"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1",
        skin_tones: true
      },
      {
        emoji: "\u{1F468}\u200D\u{1F9B2}",
        description: "man: bald",
        category: "People & Body",
        aliases: ["bald_man"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1",
        skin_tones: true
      },
      {
        emoji: "\u{1F469}",
        description: "woman",
        category: "People & Body",
        aliases: ["woman"],
        tags: ["girls"],
        unicode_version: "6.0",
        ios_version: "6.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F469}\u200D\u{1F9B0}",
        description: "woman: red hair",
        category: "People & Body",
        aliases: ["red_haired_woman"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1",
        skin_tones: true
      },
      {
        emoji: "\u{1F9D1}\u200D\u{1F9B0}",
        description: "person: red hair",
        category: "People & Body",
        aliases: ["person_red_hair"],
        tags: [],
        unicode_version: "12.1",
        ios_version: "13.2",
        skin_tones: true
      },
      {
        emoji: "\u{1F469}\u200D\u{1F9B1}",
        description: "woman: curly hair",
        category: "People & Body",
        aliases: ["curly_haired_woman"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1",
        skin_tones: true
      },
      {
        emoji: "\u{1F9D1}\u200D\u{1F9B1}",
        description: "person: curly hair",
        category: "People & Body",
        aliases: ["person_curly_hair"],
        tags: [],
        unicode_version: "12.1",
        ios_version: "13.2",
        skin_tones: true
      },
      {
        emoji: "\u{1F469}\u200D\u{1F9B3}",
        description: "woman: white hair",
        category: "People & Body",
        aliases: ["white_haired_woman"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1",
        skin_tones: true
      },
      {
        emoji: "\u{1F9D1}\u200D\u{1F9B3}",
        description: "person: white hair",
        category: "People & Body",
        aliases: ["person_white_hair"],
        tags: [],
        unicode_version: "12.1",
        ios_version: "13.2",
        skin_tones: true
      },
      {
        emoji: "\u{1F469}\u200D\u{1F9B2}",
        description: "woman: bald",
        category: "People & Body",
        aliases: ["bald_woman"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1",
        skin_tones: true
      },
      {
        emoji: "\u{1F9D1}\u200D\u{1F9B2}",
        description: "person: bald",
        category: "People & Body",
        aliases: ["person_bald"],
        tags: [],
        unicode_version: "12.1",
        ios_version: "13.2",
        skin_tones: true
      },
      {
        emoji: "\u{1F471}\u200D\u2640\uFE0F",
        description: "woman: blond hair",
        category: "People & Body",
        aliases: ["blond_haired_woman", "blonde_woman"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "10.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F471}\u200D\u2642\uFE0F",
        description: "man: blond hair",
        category: "People & Body",
        aliases: ["blond_haired_man"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1",
        skin_tones: true
      },
      {
        emoji: "\u{1F9D3}",
        description: "older person",
        category: "People & Body",
        aliases: ["older_adult"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1",
        skin_tones: true
      },
      {
        emoji: "\u{1F474}",
        description: "old man",
        category: "People & Body",
        aliases: ["older_man"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F475}",
        description: "old woman",
        category: "People & Body",
        aliases: ["older_woman"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F64D}",
        description: "person frowning",
        category: "People & Body",
        aliases: ["frowning_person"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F64D}\u200D\u2642\uFE0F",
        description: "man frowning",
        category: "People & Body",
        aliases: ["frowning_man"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "10.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F64D}\u200D\u2640\uFE0F",
        description: "woman frowning",
        category: "People & Body",
        aliases: ["frowning_woman"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1",
        skin_tones: true
      },
      {
        emoji: "\u{1F64E}",
        description: "person pouting",
        category: "People & Body",
        aliases: ["pouting_face"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F64E}\u200D\u2642\uFE0F",
        description: "man pouting",
        category: "People & Body",
        aliases: ["pouting_man"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "10.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F64E}\u200D\u2640\uFE0F",
        description: "woman pouting",
        category: "People & Body",
        aliases: ["pouting_woman"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1",
        skin_tones: true
      },
      {
        emoji: "\u{1F645}",
        description: "person gesturing NO",
        category: "People & Body",
        aliases: ["no_good"],
        tags: ["stop", "halt", "denied"],
        unicode_version: "6.0",
        ios_version: "6.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F645}\u200D\u2642\uFE0F",
        description: "man gesturing NO",
        category: "People & Body",
        aliases: ["no_good_man", "ng_man"],
        tags: ["stop", "halt", "denied"],
        unicode_version: "6.0",
        ios_version: "10.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F645}\u200D\u2640\uFE0F",
        description: "woman gesturing NO",
        category: "People & Body",
        aliases: ["no_good_woman", "ng_woman"],
        tags: ["stop", "halt", "denied"],
        unicode_version: "11.0",
        ios_version: "12.1",
        skin_tones: true
      },
      {
        emoji: "\u{1F646}",
        description: "person gesturing OK",
        category: "People & Body",
        aliases: ["ok_person"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F646}\u200D\u2642\uFE0F",
        description: "man gesturing OK",
        category: "People & Body",
        aliases: ["ok_man"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "10.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F646}\u200D\u2640\uFE0F",
        description: "woman gesturing OK",
        category: "People & Body",
        aliases: ["ok_woman"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1",
        skin_tones: true
      },
      {
        emoji: "\u{1F481}",
        description: "person tipping hand",
        category: "People & Body",
        aliases: ["tipping_hand_person", "information_desk_person"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F481}\u200D\u2642\uFE0F",
        description: "man tipping hand",
        category: "People & Body",
        aliases: ["tipping_hand_man", "sassy_man"],
        tags: ["information"],
        unicode_version: "6.0",
        ios_version: "10.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F481}\u200D\u2640\uFE0F",
        description: "woman tipping hand",
        category: "People & Body",
        aliases: ["tipping_hand_woman", "sassy_woman"],
        tags: ["information"],
        unicode_version: "11.0",
        ios_version: "12.1",
        skin_tones: true
      },
      {
        emoji: "\u{1F64B}",
        description: "person raising hand",
        category: "People & Body",
        aliases: ["raising_hand"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F64B}\u200D\u2642\uFE0F",
        description: "man raising hand",
        category: "People & Body",
        aliases: ["raising_hand_man"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "10.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F64B}\u200D\u2640\uFE0F",
        description: "woman raising hand",
        category: "People & Body",
        aliases: ["raising_hand_woman"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1",
        skin_tones: true
      },
      {
        emoji: "\u{1F9CF}",
        description: "deaf person",
        category: "People & Body",
        aliases: ["deaf_person"],
        tags: [],
        unicode_version: "12.0",
        ios_version: "13.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F9CF}\u200D\u2642\uFE0F",
        description: "deaf man",
        category: "People & Body",
        aliases: ["deaf_man"],
        tags: [],
        unicode_version: "12.0",
        ios_version: "13.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F9CF}\u200D\u2640\uFE0F",
        description: "deaf woman",
        category: "People & Body",
        aliases: ["deaf_woman"],
        tags: [],
        unicode_version: "12.0",
        ios_version: "13.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F647}",
        description: "person bowing",
        category: "People & Body",
        aliases: ["bow"],
        tags: ["respect", "thanks"],
        unicode_version: "6.0",
        ios_version: "6.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F647}\u200D\u2642\uFE0F",
        description: "man bowing",
        category: "People & Body",
        aliases: ["bowing_man"],
        tags: ["respect", "thanks"],
        unicode_version: "11.0",
        ios_version: "12.1",
        skin_tones: true
      },
      {
        emoji: "\u{1F647}\u200D\u2640\uFE0F",
        description: "woman bowing",
        category: "People & Body",
        aliases: ["bowing_woman"],
        tags: ["respect", "thanks"],
        unicode_version: "6.0",
        ios_version: "10.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F926}",
        description: "person facepalming",
        category: "People & Body",
        aliases: ["facepalm"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1",
        skin_tones: true
      },
      {
        emoji: "\u{1F926}\u200D\u2642\uFE0F",
        description: "man facepalming",
        category: "People & Body",
        aliases: ["man_facepalming"],
        tags: [],
        unicode_version: "9.0",
        ios_version: "10.2",
        skin_tones: true
      },
      {
        emoji: "\u{1F926}\u200D\u2640\uFE0F",
        description: "woman facepalming",
        category: "People & Body",
        aliases: ["woman_facepalming"],
        tags: [],
        unicode_version: "9.0",
        ios_version: "10.2",
        skin_tones: true
      },
      {
        emoji: "\u{1F937}",
        description: "person shrugging",
        category: "People & Body",
        aliases: ["shrug"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1",
        skin_tones: true
      },
      {
        emoji: "\u{1F937}\u200D\u2642\uFE0F",
        description: "man shrugging",
        category: "People & Body",
        aliases: ["man_shrugging"],
        tags: [],
        unicode_version: "9.0",
        ios_version: "10.2",
        skin_tones: true
      },
      {
        emoji: "\u{1F937}\u200D\u2640\uFE0F",
        description: "woman shrugging",
        category: "People & Body",
        aliases: ["woman_shrugging"],
        tags: [],
        unicode_version: "9.0",
        ios_version: "10.2",
        skin_tones: true
      },
      {
        emoji: "\u{1F9D1}\u200D\u2695\uFE0F",
        description: "health worker",
        category: "People & Body",
        aliases: ["health_worker"],
        tags: [],
        unicode_version: "12.1",
        ios_version: "13.2",
        skin_tones: true
      },
      {
        emoji: "\u{1F468}\u200D\u2695\uFE0F",
        description: "man health worker",
        category: "People & Body",
        aliases: ["man_health_worker"],
        tags: ["doctor", "nurse"],
        unicode_version: "",
        ios_version: "10.2",
        skin_tones: true
      },
      {
        emoji: "\u{1F469}\u200D\u2695\uFE0F",
        description: "woman health worker",
        category: "People & Body",
        aliases: ["woman_health_worker"],
        tags: ["doctor", "nurse"],
        unicode_version: "",
        ios_version: "10.2",
        skin_tones: true
      },
      {
        emoji: "\u{1F9D1}\u200D\u{1F393}",
        description: "student",
        category: "People & Body",
        aliases: ["student"],
        tags: [],
        unicode_version: "12.1",
        ios_version: "13.2",
        skin_tones: true
      },
      {
        emoji: "\u{1F468}\u200D\u{1F393}",
        description: "man student",
        category: "People & Body",
        aliases: ["man_student"],
        tags: ["graduation"],
        unicode_version: "",
        ios_version: "10.2",
        skin_tones: true
      },
      {
        emoji: "\u{1F469}\u200D\u{1F393}",
        description: "woman student",
        category: "People & Body",
        aliases: ["woman_student"],
        tags: ["graduation"],
        unicode_version: "",
        ios_version: "10.2",
        skin_tones: true
      },
      {
        emoji: "\u{1F9D1}\u200D\u{1F3EB}",
        description: "teacher",
        category: "People & Body",
        aliases: ["teacher"],
        tags: [],
        unicode_version: "12.1",
        ios_version: "13.2",
        skin_tones: true
      },
      {
        emoji: "\u{1F468}\u200D\u{1F3EB}",
        description: "man teacher",
        category: "People & Body",
        aliases: ["man_teacher"],
        tags: ["school", "professor"],
        unicode_version: "",
        ios_version: "10.2",
        skin_tones: true
      },
      {
        emoji: "\u{1F469}\u200D\u{1F3EB}",
        description: "woman teacher",
        category: "People & Body",
        aliases: ["woman_teacher"],
        tags: ["school", "professor"],
        unicode_version: "",
        ios_version: "10.2",
        skin_tones: true
      },
      {
        emoji: "\u{1F9D1}\u200D\u2696\uFE0F",
        description: "judge",
        category: "People & Body",
        aliases: ["judge"],
        tags: [],
        unicode_version: "12.1",
        ios_version: "13.2",
        skin_tones: true
      },
      {
        emoji: "\u{1F468}\u200D\u2696\uFE0F",
        description: "man judge",
        category: "People & Body",
        aliases: ["man_judge"],
        tags: ["justice"],
        unicode_version: "",
        ios_version: "10.2",
        skin_tones: true
      },
      {
        emoji: "\u{1F469}\u200D\u2696\uFE0F",
        description: "woman judge",
        category: "People & Body",
        aliases: ["woman_judge"],
        tags: ["justice"],
        unicode_version: "",
        ios_version: "10.2",
        skin_tones: true
      },
      {
        emoji: "\u{1F9D1}\u200D\u{1F33E}",
        description: "farmer",
        category: "People & Body",
        aliases: ["farmer"],
        tags: [],
        unicode_version: "12.1",
        ios_version: "13.2",
        skin_tones: true
      },
      {
        emoji: "\u{1F468}\u200D\u{1F33E}",
        description: "man farmer",
        category: "People & Body",
        aliases: ["man_farmer"],
        tags: [],
        unicode_version: "",
        ios_version: "10.2",
        skin_tones: true
      },
      {
        emoji: "\u{1F469}\u200D\u{1F33E}",
        description: "woman farmer",
        category: "People & Body",
        aliases: ["woman_farmer"],
        tags: [],
        unicode_version: "",
        ios_version: "10.2",
        skin_tones: true
      },
      {
        emoji: "\u{1F9D1}\u200D\u{1F373}",
        description: "cook",
        category: "People & Body",
        aliases: ["cook"],
        tags: [],
        unicode_version: "12.1",
        ios_version: "13.2",
        skin_tones: true
      },
      {
        emoji: "\u{1F468}\u200D\u{1F373}",
        description: "man cook",
        category: "People & Body",
        aliases: ["man_cook"],
        tags: ["chef"],
        unicode_version: "",
        ios_version: "10.2",
        skin_tones: true
      },
      {
        emoji: "\u{1F469}\u200D\u{1F373}",
        description: "woman cook",
        category: "People & Body",
        aliases: ["woman_cook"],
        tags: ["chef"],
        unicode_version: "",
        ios_version: "10.2",
        skin_tones: true
      },
      {
        emoji: "\u{1F9D1}\u200D\u{1F527}",
        description: "mechanic",
        category: "People & Body",
        aliases: ["mechanic"],
        tags: [],
        unicode_version: "12.1",
        ios_version: "13.2",
        skin_tones: true
      },
      {
        emoji: "\u{1F468}\u200D\u{1F527}",
        description: "man mechanic",
        category: "People & Body",
        aliases: ["man_mechanic"],
        tags: [],
        unicode_version: "",
        ios_version: "10.2",
        skin_tones: true
      },
      {
        emoji: "\u{1F469}\u200D\u{1F527}",
        description: "woman mechanic",
        category: "People & Body",
        aliases: ["woman_mechanic"],
        tags: [],
        unicode_version: "",
        ios_version: "10.2",
        skin_tones: true
      },
      {
        emoji: "\u{1F9D1}\u200D\u{1F3ED}",
        description: "factory worker",
        category: "People & Body",
        aliases: ["factory_worker"],
        tags: [],
        unicode_version: "12.1",
        ios_version: "13.2",
        skin_tones: true
      },
      {
        emoji: "\u{1F468}\u200D\u{1F3ED}",
        description: "man factory worker",
        category: "People & Body",
        aliases: ["man_factory_worker"],
        tags: [],
        unicode_version: "",
        ios_version: "10.2",
        skin_tones: true
      },
      {
        emoji: "\u{1F469}\u200D\u{1F3ED}",
        description: "woman factory worker",
        category: "People & Body",
        aliases: ["woman_factory_worker"],
        tags: [],
        unicode_version: "",
        ios_version: "10.2",
        skin_tones: true
      },
      {
        emoji: "\u{1F9D1}\u200D\u{1F4BC}",
        description: "office worker",
        category: "People & Body",
        aliases: ["office_worker"],
        tags: [],
        unicode_version: "12.1",
        ios_version: "13.2",
        skin_tones: true
      },
      {
        emoji: "\u{1F468}\u200D\u{1F4BC}",
        description: "man office worker",
        category: "People & Body",
        aliases: ["man_office_worker"],
        tags: ["business"],
        unicode_version: "",
        ios_version: "10.2",
        skin_tones: true
      },
      {
        emoji: "\u{1F469}\u200D\u{1F4BC}",
        description: "woman office worker",
        category: "People & Body",
        aliases: ["woman_office_worker"],
        tags: ["business"],
        unicode_version: "",
        ios_version: "10.2",
        skin_tones: true
      },
      {
        emoji: "\u{1F9D1}\u200D\u{1F52C}",
        description: "scientist",
        category: "People & Body",
        aliases: ["scientist"],
        tags: [],
        unicode_version: "12.1",
        ios_version: "13.2",
        skin_tones: true
      },
      {
        emoji: "\u{1F468}\u200D\u{1F52C}",
        description: "man scientist",
        category: "People & Body",
        aliases: ["man_scientist"],
        tags: ["research"],
        unicode_version: "",
        ios_version: "10.2",
        skin_tones: true
      },
      {
        emoji: "\u{1F469}\u200D\u{1F52C}",
        description: "woman scientist",
        category: "People & Body",
        aliases: ["woman_scientist"],
        tags: ["research"],
        unicode_version: "",
        ios_version: "10.2",
        skin_tones: true
      },
      {
        emoji: "\u{1F9D1}\u200D\u{1F4BB}",
        description: "technologist",
        category: "People & Body",
        aliases: ["technologist"],
        tags: [],
        unicode_version: "12.1",
        ios_version: "13.2",
        skin_tones: true
      },
      {
        emoji: "\u{1F468}\u200D\u{1F4BB}",
        description: "man technologist",
        category: "People & Body",
        aliases: ["man_technologist"],
        tags: ["coder"],
        unicode_version: "",
        ios_version: "10.2",
        skin_tones: true
      },
      {
        emoji: "\u{1F469}\u200D\u{1F4BB}",
        description: "woman technologist",
        category: "People & Body",
        aliases: ["woman_technologist"],
        tags: ["coder"],
        unicode_version: "",
        ios_version: "10.2",
        skin_tones: true
      },
      {
        emoji: "\u{1F9D1}\u200D\u{1F3A4}",
        description: "singer",
        category: "People & Body",
        aliases: ["singer"],
        tags: [],
        unicode_version: "12.1",
        ios_version: "13.2",
        skin_tones: true
      },
      {
        emoji: "\u{1F468}\u200D\u{1F3A4}",
        description: "man singer",
        category: "People & Body",
        aliases: ["man_singer"],
        tags: ["rockstar"],
        unicode_version: "",
        ios_version: "10.2",
        skin_tones: true
      },
      {
        emoji: "\u{1F469}\u200D\u{1F3A4}",
        description: "woman singer",
        category: "People & Body",
        aliases: ["woman_singer"],
        tags: ["rockstar"],
        unicode_version: "",
        ios_version: "10.2",
        skin_tones: true
      },
      {
        emoji: "\u{1F9D1}\u200D\u{1F3A8}",
        description: "artist",
        category: "People & Body",
        aliases: ["artist"],
        tags: [],
        unicode_version: "12.1",
        ios_version: "13.2",
        skin_tones: true
      },
      {
        emoji: "\u{1F468}\u200D\u{1F3A8}",
        description: "man artist",
        category: "People & Body",
        aliases: ["man_artist"],
        tags: ["painter"],
        unicode_version: "",
        ios_version: "10.2",
        skin_tones: true
      },
      {
        emoji: "\u{1F469}\u200D\u{1F3A8}",
        description: "woman artist",
        category: "People & Body",
        aliases: ["woman_artist"],
        tags: ["painter"],
        unicode_version: "",
        ios_version: "10.2",
        skin_tones: true
      },
      {
        emoji: "\u{1F9D1}\u200D\u2708\uFE0F",
        description: "pilot",
        category: "People & Body",
        aliases: ["pilot"],
        tags: [],
        unicode_version: "12.1",
        ios_version: "13.2",
        skin_tones: true
      },
      {
        emoji: "\u{1F468}\u200D\u2708\uFE0F",
        description: "man pilot",
        category: "People & Body",
        aliases: ["man_pilot"],
        tags: [],
        unicode_version: "",
        ios_version: "10.2",
        skin_tones: true
      },
      {
        emoji: "\u{1F469}\u200D\u2708\uFE0F",
        description: "woman pilot",
        category: "People & Body",
        aliases: ["woman_pilot"],
        tags: [],
        unicode_version: "",
        ios_version: "10.2",
        skin_tones: true
      },
      {
        emoji: "\u{1F9D1}\u200D\u{1F680}",
        description: "astronaut",
        category: "People & Body",
        aliases: ["astronaut"],
        tags: [],
        unicode_version: "12.1",
        ios_version: "13.2",
        skin_tones: true
      },
      {
        emoji: "\u{1F468}\u200D\u{1F680}",
        description: "man astronaut",
        category: "People & Body",
        aliases: ["man_astronaut"],
        tags: ["space"],
        unicode_version: "",
        ios_version: "10.2",
        skin_tones: true
      },
      {
        emoji: "\u{1F469}\u200D\u{1F680}",
        description: "woman astronaut",
        category: "People & Body",
        aliases: ["woman_astronaut"],
        tags: ["space"],
        unicode_version: "",
        ios_version: "10.2",
        skin_tones: true
      },
      {
        emoji: "\u{1F9D1}\u200D\u{1F692}",
        description: "firefighter",
        category: "People & Body",
        aliases: ["firefighter"],
        tags: [],
        unicode_version: "12.1",
        ios_version: "13.2",
        skin_tones: true
      },
      {
        emoji: "\u{1F468}\u200D\u{1F692}",
        description: "man firefighter",
        category: "People & Body",
        aliases: ["man_firefighter"],
        tags: [],
        unicode_version: "",
        ios_version: "10.2",
        skin_tones: true
      },
      {
        emoji: "\u{1F469}\u200D\u{1F692}",
        description: "woman firefighter",
        category: "People & Body",
        aliases: ["woman_firefighter"],
        tags: [],
        unicode_version: "",
        ios_version: "10.2",
        skin_tones: true
      },
      {
        emoji: "\u{1F46E}",
        description: "police officer",
        category: "People & Body",
        aliases: ["police_officer", "cop"],
        tags: ["law"],
        unicode_version: "6.0",
        ios_version: "6.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F46E}\u200D\u2642\uFE0F",
        description: "man police officer",
        category: "People & Body",
        aliases: ["policeman"],
        tags: ["law", "cop"],
        unicode_version: "11.0",
        ios_version: "12.1",
        skin_tones: true
      },
      {
        emoji: "\u{1F46E}\u200D\u2640\uFE0F",
        description: "woman police officer",
        category: "People & Body",
        aliases: ["policewoman"],
        tags: ["law", "cop"],
        unicode_version: "6.0",
        ios_version: "10.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F575}\uFE0F",
        description: "detective",
        category: "People & Body",
        aliases: ["detective"],
        tags: ["sleuth"],
        unicode_version: "7.0",
        ios_version: "9.1",
        skin_tones: true
      },
      {
        emoji: "\u{1F575}\uFE0F\u200D\u2642\uFE0F",
        description: "man detective",
        category: "People & Body",
        aliases: ["male_detective"],
        tags: ["sleuth"],
        unicode_version: "11.0",
        ios_version: "12.1",
        skin_tones: true
      },
      {
        emoji: "\u{1F575}\uFE0F\u200D\u2640\uFE0F",
        description: "woman detective",
        category: "People & Body",
        aliases: ["female_detective"],
        tags: ["sleuth"],
        unicode_version: "6.0",
        ios_version: "10.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F482}",
        description: "guard",
        category: "People & Body",
        aliases: ["guard"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F482}\u200D\u2642\uFE0F",
        description: "man guard",
        category: "People & Body",
        aliases: ["guardsman"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1",
        skin_tones: true
      },
      {
        emoji: "\u{1F482}\u200D\u2640\uFE0F",
        description: "woman guard",
        category: "People & Body",
        aliases: ["guardswoman"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "10.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F977}",
        description: "ninja",
        category: "People & Body",
        aliases: ["ninja"],
        tags: [],
        unicode_version: "13.0",
        ios_version: "14.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F477}",
        description: "construction worker",
        category: "People & Body",
        aliases: ["construction_worker"],
        tags: ["helmet"],
        unicode_version: "6.0",
        ios_version: "6.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F477}\u200D\u2642\uFE0F",
        description: "man construction worker",
        category: "People & Body",
        aliases: ["construction_worker_man"],
        tags: ["helmet"],
        unicode_version: "11.0",
        ios_version: "12.1",
        skin_tones: true
      },
      {
        emoji: "\u{1F477}\u200D\u2640\uFE0F",
        description: "woman construction worker",
        category: "People & Body",
        aliases: ["construction_worker_woman"],
        tags: ["helmet"],
        unicode_version: "6.0",
        ios_version: "10.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F934}",
        description: "prince",
        category: "People & Body",
        aliases: ["prince"],
        tags: ["crown", "royal"],
        unicode_version: "9.0",
        ios_version: "10.2",
        skin_tones: true
      },
      {
        emoji: "\u{1F478}",
        description: "princess",
        category: "People & Body",
        aliases: ["princess"],
        tags: ["crown", "royal"],
        unicode_version: "6.0",
        ios_version: "6.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F473}",
        description: "person wearing turban",
        category: "People & Body",
        aliases: ["person_with_turban"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F473}\u200D\u2642\uFE0F",
        description: "man wearing turban",
        category: "People & Body",
        aliases: ["man_with_turban"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1",
        skin_tones: true
      },
      {
        emoji: "\u{1F473}\u200D\u2640\uFE0F",
        description: "woman wearing turban",
        category: "People & Body",
        aliases: ["woman_with_turban"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "10.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F472}",
        description: "person with skullcap",
        category: "People & Body",
        aliases: ["man_with_gua_pi_mao"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F9D5}",
        description: "woman with headscarf",
        category: "People & Body",
        aliases: ["woman_with_headscarf"],
        tags: ["hijab"],
        unicode_version: "11.0",
        ios_version: "12.1",
        skin_tones: true
      },
      {
        emoji: "\u{1F935}",
        description: "person in tuxedo",
        category: "People & Body",
        aliases: ["person_in_tuxedo"],
        tags: ["groom", "marriage", "wedding"],
        unicode_version: "9.0",
        ios_version: "10.2",
        skin_tones: true
      },
      {
        emoji: "\u{1F935}\u200D\u2642\uFE0F",
        description: "man in tuxedo",
        category: "People & Body",
        aliases: ["man_in_tuxedo"],
        tags: [],
        unicode_version: "13.0",
        ios_version: "14.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F935}\u200D\u2640\uFE0F",
        description: "woman in tuxedo",
        category: "People & Body",
        aliases: ["woman_in_tuxedo"],
        tags: [],
        unicode_version: "13.0",
        ios_version: "14.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F470}",
        description: "person with veil",
        category: "People & Body",
        aliases: ["person_with_veil"],
        tags: ["marriage", "wedding"],
        unicode_version: "6.0",
        ios_version: "6.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F470}\u200D\u2642\uFE0F",
        description: "man with veil",
        category: "People & Body",
        aliases: ["man_with_veil"],
        tags: [],
        unicode_version: "13.0",
        ios_version: "14.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F470}\u200D\u2640\uFE0F",
        description: "woman with veil",
        category: "People & Body",
        aliases: ["woman_with_veil", "bride_with_veil"],
        tags: [],
        unicode_version: "13.0",
        ios_version: "14.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F930}",
        description: "pregnant woman",
        category: "People & Body",
        aliases: ["pregnant_woman"],
        tags: [],
        unicode_version: "9.0",
        ios_version: "10.2",
        skin_tones: true
      },
      {
        emoji: "\u{1F931}",
        description: "breast-feeding",
        category: "People & Body",
        aliases: ["breast_feeding"],
        tags: ["nursing"],
        unicode_version: "11.0",
        ios_version: "12.1",
        skin_tones: true
      },
      {
        emoji: "\u{1F469}\u200D\u{1F37C}",
        description: "woman feeding baby",
        category: "People & Body",
        aliases: ["woman_feeding_baby"],
        tags: [],
        unicode_version: "13.0",
        ios_version: "14.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F468}\u200D\u{1F37C}",
        description: "man feeding baby",
        category: "People & Body",
        aliases: ["man_feeding_baby"],
        tags: [],
        unicode_version: "13.0",
        ios_version: "14.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F9D1}\u200D\u{1F37C}",
        description: "person feeding baby",
        category: "People & Body",
        aliases: ["person_feeding_baby"],
        tags: [],
        unicode_version: "13.0",
        ios_version: "14.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F47C}",
        description: "baby angel",
        category: "People & Body",
        aliases: ["angel"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F385}",
        description: "Santa Claus",
        category: "People & Body",
        aliases: ["santa"],
        tags: ["christmas"],
        unicode_version: "6.0",
        ios_version: "6.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F936}",
        description: "Mrs. Claus",
        category: "People & Body",
        aliases: ["mrs_claus"],
        tags: ["santa"],
        unicode_version: "9.0",
        ios_version: "10.2",
        skin_tones: true
      },
      {
        emoji: "\u{1F9D1}\u200D\u{1F384}",
        description: "mx claus",
        category: "People & Body",
        aliases: ["mx_claus"],
        tags: [],
        unicode_version: "13.0",
        ios_version: "14.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F9B8}",
        description: "superhero",
        category: "People & Body",
        aliases: ["superhero"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1",
        skin_tones: true
      },
      {
        emoji: "\u{1F9B8}\u200D\u2642\uFE0F",
        description: "man superhero",
        category: "People & Body",
        aliases: ["superhero_man"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1",
        skin_tones: true
      },
      {
        emoji: "\u{1F9B8}\u200D\u2640\uFE0F",
        description: "woman superhero",
        category: "People & Body",
        aliases: ["superhero_woman"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1",
        skin_tones: true
      },
      {
        emoji: "\u{1F9B9}",
        description: "supervillain",
        category: "People & Body",
        aliases: ["supervillain"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1",
        skin_tones: true
      },
      {
        emoji: "\u{1F9B9}\u200D\u2642\uFE0F",
        description: "man supervillain",
        category: "People & Body",
        aliases: ["supervillain_man"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1",
        skin_tones: true
      },
      {
        emoji: "\u{1F9B9}\u200D\u2640\uFE0F",
        description: "woman supervillain",
        category: "People & Body",
        aliases: ["supervillain_woman"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1",
        skin_tones: true
      },
      {
        emoji: "\u{1F9D9}",
        description: "mage",
        category: "People & Body",
        aliases: ["mage"],
        tags: ["wizard"],
        unicode_version: "11.0",
        ios_version: "12.1",
        skin_tones: true
      },
      {
        emoji: "\u{1F9D9}\u200D\u2642\uFE0F",
        description: "man mage",
        category: "People & Body",
        aliases: ["mage_man"],
        tags: ["wizard"],
        unicode_version: "11.0",
        ios_version: "12.1",
        skin_tones: true
      },
      {
        emoji: "\u{1F9D9}\u200D\u2640\uFE0F",
        description: "woman mage",
        category: "People & Body",
        aliases: ["mage_woman"],
        tags: ["wizard"],
        unicode_version: "11.0",
        ios_version: "12.1",
        skin_tones: true
      },
      {
        emoji: "\u{1F9DA}",
        description: "fairy",
        category: "People & Body",
        aliases: ["fairy"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1",
        skin_tones: true
      },
      {
        emoji: "\u{1F9DA}\u200D\u2642\uFE0F",
        description: "man fairy",
        category: "People & Body",
        aliases: ["fairy_man"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1",
        skin_tones: true
      },
      {
        emoji: "\u{1F9DA}\u200D\u2640\uFE0F",
        description: "woman fairy",
        category: "People & Body",
        aliases: ["fairy_woman"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1",
        skin_tones: true
      },
      {
        emoji: "\u{1F9DB}",
        description: "vampire",
        category: "People & Body",
        aliases: ["vampire"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1",
        skin_tones: true
      },
      {
        emoji: "\u{1F9DB}\u200D\u2642\uFE0F",
        description: "man vampire",
        category: "People & Body",
        aliases: ["vampire_man"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1",
        skin_tones: true
      },
      {
        emoji: "\u{1F9DB}\u200D\u2640\uFE0F",
        description: "woman vampire",
        category: "People & Body",
        aliases: ["vampire_woman"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1",
        skin_tones: true
      },
      {
        emoji: "\u{1F9DC}",
        description: "merperson",
        category: "People & Body",
        aliases: ["merperson"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1",
        skin_tones: true
      },
      {
        emoji: "\u{1F9DC}\u200D\u2642\uFE0F",
        description: "merman",
        category: "People & Body",
        aliases: ["merman"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1",
        skin_tones: true
      },
      {
        emoji: "\u{1F9DC}\u200D\u2640\uFE0F",
        description: "mermaid",
        category: "People & Body",
        aliases: ["mermaid"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1",
        skin_tones: true
      },
      {
        emoji: "\u{1F9DD}",
        description: "elf",
        category: "People & Body",
        aliases: ["elf"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1",
        skin_tones: true
      },
      {
        emoji: "\u{1F9DD}\u200D\u2642\uFE0F",
        description: "man elf",
        category: "People & Body",
        aliases: ["elf_man"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1",
        skin_tones: true
      },
      {
        emoji: "\u{1F9DD}\u200D\u2640\uFE0F",
        description: "woman elf",
        category: "People & Body",
        aliases: ["elf_woman"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1",
        skin_tones: true
      },
      {
        emoji: "\u{1F9DE}",
        description: "genie",
        category: "People & Body",
        aliases: ["genie"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F9DE}\u200D\u2642\uFE0F",
        description: "man genie",
        category: "People & Body",
        aliases: ["genie_man"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F9DE}\u200D\u2640\uFE0F",
        description: "woman genie",
        category: "People & Body",
        aliases: ["genie_woman"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F9DF}",
        description: "zombie",
        category: "People & Body",
        aliases: ["zombie"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F9DF}\u200D\u2642\uFE0F",
        description: "man zombie",
        category: "People & Body",
        aliases: ["zombie_man"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F9DF}\u200D\u2640\uFE0F",
        description: "woman zombie",
        category: "People & Body",
        aliases: ["zombie_woman"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F486}",
        description: "person getting massage",
        category: "People & Body",
        aliases: ["massage"],
        tags: ["spa"],
        unicode_version: "6.0",
        ios_version: "6.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F486}\u200D\u2642\uFE0F",
        description: "man getting massage",
        category: "People & Body",
        aliases: ["massage_man"],
        tags: ["spa"],
        unicode_version: "6.0",
        ios_version: "10.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F486}\u200D\u2640\uFE0F",
        description: "woman getting massage",
        category: "People & Body",
        aliases: ["massage_woman"],
        tags: ["spa"],
        unicode_version: "11.0",
        ios_version: "12.1",
        skin_tones: true
      },
      {
        emoji: "\u{1F487}",
        description: "person getting haircut",
        category: "People & Body",
        aliases: ["haircut"],
        tags: ["beauty"],
        unicode_version: "6.0",
        ios_version: "6.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F487}\u200D\u2642\uFE0F",
        description: "man getting haircut",
        category: "People & Body",
        aliases: ["haircut_man"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "10.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F487}\u200D\u2640\uFE0F",
        description: "woman getting haircut",
        category: "People & Body",
        aliases: ["haircut_woman"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1",
        skin_tones: true
      },
      {
        emoji: "\u{1F6B6}",
        description: "person walking",
        category: "People & Body",
        aliases: ["walking"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F6B6}\u200D\u2642\uFE0F",
        description: "man walking",
        category: "People & Body",
        aliases: ["walking_man"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1",
        skin_tones: true
      },
      {
        emoji: "\u{1F6B6}\u200D\u2640\uFE0F",
        description: "woman walking",
        category: "People & Body",
        aliases: ["walking_woman"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "10.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F9CD}",
        description: "person standing",
        category: "People & Body",
        aliases: ["standing_person"],
        tags: [],
        unicode_version: "12.0",
        ios_version: "13.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F9CD}\u200D\u2642\uFE0F",
        description: "man standing",
        category: "People & Body",
        aliases: ["standing_man"],
        tags: [],
        unicode_version: "12.0",
        ios_version: "13.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F9CD}\u200D\u2640\uFE0F",
        description: "woman standing",
        category: "People & Body",
        aliases: ["standing_woman"],
        tags: [],
        unicode_version: "12.0",
        ios_version: "13.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F9CE}",
        description: "person kneeling",
        category: "People & Body",
        aliases: ["kneeling_person"],
        tags: [],
        unicode_version: "12.0",
        ios_version: "13.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F9CE}\u200D\u2642\uFE0F",
        description: "man kneeling",
        category: "People & Body",
        aliases: ["kneeling_man"],
        tags: [],
        unicode_version: "12.0",
        ios_version: "13.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F9CE}\u200D\u2640\uFE0F",
        description: "woman kneeling",
        category: "People & Body",
        aliases: ["kneeling_woman"],
        tags: [],
        unicode_version: "12.0",
        ios_version: "13.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F9D1}\u200D\u{1F9AF}",
        description: "person with white cane",
        category: "People & Body",
        aliases: ["person_with_probing_cane"],
        tags: [],
        unicode_version: "12.1",
        ios_version: "13.2",
        skin_tones: true
      },
      {
        emoji: "\u{1F468}\u200D\u{1F9AF}",
        description: "man with white cane",
        category: "People & Body",
        aliases: ["man_with_probing_cane"],
        tags: [],
        unicode_version: "12.0",
        ios_version: "13.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F469}\u200D\u{1F9AF}",
        description: "woman with white cane",
        category: "People & Body",
        aliases: ["woman_with_probing_cane"],
        tags: [],
        unicode_version: "12.0",
        ios_version: "13.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F9D1}\u200D\u{1F9BC}",
        description: "person in motorized wheelchair",
        category: "People & Body",
        aliases: ["person_in_motorized_wheelchair"],
        tags: [],
        unicode_version: "12.1",
        ios_version: "13.2",
        skin_tones: true
      },
      {
        emoji: "\u{1F468}\u200D\u{1F9BC}",
        description: "man in motorized wheelchair",
        category: "People & Body",
        aliases: ["man_in_motorized_wheelchair"],
        tags: [],
        unicode_version: "12.0",
        ios_version: "13.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F469}\u200D\u{1F9BC}",
        description: "woman in motorized wheelchair",
        category: "People & Body",
        aliases: ["woman_in_motorized_wheelchair"],
        tags: [],
        unicode_version: "12.0",
        ios_version: "13.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F9D1}\u200D\u{1F9BD}",
        description: "person in manual wheelchair",
        category: "People & Body",
        aliases: ["person_in_manual_wheelchair"],
        tags: [],
        unicode_version: "12.1",
        ios_version: "13.2",
        skin_tones: true
      },
      {
        emoji: "\u{1F468}\u200D\u{1F9BD}",
        description: "man in manual wheelchair",
        category: "People & Body",
        aliases: ["man_in_manual_wheelchair"],
        tags: [],
        unicode_version: "12.0",
        ios_version: "13.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F469}\u200D\u{1F9BD}",
        description: "woman in manual wheelchair",
        category: "People & Body",
        aliases: ["woman_in_manual_wheelchair"],
        tags: [],
        unicode_version: "12.0",
        ios_version: "13.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F3C3}",
        description: "person running",
        category: "People & Body",
        aliases: ["runner", "running"],
        tags: ["exercise", "workout", "marathon"],
        unicode_version: "6.0",
        ios_version: "6.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F3C3}\u200D\u2642\uFE0F",
        description: "man running",
        category: "People & Body",
        aliases: ["running_man"],
        tags: ["exercise", "workout", "marathon"],
        unicode_version: "11.0",
        ios_version: "12.1",
        skin_tones: true
      },
      {
        emoji: "\u{1F3C3}\u200D\u2640\uFE0F",
        description: "woman running",
        category: "People & Body",
        aliases: ["running_woman"],
        tags: ["exercise", "workout", "marathon"],
        unicode_version: "6.0",
        ios_version: "10.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F483}",
        description: "woman dancing",
        category: "People & Body",
        aliases: ["woman_dancing", "dancer"],
        tags: ["dress"],
        unicode_version: "6.0",
        ios_version: "6.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F57A}",
        description: "man dancing",
        category: "People & Body",
        aliases: ["man_dancing"],
        tags: ["dancer"],
        unicode_version: "9.0",
        ios_version: "10.2",
        skin_tones: true
      },
      {
        emoji: "\u{1F574}\uFE0F",
        description: "person in suit levitating",
        category: "People & Body",
        aliases: ["business_suit_levitating"],
        tags: [],
        unicode_version: "7.0",
        ios_version: "9.1",
        skin_tones: true
      },
      {
        emoji: "\u{1F46F}",
        description: "people with bunny ears",
        category: "People & Body",
        aliases: ["dancers"],
        tags: ["bunny"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F46F}\u200D\u2642\uFE0F",
        description: "men with bunny ears",
        category: "People & Body",
        aliases: ["dancing_men"],
        tags: ["bunny"],
        unicode_version: "6.0",
        ios_version: "10.0"
      },
      {
        emoji: "\u{1F46F}\u200D\u2640\uFE0F",
        description: "women with bunny ears",
        category: "People & Body",
        aliases: ["dancing_women"],
        tags: ["bunny"],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F9D6}",
        description: "person in steamy room",
        category: "People & Body",
        aliases: ["sauna_person"],
        tags: ["steamy"],
        unicode_version: "11.0",
        ios_version: "12.1",
        skin_tones: true
      },
      {
        emoji: "\u{1F9D6}\u200D\u2642\uFE0F",
        description: "man in steamy room",
        category: "People & Body",
        aliases: ["sauna_man"],
        tags: ["steamy"],
        unicode_version: "11.0",
        ios_version: "12.1",
        skin_tones: true
      },
      {
        emoji: "\u{1F9D6}\u200D\u2640\uFE0F",
        description: "woman in steamy room",
        category: "People & Body",
        aliases: ["sauna_woman"],
        tags: ["steamy"],
        unicode_version: "11.0",
        ios_version: "12.1",
        skin_tones: true
      },
      {
        emoji: "\u{1F9D7}",
        description: "person climbing",
        category: "People & Body",
        aliases: ["climbing"],
        tags: ["bouldering"],
        unicode_version: "11.0",
        ios_version: "12.1",
        skin_tones: true
      },
      {
        emoji: "\u{1F9D7}\u200D\u2642\uFE0F",
        description: "man climbing",
        category: "People & Body",
        aliases: ["climbing_man"],
        tags: ["bouldering"],
        unicode_version: "11.0",
        ios_version: "12.1",
        skin_tones: true
      },
      {
        emoji: "\u{1F9D7}\u200D\u2640\uFE0F",
        description: "woman climbing",
        category: "People & Body",
        aliases: ["climbing_woman"],
        tags: ["bouldering"],
        unicode_version: "11.0",
        ios_version: "12.1",
        skin_tones: true
      },
      {
        emoji: "\u{1F93A}",
        description: "person fencing",
        category: "People & Body",
        aliases: ["person_fencing"],
        tags: [],
        unicode_version: "9.0",
        ios_version: "10.2"
      },
      {
        emoji: "\u{1F3C7}",
        description: "horse racing",
        category: "People & Body",
        aliases: ["horse_racing"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0",
        skin_tones: true
      },
      {
        emoji: "\u26F7\uFE0F",
        description: "skier",
        category: "People & Body",
        aliases: ["skier"],
        tags: [],
        unicode_version: "5.2",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F3C2}",
        description: "snowboarder",
        category: "People & Body",
        aliases: ["snowboarder"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F3CC}\uFE0F",
        description: "person golfing",
        category: "People & Body",
        aliases: ["golfing"],
        tags: [],
        unicode_version: "7.0",
        ios_version: "9.1",
        skin_tones: true
      },
      {
        emoji: "\u{1F3CC}\uFE0F\u200D\u2642\uFE0F",
        description: "man golfing",
        category: "People & Body",
        aliases: ["golfing_man"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1",
        skin_tones: true
      },
      {
        emoji: "\u{1F3CC}\uFE0F\u200D\u2640\uFE0F",
        description: "woman golfing",
        category: "People & Body",
        aliases: ["golfing_woman"],
        tags: [],
        unicode_version: "",
        ios_version: "10.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F3C4}",
        description: "person surfing",
        category: "People & Body",
        aliases: ["surfer"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F3C4}\u200D\u2642\uFE0F",
        description: "man surfing",
        category: "People & Body",
        aliases: ["surfing_man"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1",
        skin_tones: true
      },
      {
        emoji: "\u{1F3C4}\u200D\u2640\uFE0F",
        description: "woman surfing",
        category: "People & Body",
        aliases: ["surfing_woman"],
        tags: [],
        unicode_version: "7.0",
        ios_version: "10.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F6A3}",
        description: "person rowing boat",
        category: "People & Body",
        aliases: ["rowboat"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F6A3}\u200D\u2642\uFE0F",
        description: "man rowing boat",
        category: "People & Body",
        aliases: ["rowing_man"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1",
        skin_tones: true
      },
      {
        emoji: "\u{1F6A3}\u200D\u2640\uFE0F",
        description: "woman rowing boat",
        category: "People & Body",
        aliases: ["rowing_woman"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "10.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F3CA}",
        description: "person swimming",
        category: "People & Body",
        aliases: ["swimmer"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F3CA}\u200D\u2642\uFE0F",
        description: "man swimming",
        category: "People & Body",
        aliases: ["swimming_man"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1",
        skin_tones: true
      },
      {
        emoji: "\u{1F3CA}\u200D\u2640\uFE0F",
        description: "woman swimming",
        category: "People & Body",
        aliases: ["swimming_woman"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "10.0",
        skin_tones: true
      },
      {
        emoji: "\u26F9\uFE0F",
        description: "person bouncing ball",
        category: "People & Body",
        aliases: ["bouncing_ball_person"],
        tags: ["basketball"],
        unicode_version: "5.2",
        ios_version: "9.1",
        skin_tones: true
      },
      {
        emoji: "\u26F9\uFE0F\u200D\u2642\uFE0F",
        description: "man bouncing ball",
        category: "People & Body",
        aliases: ["bouncing_ball_man", "basketball_man"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1",
        skin_tones: true
      },
      {
        emoji: "\u26F9\uFE0F\u200D\u2640\uFE0F",
        description: "woman bouncing ball",
        category: "People & Body",
        aliases: ["bouncing_ball_woman", "basketball_woman"],
        tags: [],
        unicode_version: "7.0",
        ios_version: "10.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F3CB}\uFE0F",
        description: "person lifting weights",
        category: "People & Body",
        aliases: ["weight_lifting"],
        tags: ["gym", "workout"],
        unicode_version: "7.0",
        ios_version: "9.1",
        skin_tones: true
      },
      {
        emoji: "\u{1F3CB}\uFE0F\u200D\u2642\uFE0F",
        description: "man lifting weights",
        category: "People & Body",
        aliases: ["weight_lifting_man"],
        tags: ["gym", "workout"],
        unicode_version: "11.0",
        ios_version: "12.1",
        skin_tones: true
      },
      {
        emoji: "\u{1F3CB}\uFE0F\u200D\u2640\uFE0F",
        description: "woman lifting weights",
        category: "People & Body",
        aliases: ["weight_lifting_woman"],
        tags: ["gym", "workout"],
        unicode_version: "6.0",
        ios_version: "10.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F6B4}",
        description: "person biking",
        category: "People & Body",
        aliases: ["bicyclist"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F6B4}\u200D\u2642\uFE0F",
        description: "man biking",
        category: "People & Body",
        aliases: ["biking_man"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1",
        skin_tones: true
      },
      {
        emoji: "\u{1F6B4}\u200D\u2640\uFE0F",
        description: "woman biking",
        category: "People & Body",
        aliases: ["biking_woman"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "10.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F6B5}",
        description: "person mountain biking",
        category: "People & Body",
        aliases: ["mountain_bicyclist"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F6B5}\u200D\u2642\uFE0F",
        description: "man mountain biking",
        category: "People & Body",
        aliases: ["mountain_biking_man"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1",
        skin_tones: true
      },
      {
        emoji: "\u{1F6B5}\u200D\u2640\uFE0F",
        description: "woman mountain biking",
        category: "People & Body",
        aliases: ["mountain_biking_woman"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "10.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F938}",
        description: "person cartwheeling",
        category: "People & Body",
        aliases: ["cartwheeling"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1",
        skin_tones: true
      },
      {
        emoji: "\u{1F938}\u200D\u2642\uFE0F",
        description: "man cartwheeling",
        category: "People & Body",
        aliases: ["man_cartwheeling"],
        tags: [],
        unicode_version: "",
        ios_version: "10.2",
        skin_tones: true
      },
      {
        emoji: "\u{1F938}\u200D\u2640\uFE0F",
        description: "woman cartwheeling",
        category: "People & Body",
        aliases: ["woman_cartwheeling"],
        tags: [],
        unicode_version: "",
        ios_version: "10.2",
        skin_tones: true
      },
      {
        emoji: "\u{1F93C}",
        description: "people wrestling",
        category: "People & Body",
        aliases: ["wrestling"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F93C}\u200D\u2642\uFE0F",
        description: "men wrestling",
        category: "People & Body",
        aliases: ["men_wrestling"],
        tags: [],
        unicode_version: "9.0",
        ios_version: "10.2"
      },
      {
        emoji: "\u{1F93C}\u200D\u2640\uFE0F",
        description: "women wrestling",
        category: "People & Body",
        aliases: ["women_wrestling"],
        tags: [],
        unicode_version: "9.0",
        ios_version: "10.2"
      },
      {
        emoji: "\u{1F93D}",
        description: "person playing water polo",
        category: "People & Body",
        aliases: ["water_polo"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1",
        skin_tones: true
      },
      {
        emoji: "\u{1F93D}\u200D\u2642\uFE0F",
        description: "man playing water polo",
        category: "People & Body",
        aliases: ["man_playing_water_polo"],
        tags: [],
        unicode_version: "9.0",
        ios_version: "10.2",
        skin_tones: true
      },
      {
        emoji: "\u{1F93D}\u200D\u2640\uFE0F",
        description: "woman playing water polo",
        category: "People & Body",
        aliases: ["woman_playing_water_polo"],
        tags: [],
        unicode_version: "9.0",
        ios_version: "10.2",
        skin_tones: true
      },
      {
        emoji: "\u{1F93E}",
        description: "person playing handball",
        category: "People & Body",
        aliases: ["handball_person"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1",
        skin_tones: true
      },
      {
        emoji: "\u{1F93E}\u200D\u2642\uFE0F",
        description: "man playing handball",
        category: "People & Body",
        aliases: ["man_playing_handball"],
        tags: [],
        unicode_version: "9.0",
        ios_version: "10.2",
        skin_tones: true
      },
      {
        emoji: "\u{1F93E}\u200D\u2640\uFE0F",
        description: "woman playing handball",
        category: "People & Body",
        aliases: ["woman_playing_handball"],
        tags: [],
        unicode_version: "9.0",
        ios_version: "10.2",
        skin_tones: true
      },
      {
        emoji: "\u{1F939}",
        description: "person juggling",
        category: "People & Body",
        aliases: ["juggling_person"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1",
        skin_tones: true
      },
      {
        emoji: "\u{1F939}\u200D\u2642\uFE0F",
        description: "man juggling",
        category: "People & Body",
        aliases: ["man_juggling"],
        tags: [],
        unicode_version: "9.0",
        ios_version: "10.2",
        skin_tones: true
      },
      {
        emoji: "\u{1F939}\u200D\u2640\uFE0F",
        description: "woman juggling",
        category: "People & Body",
        aliases: ["woman_juggling"],
        tags: [],
        unicode_version: "9.0",
        ios_version: "10.2",
        skin_tones: true
      },
      {
        emoji: "\u{1F9D8}",
        description: "person in lotus position",
        category: "People & Body",
        aliases: ["lotus_position"],
        tags: ["meditation"],
        unicode_version: "11.0",
        ios_version: "12.1",
        skin_tones: true
      },
      {
        emoji: "\u{1F9D8}\u200D\u2642\uFE0F",
        description: "man in lotus position",
        category: "People & Body",
        aliases: ["lotus_position_man"],
        tags: ["meditation"],
        unicode_version: "11.0",
        ios_version: "12.1",
        skin_tones: true
      },
      {
        emoji: "\u{1F9D8}\u200D\u2640\uFE0F",
        description: "woman in lotus position",
        category: "People & Body",
        aliases: ["lotus_position_woman"],
        tags: ["meditation"],
        unicode_version: "11.0",
        ios_version: "12.1",
        skin_tones: true
      },
      {
        emoji: "\u{1F6C0}",
        description: "person taking bath",
        category: "People & Body",
        aliases: ["bath"],
        tags: ["shower"],
        unicode_version: "6.0",
        ios_version: "6.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F6CC}",
        description: "person in bed",
        category: "People & Body",
        aliases: ["sleeping_bed"],
        tags: [],
        unicode_version: "7.0",
        ios_version: "9.1",
        skin_tones: true
      },
      {
        emoji: "\u{1F9D1}\u200D\u{1F91D}\u200D\u{1F9D1}",
        description: "people holding hands",
        category: "People & Body",
        aliases: ["people_holding_hands"],
        tags: ["couple", "date"],
        unicode_version: "12.0",
        ios_version: "13.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F46D}",
        description: "women holding hands",
        category: "People & Body",
        aliases: ["two_women_holding_hands"],
        tags: ["couple", "date"],
        unicode_version: "6.0",
        ios_version: "6.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F46B}",
        description: "woman and man holding hands",
        category: "People & Body",
        aliases: ["couple"],
        tags: ["date"],
        unicode_version: "6.0",
        ios_version: "6.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F46C}",
        description: "men holding hands",
        category: "People & Body",
        aliases: ["two_men_holding_hands"],
        tags: ["couple", "date"],
        unicode_version: "6.0",
        ios_version: "6.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F48F}",
        description: "kiss",
        category: "People & Body",
        aliases: ["couplekiss"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F469}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}",
        description: "kiss: woman, man",
        category: "People & Body",
        aliases: ["couplekiss_man_woman"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1",
        skin_tones: true
      },
      {
        emoji: "\u{1F468}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F468}",
        description: "kiss: man, man",
        category: "People & Body",
        aliases: ["couplekiss_man_man"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3",
        skin_tones: true
      },
      {
        emoji: "\u{1F469}\u200D\u2764\uFE0F\u200D\u{1F48B}\u200D\u{1F469}",
        description: "kiss: woman, woman",
        category: "People & Body",
        aliases: ["couplekiss_woman_woman"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3",
        skin_tones: true
      },
      {
        emoji: "\u{1F491}",
        description: "couple with heart",
        category: "People & Body",
        aliases: ["couple_with_heart"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0",
        skin_tones: true
      },
      {
        emoji: "\u{1F469}\u200D\u2764\uFE0F\u200D\u{1F468}",
        description: "couple with heart: woman, man",
        category: "People & Body",
        aliases: ["couple_with_heart_woman_man"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1",
        skin_tones: true
      },
      {
        emoji: "\u{1F468}\u200D\u2764\uFE0F\u200D\u{1F468}",
        description: "couple with heart: man, man",
        category: "People & Body",
        aliases: ["couple_with_heart_man_man"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3",
        skin_tones: true
      },
      {
        emoji: "\u{1F469}\u200D\u2764\uFE0F\u200D\u{1F469}",
        description: "couple with heart: woman, woman",
        category: "People & Body",
        aliases: ["couple_with_heart_woman_woman"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3",
        skin_tones: true
      },
      {
        emoji: "\u{1F46A}",
        description: "family",
        category: "People & Body",
        aliases: ["family"],
        tags: ["home", "parents", "child"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F468}\u200D\u{1F469}\u200D\u{1F466}",
        description: "family: man, woman, boy",
        category: "People & Body",
        aliases: ["family_man_woman_boy"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F468}\u200D\u{1F469}\u200D\u{1F467}",
        description: "family: man, woman, girl",
        category: "People & Body",
        aliases: ["family_man_woman_girl"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F468}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F466}",
        description: "family: man, woman, girl, boy",
        category: "People & Body",
        aliases: ["family_man_woman_girl_boy"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F468}\u200D\u{1F469}\u200D\u{1F466}\u200D\u{1F466}",
        description: "family: man, woman, boy, boy",
        category: "People & Body",
        aliases: ["family_man_woman_boy_boy"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F468}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F467}",
        description: "family: man, woman, girl, girl",
        category: "People & Body",
        aliases: ["family_man_woman_girl_girl"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F468}\u200D\u{1F468}\u200D\u{1F466}",
        description: "family: man, man, boy",
        category: "People & Body",
        aliases: ["family_man_man_boy"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F468}\u200D\u{1F468}\u200D\u{1F467}",
        description: "family: man, man, girl",
        category: "People & Body",
        aliases: ["family_man_man_girl"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F468}\u200D\u{1F468}\u200D\u{1F467}\u200D\u{1F466}",
        description: "family: man, man, girl, boy",
        category: "People & Body",
        aliases: ["family_man_man_girl_boy"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F468}\u200D\u{1F468}\u200D\u{1F466}\u200D\u{1F466}",
        description: "family: man, man, boy, boy",
        category: "People & Body",
        aliases: ["family_man_man_boy_boy"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F468}\u200D\u{1F468}\u200D\u{1F467}\u200D\u{1F467}",
        description: "family: man, man, girl, girl",
        category: "People & Body",
        aliases: ["family_man_man_girl_girl"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F469}\u200D\u{1F469}\u200D\u{1F466}",
        description: "family: woman, woman, boy",
        category: "People & Body",
        aliases: ["family_woman_woman_boy"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F469}\u200D\u{1F469}\u200D\u{1F467}",
        description: "family: woman, woman, girl",
        category: "People & Body",
        aliases: ["family_woman_woman_girl"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F469}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F466}",
        description: "family: woman, woman, girl, boy",
        category: "People & Body",
        aliases: ["family_woman_woman_girl_boy"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F469}\u200D\u{1F469}\u200D\u{1F466}\u200D\u{1F466}",
        description: "family: woman, woman, boy, boy",
        category: "People & Body",
        aliases: ["family_woman_woman_boy_boy"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F469}\u200D\u{1F469}\u200D\u{1F467}\u200D\u{1F467}",
        description: "family: woman, woman, girl, girl",
        category: "People & Body",
        aliases: ["family_woman_woman_girl_girl"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F468}\u200D\u{1F466}",
        description: "family: man, boy",
        category: "People & Body",
        aliases: ["family_man_boy"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "10.0"
      },
      {
        emoji: "\u{1F468}\u200D\u{1F466}\u200D\u{1F466}",
        description: "family: man, boy, boy",
        category: "People & Body",
        aliases: ["family_man_boy_boy"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "10.0"
      },
      {
        emoji: "\u{1F468}\u200D\u{1F467}",
        description: "family: man, girl",
        category: "People & Body",
        aliases: ["family_man_girl"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "10.0"
      },
      {
        emoji: "\u{1F468}\u200D\u{1F467}\u200D\u{1F466}",
        description: "family: man, girl, boy",
        category: "People & Body",
        aliases: ["family_man_girl_boy"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "10.0"
      },
      {
        emoji: "\u{1F468}\u200D\u{1F467}\u200D\u{1F467}",
        description: "family: man, girl, girl",
        category: "People & Body",
        aliases: ["family_man_girl_girl"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "10.0"
      },
      {
        emoji: "\u{1F469}\u200D\u{1F466}",
        description: "family: woman, boy",
        category: "People & Body",
        aliases: ["family_woman_boy"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "10.0"
      },
      {
        emoji: "\u{1F469}\u200D\u{1F466}\u200D\u{1F466}",
        description: "family: woman, boy, boy",
        category: "People & Body",
        aliases: ["family_woman_boy_boy"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "10.0"
      },
      {
        emoji: "\u{1F469}\u200D\u{1F467}",
        description: "family: woman, girl",
        category: "People & Body",
        aliases: ["family_woman_girl"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "10.0"
      },
      {
        emoji: "\u{1F469}\u200D\u{1F467}\u200D\u{1F466}",
        description: "family: woman, girl, boy",
        category: "People & Body",
        aliases: ["family_woman_girl_boy"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "10.0"
      },
      {
        emoji: "\u{1F469}\u200D\u{1F467}\u200D\u{1F467}",
        description: "family: woman, girl, girl",
        category: "People & Body",
        aliases: ["family_woman_girl_girl"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "10.0"
      },
      {
        emoji: "\u{1F5E3}\uFE0F",
        description: "speaking head",
        category: "People & Body",
        aliases: ["speaking_head"],
        tags: [],
        unicode_version: "7.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F464}",
        description: "bust in silhouette",
        category: "People & Body",
        aliases: ["bust_in_silhouette"],
        tags: ["user"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F465}",
        description: "busts in silhouette",
        category: "People & Body",
        aliases: ["busts_in_silhouette"],
        tags: ["users", "group", "team"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1FAC2}",
        description: "people hugging",
        category: "People & Body",
        aliases: ["people_hugging"],
        tags: [],
        unicode_version: "13.0",
        ios_version: "14.0"
      },
      {
        emoji: "\u{1F463}",
        description: "footprints",
        category: "People & Body",
        aliases: ["footprints"],
        tags: ["feet", "tracks"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F435}",
        description: "monkey face",
        category: "Animals & Nature",
        aliases: ["monkey_face"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F412}",
        description: "monkey",
        category: "Animals & Nature",
        aliases: ["monkey"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F98D}",
        description: "gorilla",
        category: "Animals & Nature",
        aliases: ["gorilla"],
        tags: [],
        unicode_version: "9.0",
        ios_version: "10.2"
      },
      {
        emoji: "\u{1F9A7}",
        description: "orangutan",
        category: "Animals & Nature",
        aliases: ["orangutan"],
        tags: [],
        unicode_version: "12.0",
        ios_version: "13.0"
      },
      {
        emoji: "\u{1F436}",
        description: "dog face",
        category: "Animals & Nature",
        aliases: ["dog"],
        tags: ["pet"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F415}",
        description: "dog",
        category: "Animals & Nature",
        aliases: ["dog2"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F9AE}",
        description: "guide dog",
        category: "Animals & Nature",
        aliases: ["guide_dog"],
        tags: [],
        unicode_version: "12.0",
        ios_version: "13.0"
      },
      {
        emoji: "\u{1F415}\u200D\u{1F9BA}",
        description: "service dog",
        category: "Animals & Nature",
        aliases: ["service_dog"],
        tags: [],
        unicode_version: "12.0",
        ios_version: "13.0"
      },
      {
        emoji: "\u{1F429}",
        description: "poodle",
        category: "Animals & Nature",
        aliases: ["poodle"],
        tags: ["dog"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F43A}",
        description: "wolf",
        category: "Animals & Nature",
        aliases: ["wolf"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F98A}",
        description: "fox",
        category: "Animals & Nature",
        aliases: ["fox_face"],
        tags: [],
        unicode_version: "9.0",
        ios_version: "10.2"
      },
      {
        emoji: "\u{1F99D}",
        description: "raccoon",
        category: "Animals & Nature",
        aliases: ["raccoon"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F431}",
        description: "cat face",
        category: "Animals & Nature",
        aliases: ["cat"],
        tags: ["pet"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F408}",
        description: "cat",
        category: "Animals & Nature",
        aliases: ["cat2"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F408}\u200D\u2B1B",
        description: "black cat",
        category: "Animals & Nature",
        aliases: ["black_cat"],
        tags: [],
        unicode_version: "13.0",
        ios_version: "14.0"
      },
      {
        emoji: "\u{1F981}",
        description: "lion",
        category: "Animals & Nature",
        aliases: ["lion"],
        tags: [],
        unicode_version: "8.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F42F}",
        description: "tiger face",
        category: "Animals & Nature",
        aliases: ["tiger"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F405}",
        description: "tiger",
        category: "Animals & Nature",
        aliases: ["tiger2"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F406}",
        description: "leopard",
        category: "Animals & Nature",
        aliases: ["leopard"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F434}",
        description: "horse face",
        category: "Animals & Nature",
        aliases: ["horse"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F40E}",
        description: "horse",
        category: "Animals & Nature",
        aliases: ["racehorse"],
        tags: ["speed"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F984}",
        description: "unicorn",
        category: "Animals & Nature",
        aliases: ["unicorn"],
        tags: [],
        unicode_version: "8.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F993}",
        description: "zebra",
        category: "Animals & Nature",
        aliases: ["zebra"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F98C}",
        description: "deer",
        category: "Animals & Nature",
        aliases: ["deer"],
        tags: [],
        unicode_version: "9.0",
        ios_version: "10.2"
      },
      {
        emoji: "\u{1F9AC}",
        description: "bison",
        category: "Animals & Nature",
        aliases: ["bison"],
        tags: [],
        unicode_version: "13.0",
        ios_version: "14.0"
      },
      {
        emoji: "\u{1F42E}",
        description: "cow face",
        category: "Animals & Nature",
        aliases: ["cow"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F402}",
        description: "ox",
        category: "Animals & Nature",
        aliases: ["ox"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F403}",
        description: "water buffalo",
        category: "Animals & Nature",
        aliases: ["water_buffalo"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F404}",
        description: "cow",
        category: "Animals & Nature",
        aliases: ["cow2"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F437}",
        description: "pig face",
        category: "Animals & Nature",
        aliases: ["pig"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F416}",
        description: "pig",
        category: "Animals & Nature",
        aliases: ["pig2"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F417}",
        description: "boar",
        category: "Animals & Nature",
        aliases: ["boar"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F43D}",
        description: "pig nose",
        category: "Animals & Nature",
        aliases: ["pig_nose"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F40F}",
        description: "ram",
        category: "Animals & Nature",
        aliases: ["ram"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F411}",
        description: "ewe",
        category: "Animals & Nature",
        aliases: ["sheep"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F410}",
        description: "goat",
        category: "Animals & Nature",
        aliases: ["goat"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F42A}",
        description: "camel",
        category: "Animals & Nature",
        aliases: ["dromedary_camel"],
        tags: ["desert"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F42B}",
        description: "two-hump camel",
        category: "Animals & Nature",
        aliases: ["camel"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F999}",
        description: "llama",
        category: "Animals & Nature",
        aliases: ["llama"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F992}",
        description: "giraffe",
        category: "Animals & Nature",
        aliases: ["giraffe"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F418}",
        description: "elephant",
        category: "Animals & Nature",
        aliases: ["elephant"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F9A3}",
        description: "mammoth",
        category: "Animals & Nature",
        aliases: ["mammoth"],
        tags: [],
        unicode_version: "13.0",
        ios_version: "14.0"
      },
      {
        emoji: "\u{1F98F}",
        description: "rhinoceros",
        category: "Animals & Nature",
        aliases: ["rhinoceros"],
        tags: [],
        unicode_version: "9.0",
        ios_version: "10.2"
      },
      {
        emoji: "\u{1F99B}",
        description: "hippopotamus",
        category: "Animals & Nature",
        aliases: ["hippopotamus"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F42D}",
        description: "mouse face",
        category: "Animals & Nature",
        aliases: ["mouse"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F401}",
        description: "mouse",
        category: "Animals & Nature",
        aliases: ["mouse2"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F400}",
        description: "rat",
        category: "Animals & Nature",
        aliases: ["rat"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F439}",
        description: "hamster",
        category: "Animals & Nature",
        aliases: ["hamster"],
        tags: ["pet"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F430}",
        description: "rabbit face",
        category: "Animals & Nature",
        aliases: ["rabbit"],
        tags: ["bunny"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F407}",
        description: "rabbit",
        category: "Animals & Nature",
        aliases: ["rabbit2"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F43F}\uFE0F",
        description: "chipmunk",
        category: "Animals & Nature",
        aliases: ["chipmunk"],
        tags: [],
        unicode_version: "7.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F9AB}",
        description: "beaver",
        category: "Animals & Nature",
        aliases: ["beaver"],
        tags: [],
        unicode_version: "13.0",
        ios_version: "14.0"
      },
      {
        emoji: "\u{1F994}",
        description: "hedgehog",
        category: "Animals & Nature",
        aliases: ["hedgehog"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F987}",
        description: "bat",
        category: "Animals & Nature",
        aliases: ["bat"],
        tags: [],
        unicode_version: "9.0",
        ios_version: "10.2"
      },
      {
        emoji: "\u{1F43B}",
        description: "bear",
        category: "Animals & Nature",
        aliases: ["bear"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F43B}\u200D\u2744\uFE0F",
        description: "polar bear",
        category: "Animals & Nature",
        aliases: ["polar_bear"],
        tags: [],
        unicode_version: "13.0",
        ios_version: "14.0"
      },
      {
        emoji: "\u{1F428}",
        description: "koala",
        category: "Animals & Nature",
        aliases: ["koala"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F43C}",
        description: "panda",
        category: "Animals & Nature",
        aliases: ["panda_face"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F9A5}",
        description: "sloth",
        category: "Animals & Nature",
        aliases: ["sloth"],
        tags: [],
        unicode_version: "12.0",
        ios_version: "13.0"
      },
      {
        emoji: "\u{1F9A6}",
        description: "otter",
        category: "Animals & Nature",
        aliases: ["otter"],
        tags: [],
        unicode_version: "12.0",
        ios_version: "13.0"
      },
      {
        emoji: "\u{1F9A8}",
        description: "skunk",
        category: "Animals & Nature",
        aliases: ["skunk"],
        tags: [],
        unicode_version: "12.0",
        ios_version: "13.0"
      },
      {
        emoji: "\u{1F998}",
        description: "kangaroo",
        category: "Animals & Nature",
        aliases: ["kangaroo"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F9A1}",
        description: "badger",
        category: "Animals & Nature",
        aliases: ["badger"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F43E}",
        description: "paw prints",
        category: "Animals & Nature",
        aliases: ["feet", "paw_prints"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F983}",
        description: "turkey",
        category: "Animals & Nature",
        aliases: ["turkey"],
        tags: ["thanksgiving"],
        unicode_version: "8.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F414}",
        description: "chicken",
        category: "Animals & Nature",
        aliases: ["chicken"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F413}",
        description: "rooster",
        category: "Animals & Nature",
        aliases: ["rooster"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F423}",
        description: "hatching chick",
        category: "Animals & Nature",
        aliases: ["hatching_chick"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F424}",
        description: "baby chick",
        category: "Animals & Nature",
        aliases: ["baby_chick"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F425}",
        description: "front-facing baby chick",
        category: "Animals & Nature",
        aliases: ["hatched_chick"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F426}",
        description: "bird",
        category: "Animals & Nature",
        aliases: ["bird"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F427}",
        description: "penguin",
        category: "Animals & Nature",
        aliases: ["penguin"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F54A}\uFE0F",
        description: "dove",
        category: "Animals & Nature",
        aliases: ["dove"],
        tags: ["peace"],
        unicode_version: "7.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F985}",
        description: "eagle",
        category: "Animals & Nature",
        aliases: ["eagle"],
        tags: [],
        unicode_version: "9.0",
        ios_version: "10.2"
      },
      {
        emoji: "\u{1F986}",
        description: "duck",
        category: "Animals & Nature",
        aliases: ["duck"],
        tags: [],
        unicode_version: "9.0",
        ios_version: "10.2"
      },
      {
        emoji: "\u{1F9A2}",
        description: "swan",
        category: "Animals & Nature",
        aliases: ["swan"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F989}",
        description: "owl",
        category: "Animals & Nature",
        aliases: ["owl"],
        tags: [],
        unicode_version: "9.0",
        ios_version: "10.2"
      },
      {
        emoji: "\u{1F9A4}",
        description: "dodo",
        category: "Animals & Nature",
        aliases: ["dodo"],
        tags: [],
        unicode_version: "13.0",
        ios_version: "14.0"
      },
      {
        emoji: "\u{1FAB6}",
        description: "feather",
        category: "Animals & Nature",
        aliases: ["feather"],
        tags: [],
        unicode_version: "13.0",
        ios_version: "14.0"
      },
      {
        emoji: "\u{1F9A9}",
        description: "flamingo",
        category: "Animals & Nature",
        aliases: ["flamingo"],
        tags: [],
        unicode_version: "12.0",
        ios_version: "13.0"
      },
      {
        emoji: "\u{1F99A}",
        description: "peacock",
        category: "Animals & Nature",
        aliases: ["peacock"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F99C}",
        description: "parrot",
        category: "Animals & Nature",
        aliases: ["parrot"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F438}",
        description: "frog",
        category: "Animals & Nature",
        aliases: ["frog"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F40A}",
        description: "crocodile",
        category: "Animals & Nature",
        aliases: ["crocodile"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F422}",
        description: "turtle",
        category: "Animals & Nature",
        aliases: ["turtle"],
        tags: ["slow"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F98E}",
        description: "lizard",
        category: "Animals & Nature",
        aliases: ["lizard"],
        tags: [],
        unicode_version: "9.0",
        ios_version: "10.2"
      },
      {
        emoji: "\u{1F40D}",
        description: "snake",
        category: "Animals & Nature",
        aliases: ["snake"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F432}",
        description: "dragon face",
        category: "Animals & Nature",
        aliases: ["dragon_face"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F409}",
        description: "dragon",
        category: "Animals & Nature",
        aliases: ["dragon"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F995}",
        description: "sauropod",
        category: "Animals & Nature",
        aliases: ["sauropod"],
        tags: ["dinosaur"],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F996}",
        description: "T-Rex",
        category: "Animals & Nature",
        aliases: ["t-rex"],
        tags: ["dinosaur"],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F433}",
        description: "spouting whale",
        category: "Animals & Nature",
        aliases: ["whale"],
        tags: ["sea"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F40B}",
        description: "whale",
        category: "Animals & Nature",
        aliases: ["whale2"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F42C}",
        description: "dolphin",
        category: "Animals & Nature",
        aliases: ["dolphin", "flipper"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F9AD}",
        description: "seal",
        category: "Animals & Nature",
        aliases: ["seal"],
        tags: [],
        unicode_version: "13.0",
        ios_version: "14.0"
      },
      {
        emoji: "\u{1F41F}",
        description: "fish",
        category: "Animals & Nature",
        aliases: ["fish"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F420}",
        description: "tropical fish",
        category: "Animals & Nature",
        aliases: ["tropical_fish"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F421}",
        description: "blowfish",
        category: "Animals & Nature",
        aliases: ["blowfish"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F988}",
        description: "shark",
        category: "Animals & Nature",
        aliases: ["shark"],
        tags: [],
        unicode_version: "9.0",
        ios_version: "10.2"
      },
      {
        emoji: "\u{1F419}",
        description: "octopus",
        category: "Animals & Nature",
        aliases: ["octopus"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F41A}",
        description: "spiral shell",
        category: "Animals & Nature",
        aliases: ["shell"],
        tags: ["sea", "beach"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F40C}",
        description: "snail",
        category: "Animals & Nature",
        aliases: ["snail"],
        tags: ["slow"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F98B}",
        description: "butterfly",
        category: "Animals & Nature",
        aliases: ["butterfly"],
        tags: [],
        unicode_version: "9.0",
        ios_version: "10.2"
      },
      {
        emoji: "\u{1F41B}",
        description: "bug",
        category: "Animals & Nature",
        aliases: ["bug"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F41C}",
        description: "ant",
        category: "Animals & Nature",
        aliases: ["ant"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F41D}",
        description: "honeybee",
        category: "Animals & Nature",
        aliases: ["bee", "honeybee"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1FAB2}",
        description: "beetle",
        category: "Animals & Nature",
        aliases: ["beetle"],
        tags: [],
        unicode_version: "13.0",
        ios_version: "14.0"
      },
      {
        emoji: "\u{1F41E}",
        description: "lady beetle",
        category: "Animals & Nature",
        aliases: ["lady_beetle"],
        tags: ["bug"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F997}",
        description: "cricket",
        category: "Animals & Nature",
        aliases: ["cricket"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1FAB3}",
        description: "cockroach",
        category: "Animals & Nature",
        aliases: ["cockroach"],
        tags: [],
        unicode_version: "13.0",
        ios_version: "14.0"
      },
      {
        emoji: "\u{1F577}\uFE0F",
        description: "spider",
        category: "Animals & Nature",
        aliases: ["spider"],
        tags: [],
        unicode_version: "7.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F578}\uFE0F",
        description: "spider web",
        category: "Animals & Nature",
        aliases: ["spider_web"],
        tags: [],
        unicode_version: "7.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F982}",
        description: "scorpion",
        category: "Animals & Nature",
        aliases: ["scorpion"],
        tags: [],
        unicode_version: "8.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F99F}",
        description: "mosquito",
        category: "Animals & Nature",
        aliases: ["mosquito"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1FAB0}",
        description: "fly",
        category: "Animals & Nature",
        aliases: ["fly"],
        tags: [],
        unicode_version: "13.0",
        ios_version: "14.0"
      },
      {
        emoji: "\u{1FAB1}",
        description: "worm",
        category: "Animals & Nature",
        aliases: ["worm"],
        tags: [],
        unicode_version: "13.0",
        ios_version: "14.0"
      },
      {
        emoji: "\u{1F9A0}",
        description: "microbe",
        category: "Animals & Nature",
        aliases: ["microbe"],
        tags: ["germ"],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F490}",
        description: "bouquet",
        category: "Animals & Nature",
        aliases: ["bouquet"],
        tags: ["flowers"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F338}",
        description: "cherry blossom",
        category: "Animals & Nature",
        aliases: ["cherry_blossom"],
        tags: ["flower", "spring"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F4AE}",
        description: "white flower",
        category: "Animals & Nature",
        aliases: ["white_flower"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F3F5}\uFE0F",
        description: "rosette",
        category: "Animals & Nature",
        aliases: ["rosette"],
        tags: [],
        unicode_version: "7.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F339}",
        description: "rose",
        category: "Animals & Nature",
        aliases: ["rose"],
        tags: ["flower"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F940}",
        description: "wilted flower",
        category: "Animals & Nature",
        aliases: ["wilted_flower"],
        tags: [],
        unicode_version: "9.0",
        ios_version: "10.2"
      },
      {
        emoji: "\u{1F33A}",
        description: "hibiscus",
        category: "Animals & Nature",
        aliases: ["hibiscus"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F33B}",
        description: "sunflower",
        category: "Animals & Nature",
        aliases: ["sunflower"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F33C}",
        description: "blossom",
        category: "Animals & Nature",
        aliases: ["blossom"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F337}",
        description: "tulip",
        category: "Animals & Nature",
        aliases: ["tulip"],
        tags: ["flower"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F331}",
        description: "seedling",
        category: "Animals & Nature",
        aliases: ["seedling"],
        tags: ["plant"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1FAB4}",
        description: "potted plant",
        category: "Animals & Nature",
        aliases: ["potted_plant"],
        tags: [],
        unicode_version: "13.0",
        ios_version: "14.0"
      },
      {
        emoji: "\u{1F332}",
        description: "evergreen tree",
        category: "Animals & Nature",
        aliases: ["evergreen_tree"],
        tags: ["wood"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F333}",
        description: "deciduous tree",
        category: "Animals & Nature",
        aliases: ["deciduous_tree"],
        tags: ["wood"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F334}",
        description: "palm tree",
        category: "Animals & Nature",
        aliases: ["palm_tree"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F335}",
        description: "cactus",
        category: "Animals & Nature",
        aliases: ["cactus"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F33E}",
        description: "sheaf of rice",
        category: "Animals & Nature",
        aliases: ["ear_of_rice"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F33F}",
        description: "herb",
        category: "Animals & Nature",
        aliases: ["herb"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u2618\uFE0F",
        description: "shamrock",
        category: "Animals & Nature",
        aliases: ["shamrock"],
        tags: [],
        unicode_version: "4.1",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F340}",
        description: "four leaf clover",
        category: "Animals & Nature",
        aliases: ["four_leaf_clover"],
        tags: ["luck"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F341}",
        description: "maple leaf",
        category: "Animals & Nature",
        aliases: ["maple_leaf"],
        tags: ["canada"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F342}",
        description: "fallen leaf",
        category: "Animals & Nature",
        aliases: ["fallen_leaf"],
        tags: ["autumn"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F343}",
        description: "leaf fluttering in wind",
        category: "Animals & Nature",
        aliases: ["leaves"],
        tags: ["leaf"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F347}",
        description: "grapes",
        category: "Food & Drink",
        aliases: ["grapes"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F348}",
        description: "melon",
        category: "Food & Drink",
        aliases: ["melon"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F349}",
        description: "watermelon",
        category: "Food & Drink",
        aliases: ["watermelon"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F34A}",
        description: "tangerine",
        category: "Food & Drink",
        aliases: ["tangerine", "orange", "mandarin"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F34B}",
        description: "lemon",
        category: "Food & Drink",
        aliases: ["lemon"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F34C}",
        description: "banana",
        category: "Food & Drink",
        aliases: ["banana"],
        tags: ["fruit"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F34D}",
        description: "pineapple",
        category: "Food & Drink",
        aliases: ["pineapple"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F96D}",
        description: "mango",
        category: "Food & Drink",
        aliases: ["mango"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F34E}",
        description: "red apple",
        category: "Food & Drink",
        aliases: ["apple"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F34F}",
        description: "green apple",
        category: "Food & Drink",
        aliases: ["green_apple"],
        tags: ["fruit"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F350}",
        description: "pear",
        category: "Food & Drink",
        aliases: ["pear"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F351}",
        description: "peach",
        category: "Food & Drink",
        aliases: ["peach"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F352}",
        description: "cherries",
        category: "Food & Drink",
        aliases: ["cherries"],
        tags: ["fruit"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F353}",
        description: "strawberry",
        category: "Food & Drink",
        aliases: ["strawberry"],
        tags: ["fruit"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1FAD0}",
        description: "blueberries",
        category: "Food & Drink",
        aliases: ["blueberries"],
        tags: [],
        unicode_version: "13.0",
        ios_version: "14.0"
      },
      {
        emoji: "\u{1F95D}",
        description: "kiwi fruit",
        category: "Food & Drink",
        aliases: ["kiwi_fruit"],
        tags: [],
        unicode_version: "9.0",
        ios_version: "10.2"
      },
      {
        emoji: "\u{1F345}",
        description: "tomato",
        category: "Food & Drink",
        aliases: ["tomato"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1FAD2}",
        description: "olive",
        category: "Food & Drink",
        aliases: ["olive"],
        tags: [],
        unicode_version: "13.0",
        ios_version: "14.0"
      },
      {
        emoji: "\u{1F965}",
        description: "coconut",
        category: "Food & Drink",
        aliases: ["coconut"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F951}",
        description: "avocado",
        category: "Food & Drink",
        aliases: ["avocado"],
        tags: [],
        unicode_version: "9.0",
        ios_version: "10.2"
      },
      {
        emoji: "\u{1F346}",
        description: "eggplant",
        category: "Food & Drink",
        aliases: ["eggplant"],
        tags: ["aubergine"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F954}",
        description: "potato",
        category: "Food & Drink",
        aliases: ["potato"],
        tags: [],
        unicode_version: "9.0",
        ios_version: "10.2"
      },
      {
        emoji: "\u{1F955}",
        description: "carrot",
        category: "Food & Drink",
        aliases: ["carrot"],
        tags: [],
        unicode_version: "9.0",
        ios_version: "10.2"
      },
      {
        emoji: "\u{1F33D}",
        description: "ear of corn",
        category: "Food & Drink",
        aliases: ["corn"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F336}\uFE0F",
        description: "hot pepper",
        category: "Food & Drink",
        aliases: ["hot_pepper"],
        tags: ["spicy"],
        unicode_version: "7.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1FAD1}",
        description: "bell pepper",
        category: "Food & Drink",
        aliases: ["bell_pepper"],
        tags: [],
        unicode_version: "13.0",
        ios_version: "14.0"
      },
      {
        emoji: "\u{1F952}",
        description: "cucumber",
        category: "Food & Drink",
        aliases: ["cucumber"],
        tags: [],
        unicode_version: "9.0",
        ios_version: "10.2"
      },
      {
        emoji: "\u{1F96C}",
        description: "leafy green",
        category: "Food & Drink",
        aliases: ["leafy_green"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F966}",
        description: "broccoli",
        category: "Food & Drink",
        aliases: ["broccoli"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F9C4}",
        description: "garlic",
        category: "Food & Drink",
        aliases: ["garlic"],
        tags: [],
        unicode_version: "12.0",
        ios_version: "13.0"
      },
      {
        emoji: "\u{1F9C5}",
        description: "onion",
        category: "Food & Drink",
        aliases: ["onion"],
        tags: [],
        unicode_version: "12.0",
        ios_version: "13.0"
      },
      {
        emoji: "\u{1F344}",
        description: "mushroom",
        category: "Food & Drink",
        aliases: ["mushroom"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F95C}",
        description: "peanuts",
        category: "Food & Drink",
        aliases: ["peanuts"],
        tags: [],
        unicode_version: "9.0",
        ios_version: "10.2"
      },
      {
        emoji: "\u{1F330}",
        description: "chestnut",
        category: "Food & Drink",
        aliases: ["chestnut"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F35E}",
        description: "bread",
        category: "Food & Drink",
        aliases: ["bread"],
        tags: ["toast"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F950}",
        description: "croissant",
        category: "Food & Drink",
        aliases: ["croissant"],
        tags: [],
        unicode_version: "9.0",
        ios_version: "10.2"
      },
      {
        emoji: "\u{1F956}",
        description: "baguette bread",
        category: "Food & Drink",
        aliases: ["baguette_bread"],
        tags: [],
        unicode_version: "9.0",
        ios_version: "10.2"
      },
      {
        emoji: "\u{1FAD3}",
        description: "flatbread",
        category: "Food & Drink",
        aliases: ["flatbread"],
        tags: [],
        unicode_version: "13.0",
        ios_version: "14.0"
      },
      {
        emoji: "\u{1F968}",
        description: "pretzel",
        category: "Food & Drink",
        aliases: ["pretzel"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F96F}",
        description: "bagel",
        category: "Food & Drink",
        aliases: ["bagel"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F95E}",
        description: "pancakes",
        category: "Food & Drink",
        aliases: ["pancakes"],
        tags: [],
        unicode_version: "9.0",
        ios_version: "10.2"
      },
      {
        emoji: "\u{1F9C7}",
        description: "waffle",
        category: "Food & Drink",
        aliases: ["waffle"],
        tags: [],
        unicode_version: "12.0",
        ios_version: "13.0"
      },
      {
        emoji: "\u{1F9C0}",
        description: "cheese wedge",
        category: "Food & Drink",
        aliases: ["cheese"],
        tags: [],
        unicode_version: "8.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F356}",
        description: "meat on bone",
        category: "Food & Drink",
        aliases: ["meat_on_bone"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F357}",
        description: "poultry leg",
        category: "Food & Drink",
        aliases: ["poultry_leg"],
        tags: ["meat", "chicken"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F969}",
        description: "cut of meat",
        category: "Food & Drink",
        aliases: ["cut_of_meat"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F953}",
        description: "bacon",
        category: "Food & Drink",
        aliases: ["bacon"],
        tags: [],
        unicode_version: "9.0",
        ios_version: "10.2"
      },
      {
        emoji: "\u{1F354}",
        description: "hamburger",
        category: "Food & Drink",
        aliases: ["hamburger"],
        tags: ["burger"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F35F}",
        description: "french fries",
        category: "Food & Drink",
        aliases: ["fries"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F355}",
        description: "pizza",
        category: "Food & Drink",
        aliases: ["pizza"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F32D}",
        description: "hot dog",
        category: "Food & Drink",
        aliases: ["hotdog"],
        tags: [],
        unicode_version: "8.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F96A}",
        description: "sandwich",
        category: "Food & Drink",
        aliases: ["sandwich"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F32E}",
        description: "taco",
        category: "Food & Drink",
        aliases: ["taco"],
        tags: [],
        unicode_version: "8.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F32F}",
        description: "burrito",
        category: "Food & Drink",
        aliases: ["burrito"],
        tags: [],
        unicode_version: "8.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1FAD4}",
        description: "tamale",
        category: "Food & Drink",
        aliases: ["tamale"],
        tags: [],
        unicode_version: "13.0",
        ios_version: "14.0"
      },
      {
        emoji: "\u{1F959}",
        description: "stuffed flatbread",
        category: "Food & Drink",
        aliases: ["stuffed_flatbread"],
        tags: [],
        unicode_version: "9.0",
        ios_version: "10.2"
      },
      {
        emoji: "\u{1F9C6}",
        description: "falafel",
        category: "Food & Drink",
        aliases: ["falafel"],
        tags: [],
        unicode_version: "12.0",
        ios_version: "13.0"
      },
      {
        emoji: "\u{1F95A}",
        description: "egg",
        category: "Food & Drink",
        aliases: ["egg"],
        tags: [],
        unicode_version: "9.0",
        ios_version: "10.2"
      },
      {
        emoji: "\u{1F373}",
        description: "cooking",
        category: "Food & Drink",
        aliases: ["fried_egg"],
        tags: ["breakfast"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F958}",
        description: "shallow pan of food",
        category: "Food & Drink",
        aliases: ["shallow_pan_of_food"],
        tags: ["paella", "curry"],
        unicode_version: "",
        ios_version: "10.2"
      },
      {
        emoji: "\u{1F372}",
        description: "pot of food",
        category: "Food & Drink",
        aliases: ["stew"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1FAD5}",
        description: "fondue",
        category: "Food & Drink",
        aliases: ["fondue"],
        tags: [],
        unicode_version: "13.0",
        ios_version: "14.0"
      },
      {
        emoji: "\u{1F963}",
        description: "bowl with spoon",
        category: "Food & Drink",
        aliases: ["bowl_with_spoon"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F957}",
        description: "green salad",
        category: "Food & Drink",
        aliases: ["green_salad"],
        tags: [],
        unicode_version: "9.0",
        ios_version: "10.2"
      },
      {
        emoji: "\u{1F37F}",
        description: "popcorn",
        category: "Food & Drink",
        aliases: ["popcorn"],
        tags: [],
        unicode_version: "8.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F9C8}",
        description: "butter",
        category: "Food & Drink",
        aliases: ["butter"],
        tags: [],
        unicode_version: "12.0",
        ios_version: "13.0"
      },
      {
        emoji: "\u{1F9C2}",
        description: "salt",
        category: "Food & Drink",
        aliases: ["salt"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F96B}",
        description: "canned food",
        category: "Food & Drink",
        aliases: ["canned_food"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F371}",
        description: "bento box",
        category: "Food & Drink",
        aliases: ["bento"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F358}",
        description: "rice cracker",
        category: "Food & Drink",
        aliases: ["rice_cracker"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F359}",
        description: "rice ball",
        category: "Food & Drink",
        aliases: ["rice_ball"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F35A}",
        description: "cooked rice",
        category: "Food & Drink",
        aliases: ["rice"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F35B}",
        description: "curry rice",
        category: "Food & Drink",
        aliases: ["curry"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F35C}",
        description: "steaming bowl",
        category: "Food & Drink",
        aliases: ["ramen"],
        tags: ["noodle"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F35D}",
        description: "spaghetti",
        category: "Food & Drink",
        aliases: ["spaghetti"],
        tags: ["pasta"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F360}",
        description: "roasted sweet potato",
        category: "Food & Drink",
        aliases: ["sweet_potato"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F362}",
        description: "oden",
        category: "Food & Drink",
        aliases: ["oden"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F363}",
        description: "sushi",
        category: "Food & Drink",
        aliases: ["sushi"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F364}",
        description: "fried shrimp",
        category: "Food & Drink",
        aliases: ["fried_shrimp"],
        tags: ["tempura"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F365}",
        description: "fish cake with swirl",
        category: "Food & Drink",
        aliases: ["fish_cake"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F96E}",
        description: "moon cake",
        category: "Food & Drink",
        aliases: ["moon_cake"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F361}",
        description: "dango",
        category: "Food & Drink",
        aliases: ["dango"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F95F}",
        description: "dumpling",
        category: "Food & Drink",
        aliases: ["dumpling"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F960}",
        description: "fortune cookie",
        category: "Food & Drink",
        aliases: ["fortune_cookie"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F961}",
        description: "takeout box",
        category: "Food & Drink",
        aliases: ["takeout_box"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F980}",
        description: "crab",
        category: "Food & Drink",
        aliases: ["crab"],
        tags: [],
        unicode_version: "8.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F99E}",
        description: "lobster",
        category: "Food & Drink",
        aliases: ["lobster"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F990}",
        description: "shrimp",
        category: "Food & Drink",
        aliases: ["shrimp"],
        tags: [],
        unicode_version: "9.0",
        ios_version: "10.2"
      },
      {
        emoji: "\u{1F991}",
        description: "squid",
        category: "Food & Drink",
        aliases: ["squid"],
        tags: [],
        unicode_version: "9.0",
        ios_version: "10.2"
      },
      {
        emoji: "\u{1F9AA}",
        description: "oyster",
        category: "Food & Drink",
        aliases: ["oyster"],
        tags: [],
        unicode_version: "12.0",
        ios_version: "13.0"
      },
      {
        emoji: "\u{1F366}",
        description: "soft ice cream",
        category: "Food & Drink",
        aliases: ["icecream"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F367}",
        description: "shaved ice",
        category: "Food & Drink",
        aliases: ["shaved_ice"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F368}",
        description: "ice cream",
        category: "Food & Drink",
        aliases: ["ice_cream"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F369}",
        description: "doughnut",
        category: "Food & Drink",
        aliases: ["doughnut"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F36A}",
        description: "cookie",
        category: "Food & Drink",
        aliases: ["cookie"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F382}",
        description: "birthday cake",
        category: "Food & Drink",
        aliases: ["birthday"],
        tags: ["party"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F370}",
        description: "shortcake",
        category: "Food & Drink",
        aliases: ["cake"],
        tags: ["dessert"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F9C1}",
        description: "cupcake",
        category: "Food & Drink",
        aliases: ["cupcake"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F967}",
        description: "pie",
        category: "Food & Drink",
        aliases: ["pie"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F36B}",
        description: "chocolate bar",
        category: "Food & Drink",
        aliases: ["chocolate_bar"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F36C}",
        description: "candy",
        category: "Food & Drink",
        aliases: ["candy"],
        tags: ["sweet"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F36D}",
        description: "lollipop",
        category: "Food & Drink",
        aliases: ["lollipop"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F36E}",
        description: "custard",
        category: "Food & Drink",
        aliases: ["custard"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F36F}",
        description: "honey pot",
        category: "Food & Drink",
        aliases: ["honey_pot"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F37C}",
        description: "baby bottle",
        category: "Food & Drink",
        aliases: ["baby_bottle"],
        tags: ["milk"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F95B}",
        description: "glass of milk",
        category: "Food & Drink",
        aliases: ["milk_glass"],
        tags: [],
        unicode_version: "9.0",
        ios_version: "10.2"
      },
      {
        emoji: "\u2615",
        description: "hot beverage",
        category: "Food & Drink",
        aliases: ["coffee"],
        tags: ["cafe", "espresso"],
        unicode_version: "4.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1FAD6}",
        description: "teapot",
        category: "Food & Drink",
        aliases: ["teapot"],
        tags: [],
        unicode_version: "13.0",
        ios_version: "14.0"
      },
      {
        emoji: "\u{1F375}",
        description: "teacup without handle",
        category: "Food & Drink",
        aliases: ["tea"],
        tags: ["green", "breakfast"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F376}",
        description: "sake",
        category: "Food & Drink",
        aliases: ["sake"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F37E}",
        description: "bottle with popping cork",
        category: "Food & Drink",
        aliases: ["champagne"],
        tags: ["bottle", "bubbly", "celebration"],
        unicode_version: "8.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F377}",
        description: "wine glass",
        category: "Food & Drink",
        aliases: ["wine_glass"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F378}",
        description: "cocktail glass",
        category: "Food & Drink",
        aliases: ["cocktail"],
        tags: ["drink"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F379}",
        description: "tropical drink",
        category: "Food & Drink",
        aliases: ["tropical_drink"],
        tags: ["summer", "vacation"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F37A}",
        description: "beer mug",
        category: "Food & Drink",
        aliases: ["beer"],
        tags: ["drink"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F37B}",
        description: "clinking beer mugs",
        category: "Food & Drink",
        aliases: ["beers"],
        tags: ["drinks"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F942}",
        description: "clinking glasses",
        category: "Food & Drink",
        aliases: ["clinking_glasses"],
        tags: ["cheers", "toast"],
        unicode_version: "9.0",
        ios_version: "10.2"
      },
      {
        emoji: "\u{1F943}",
        description: "tumbler glass",
        category: "Food & Drink",
        aliases: ["tumbler_glass"],
        tags: ["whisky"],
        unicode_version: "9.0",
        ios_version: "10.2"
      },
      {
        emoji: "\u{1F964}",
        description: "cup with straw",
        category: "Food & Drink",
        aliases: ["cup_with_straw"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F9CB}",
        description: "bubble tea",
        category: "Food & Drink",
        aliases: ["bubble_tea"],
        tags: [],
        unicode_version: "13.0",
        ios_version: "14.0"
      },
      {
        emoji: "\u{1F9C3}",
        description: "beverage box",
        category: "Food & Drink",
        aliases: ["beverage_box"],
        tags: [],
        unicode_version: "12.0",
        ios_version: "13.0"
      },
      {
        emoji: "\u{1F9C9}",
        description: "mate",
        category: "Food & Drink",
        aliases: ["mate"],
        tags: [],
        unicode_version: "12.0",
        ios_version: "13.0"
      },
      {
        emoji: "\u{1F9CA}",
        description: "ice",
        category: "Food & Drink",
        aliases: ["ice_cube"],
        tags: [],
        unicode_version: "12.0",
        ios_version: "13.0"
      },
      {
        emoji: "\u{1F962}",
        description: "chopsticks",
        category: "Food & Drink",
        aliases: ["chopsticks"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F37D}\uFE0F",
        description: "fork and knife with plate",
        category: "Food & Drink",
        aliases: ["plate_with_cutlery"],
        tags: ["dining", "dinner"],
        unicode_version: "7.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F374}",
        description: "fork and knife",
        category: "Food & Drink",
        aliases: ["fork_and_knife"],
        tags: ["cutlery"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F944}",
        description: "spoon",
        category: "Food & Drink",
        aliases: ["spoon"],
        tags: [],
        unicode_version: "9.0",
        ios_version: "10.2"
      },
      {
        emoji: "\u{1F52A}",
        description: "kitchen knife",
        category: "Food & Drink",
        aliases: ["hocho", "knife"],
        tags: ["cut", "chop"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F3FA}",
        description: "amphora",
        category: "Food & Drink",
        aliases: ["amphora"],
        tags: [],
        unicode_version: "8.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F30D}",
        description: "globe showing Europe-Africa",
        category: "Travel & Places",
        aliases: ["earth_africa"],
        tags: ["globe", "world", "international"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F30E}",
        description: "globe showing Americas",
        category: "Travel & Places",
        aliases: ["earth_americas"],
        tags: ["globe", "world", "international"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F30F}",
        description: "globe showing Asia-Australia",
        category: "Travel & Places",
        aliases: ["earth_asia"],
        tags: ["globe", "world", "international"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F310}",
        description: "globe with meridians",
        category: "Travel & Places",
        aliases: ["globe_with_meridians"],
        tags: ["world", "global", "international"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F5FA}\uFE0F",
        description: "world map",
        category: "Travel & Places",
        aliases: ["world_map"],
        tags: ["travel"],
        unicode_version: "7.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F5FE}",
        description: "map of Japan",
        category: "Travel & Places",
        aliases: ["japan"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F9ED}",
        description: "compass",
        category: "Travel & Places",
        aliases: ["compass"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F3D4}\uFE0F",
        description: "snow-capped mountain",
        category: "Travel & Places",
        aliases: ["mountain_snow"],
        tags: [],
        unicode_version: "7.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u26F0\uFE0F",
        description: "mountain",
        category: "Travel & Places",
        aliases: ["mountain"],
        tags: [],
        unicode_version: "5.2",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F30B}",
        description: "volcano",
        category: "Travel & Places",
        aliases: ["volcano"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F5FB}",
        description: "mount fuji",
        category: "Travel & Places",
        aliases: ["mount_fuji"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F3D5}\uFE0F",
        description: "camping",
        category: "Travel & Places",
        aliases: ["camping"],
        tags: [],
        unicode_version: "7.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F3D6}\uFE0F",
        description: "beach with umbrella",
        category: "Travel & Places",
        aliases: ["beach_umbrella"],
        tags: [],
        unicode_version: "7.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F3DC}\uFE0F",
        description: "desert",
        category: "Travel & Places",
        aliases: ["desert"],
        tags: [],
        unicode_version: "7.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F3DD}\uFE0F",
        description: "desert island",
        category: "Travel & Places",
        aliases: ["desert_island"],
        tags: [],
        unicode_version: "7.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F3DE}\uFE0F",
        description: "national park",
        category: "Travel & Places",
        aliases: ["national_park"],
        tags: [],
        unicode_version: "7.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F3DF}\uFE0F",
        description: "stadium",
        category: "Travel & Places",
        aliases: ["stadium"],
        tags: [],
        unicode_version: "7.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F3DB}\uFE0F",
        description: "classical building",
        category: "Travel & Places",
        aliases: ["classical_building"],
        tags: [],
        unicode_version: "7.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F3D7}\uFE0F",
        description: "building construction",
        category: "Travel & Places",
        aliases: ["building_construction"],
        tags: [],
        unicode_version: "7.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F9F1}",
        description: "brick",
        category: "Travel & Places",
        aliases: ["bricks"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1FAA8}",
        description: "rock",
        category: "Travel & Places",
        aliases: ["rock"],
        tags: [],
        unicode_version: "13.0",
        ios_version: "14.0"
      },
      {
        emoji: "\u{1FAB5}",
        description: "wood",
        category: "Travel & Places",
        aliases: ["wood"],
        tags: [],
        unicode_version: "13.0",
        ios_version: "14.0"
      },
      {
        emoji: "\u{1F6D6}",
        description: "hut",
        category: "Travel & Places",
        aliases: ["hut"],
        tags: [],
        unicode_version: "13.0",
        ios_version: "14.0"
      },
      {
        emoji: "\u{1F3D8}\uFE0F",
        description: "houses",
        category: "Travel & Places",
        aliases: ["houses"],
        tags: [],
        unicode_version: "7.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F3DA}\uFE0F",
        description: "derelict house",
        category: "Travel & Places",
        aliases: ["derelict_house"],
        tags: [],
        unicode_version: "7.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F3E0}",
        description: "house",
        category: "Travel & Places",
        aliases: ["house"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F3E1}",
        description: "house with garden",
        category: "Travel & Places",
        aliases: ["house_with_garden"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F3E2}",
        description: "office building",
        category: "Travel & Places",
        aliases: ["office"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F3E3}",
        description: "Japanese post office",
        category: "Travel & Places",
        aliases: ["post_office"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F3E4}",
        description: "post office",
        category: "Travel & Places",
        aliases: ["european_post_office"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F3E5}",
        description: "hospital",
        category: "Travel & Places",
        aliases: ["hospital"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F3E6}",
        description: "bank",
        category: "Travel & Places",
        aliases: ["bank"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F3E8}",
        description: "hotel",
        category: "Travel & Places",
        aliases: ["hotel"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F3E9}",
        description: "love hotel",
        category: "Travel & Places",
        aliases: ["love_hotel"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F3EA}",
        description: "convenience store",
        category: "Travel & Places",
        aliases: ["convenience_store"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F3EB}",
        description: "school",
        category: "Travel & Places",
        aliases: ["school"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F3EC}",
        description: "department store",
        category: "Travel & Places",
        aliases: ["department_store"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F3ED}",
        description: "factory",
        category: "Travel & Places",
        aliases: ["factory"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F3EF}",
        description: "Japanese castle",
        category: "Travel & Places",
        aliases: ["japanese_castle"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F3F0}",
        description: "castle",
        category: "Travel & Places",
        aliases: ["european_castle"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F492}",
        description: "wedding",
        category: "Travel & Places",
        aliases: ["wedding"],
        tags: ["marriage"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F5FC}",
        description: "Tokyo tower",
        category: "Travel & Places",
        aliases: ["tokyo_tower"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F5FD}",
        description: "Statue of Liberty",
        category: "Travel & Places",
        aliases: ["statue_of_liberty"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u26EA",
        description: "church",
        category: "Travel & Places",
        aliases: ["church"],
        tags: [],
        unicode_version: "5.2",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F54C}",
        description: "mosque",
        category: "Travel & Places",
        aliases: ["mosque"],
        tags: [],
        unicode_version: "8.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F6D5}",
        description: "hindu temple",
        category: "Travel & Places",
        aliases: ["hindu_temple"],
        tags: [],
        unicode_version: "12.0",
        ios_version: "13.0"
      },
      {
        emoji: "\u{1F54D}",
        description: "synagogue",
        category: "Travel & Places",
        aliases: ["synagogue"],
        tags: [],
        unicode_version: "8.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u26E9\uFE0F",
        description: "shinto shrine",
        category: "Travel & Places",
        aliases: ["shinto_shrine"],
        tags: [],
        unicode_version: "5.2",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F54B}",
        description: "kaaba",
        category: "Travel & Places",
        aliases: ["kaaba"],
        tags: [],
        unicode_version: "8.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u26F2",
        description: "fountain",
        category: "Travel & Places",
        aliases: ["fountain"],
        tags: [],
        unicode_version: "5.2",
        ios_version: "6.0"
      },
      {
        emoji: "\u26FA",
        description: "tent",
        category: "Travel & Places",
        aliases: ["tent"],
        tags: ["camping"],
        unicode_version: "5.2",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F301}",
        description: "foggy",
        category: "Travel & Places",
        aliases: ["foggy"],
        tags: ["karl"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F303}",
        description: "night with stars",
        category: "Travel & Places",
        aliases: ["night_with_stars"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F3D9}\uFE0F",
        description: "cityscape",
        category: "Travel & Places",
        aliases: ["cityscape"],
        tags: ["skyline"],
        unicode_version: "7.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F304}",
        description: "sunrise over mountains",
        category: "Travel & Places",
        aliases: ["sunrise_over_mountains"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F305}",
        description: "sunrise",
        category: "Travel & Places",
        aliases: ["sunrise"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F306}",
        description: "cityscape at dusk",
        category: "Travel & Places",
        aliases: ["city_sunset"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F307}",
        description: "sunset",
        category: "Travel & Places",
        aliases: ["city_sunrise"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F309}",
        description: "bridge at night",
        category: "Travel & Places",
        aliases: ["bridge_at_night"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u2668\uFE0F",
        description: "hot springs",
        category: "Travel & Places",
        aliases: ["hotsprings"],
        tags: [],
        unicode_version: "",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F3A0}",
        description: "carousel horse",
        category: "Travel & Places",
        aliases: ["carousel_horse"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F3A1}",
        description: "ferris wheel",
        category: "Travel & Places",
        aliases: ["ferris_wheel"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F3A2}",
        description: "roller coaster",
        category: "Travel & Places",
        aliases: ["roller_coaster"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F488}",
        description: "barber pole",
        category: "Travel & Places",
        aliases: ["barber"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F3AA}",
        description: "circus tent",
        category: "Travel & Places",
        aliases: ["circus_tent"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F682}",
        description: "locomotive",
        category: "Travel & Places",
        aliases: ["steam_locomotive"],
        tags: ["train"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F683}",
        description: "railway car",
        category: "Travel & Places",
        aliases: ["railway_car"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F684}",
        description: "high-speed train",
        category: "Travel & Places",
        aliases: ["bullettrain_side"],
        tags: ["train"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F685}",
        description: "bullet train",
        category: "Travel & Places",
        aliases: ["bullettrain_front"],
        tags: ["train"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F686}",
        description: "train",
        category: "Travel & Places",
        aliases: ["train2"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F687}",
        description: "metro",
        category: "Travel & Places",
        aliases: ["metro"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F688}",
        description: "light rail",
        category: "Travel & Places",
        aliases: ["light_rail"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F689}",
        description: "station",
        category: "Travel & Places",
        aliases: ["station"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F68A}",
        description: "tram",
        category: "Travel & Places",
        aliases: ["tram"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F69D}",
        description: "monorail",
        category: "Travel & Places",
        aliases: ["monorail"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F69E}",
        description: "mountain railway",
        category: "Travel & Places",
        aliases: ["mountain_railway"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F68B}",
        description: "tram car",
        category: "Travel & Places",
        aliases: ["train"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F68C}",
        description: "bus",
        category: "Travel & Places",
        aliases: ["bus"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F68D}",
        description: "oncoming bus",
        category: "Travel & Places",
        aliases: ["oncoming_bus"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F68E}",
        description: "trolleybus",
        category: "Travel & Places",
        aliases: ["trolleybus"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F690}",
        description: "minibus",
        category: "Travel & Places",
        aliases: ["minibus"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F691}",
        description: "ambulance",
        category: "Travel & Places",
        aliases: ["ambulance"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F692}",
        description: "fire engine",
        category: "Travel & Places",
        aliases: ["fire_engine"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F693}",
        description: "police car",
        category: "Travel & Places",
        aliases: ["police_car"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F694}",
        description: "oncoming police car",
        category: "Travel & Places",
        aliases: ["oncoming_police_car"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F695}",
        description: "taxi",
        category: "Travel & Places",
        aliases: ["taxi"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F696}",
        description: "oncoming taxi",
        category: "Travel & Places",
        aliases: ["oncoming_taxi"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F697}",
        description: "automobile",
        category: "Travel & Places",
        aliases: ["car", "red_car"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F698}",
        description: "oncoming automobile",
        category: "Travel & Places",
        aliases: ["oncoming_automobile"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F699}",
        description: "sport utility vehicle",
        category: "Travel & Places",
        aliases: ["blue_car"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F6FB}",
        description: "pickup truck",
        category: "Travel & Places",
        aliases: ["pickup_truck"],
        tags: [],
        unicode_version: "13.0",
        ios_version: "14.0"
      },
      {
        emoji: "\u{1F69A}",
        description: "delivery truck",
        category: "Travel & Places",
        aliases: ["truck"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F69B}",
        description: "articulated lorry",
        category: "Travel & Places",
        aliases: ["articulated_lorry"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F69C}",
        description: "tractor",
        category: "Travel & Places",
        aliases: ["tractor"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F3CE}\uFE0F",
        description: "racing car",
        category: "Travel & Places",
        aliases: ["racing_car"],
        tags: [],
        unicode_version: "7.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F3CD}\uFE0F",
        description: "motorcycle",
        category: "Travel & Places",
        aliases: ["motorcycle"],
        tags: [],
        unicode_version: "7.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F6F5}",
        description: "motor scooter",
        category: "Travel & Places",
        aliases: ["motor_scooter"],
        tags: [],
        unicode_version: "9.0",
        ios_version: "10.2"
      },
      {
        emoji: "\u{1F9BD}",
        description: "manual wheelchair",
        category: "Travel & Places",
        aliases: ["manual_wheelchair"],
        tags: [],
        unicode_version: "12.0",
        ios_version: "13.0"
      },
      {
        emoji: "\u{1F9BC}",
        description: "motorized wheelchair",
        category: "Travel & Places",
        aliases: ["motorized_wheelchair"],
        tags: [],
        unicode_version: "12.0",
        ios_version: "13.0"
      },
      {
        emoji: "\u{1F6FA}",
        description: "auto rickshaw",
        category: "Travel & Places",
        aliases: ["auto_rickshaw"],
        tags: [],
        unicode_version: "12.0",
        ios_version: "13.0"
      },
      {
        emoji: "\u{1F6B2}",
        description: "bicycle",
        category: "Travel & Places",
        aliases: ["bike"],
        tags: ["bicycle"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F6F4}",
        description: "kick scooter",
        category: "Travel & Places",
        aliases: ["kick_scooter"],
        tags: [],
        unicode_version: "9.0",
        ios_version: "10.2"
      },
      {
        emoji: "\u{1F6F9}",
        description: "skateboard",
        category: "Travel & Places",
        aliases: ["skateboard"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F6FC}",
        description: "roller skate",
        category: "Travel & Places",
        aliases: ["roller_skate"],
        tags: [],
        unicode_version: "13.0",
        ios_version: "14.0"
      },
      {
        emoji: "\u{1F68F}",
        description: "bus stop",
        category: "Travel & Places",
        aliases: ["busstop"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F6E3}\uFE0F",
        description: "motorway",
        category: "Travel & Places",
        aliases: ["motorway"],
        tags: [],
        unicode_version: "7.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F6E4}\uFE0F",
        description: "railway track",
        category: "Travel & Places",
        aliases: ["railway_track"],
        tags: [],
        unicode_version: "7.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F6E2}\uFE0F",
        description: "oil drum",
        category: "Travel & Places",
        aliases: ["oil_drum"],
        tags: [],
        unicode_version: "7.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u26FD",
        description: "fuel pump",
        category: "Travel & Places",
        aliases: ["fuelpump"],
        tags: [],
        unicode_version: "5.2",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F6A8}",
        description: "police car light",
        category: "Travel & Places",
        aliases: ["rotating_light"],
        tags: ["911", "emergency"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F6A5}",
        description: "horizontal traffic light",
        category: "Travel & Places",
        aliases: ["traffic_light"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F6A6}",
        description: "vertical traffic light",
        category: "Travel & Places",
        aliases: ["vertical_traffic_light"],
        tags: ["semaphore"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F6D1}",
        description: "stop sign",
        category: "Travel & Places",
        aliases: ["stop_sign"],
        tags: [],
        unicode_version: "9.0",
        ios_version: "10.2"
      },
      {
        emoji: "\u{1F6A7}",
        description: "construction",
        category: "Travel & Places",
        aliases: ["construction"],
        tags: ["wip"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u2693",
        description: "anchor",
        category: "Travel & Places",
        aliases: ["anchor"],
        tags: ["ship"],
        unicode_version: "4.1",
        ios_version: "6.0"
      },
      {
        emoji: "\u26F5",
        description: "sailboat",
        category: "Travel & Places",
        aliases: ["boat", "sailboat"],
        tags: [],
        unicode_version: "5.2",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F6F6}",
        description: "canoe",
        category: "Travel & Places",
        aliases: ["canoe"],
        tags: [],
        unicode_version: "9.0",
        ios_version: "10.2"
      },
      {
        emoji: "\u{1F6A4}",
        description: "speedboat",
        category: "Travel & Places",
        aliases: ["speedboat"],
        tags: ["ship"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F6F3}\uFE0F",
        description: "passenger ship",
        category: "Travel & Places",
        aliases: ["passenger_ship"],
        tags: ["cruise"],
        unicode_version: "7.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u26F4\uFE0F",
        description: "ferry",
        category: "Travel & Places",
        aliases: ["ferry"],
        tags: [],
        unicode_version: "5.2",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F6E5}\uFE0F",
        description: "motor boat",
        category: "Travel & Places",
        aliases: ["motor_boat"],
        tags: [],
        unicode_version: "7.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F6A2}",
        description: "ship",
        category: "Travel & Places",
        aliases: ["ship"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u2708\uFE0F",
        description: "airplane",
        category: "Travel & Places",
        aliases: ["airplane"],
        tags: ["flight"],
        unicode_version: "",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F6E9}\uFE0F",
        description: "small airplane",
        category: "Travel & Places",
        aliases: ["small_airplane"],
        tags: ["flight"],
        unicode_version: "7.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F6EB}",
        description: "airplane departure",
        category: "Travel & Places",
        aliases: ["flight_departure"],
        tags: [],
        unicode_version: "7.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F6EC}",
        description: "airplane arrival",
        category: "Travel & Places",
        aliases: ["flight_arrival"],
        tags: [],
        unicode_version: "7.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1FA82}",
        description: "parachute",
        category: "Travel & Places",
        aliases: ["parachute"],
        tags: [],
        unicode_version: "12.0",
        ios_version: "13.0"
      },
      {
        emoji: "\u{1F4BA}",
        description: "seat",
        category: "Travel & Places",
        aliases: ["seat"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F681}",
        description: "helicopter",
        category: "Travel & Places",
        aliases: ["helicopter"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F69F}",
        description: "suspension railway",
        category: "Travel & Places",
        aliases: ["suspension_railway"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F6A0}",
        description: "mountain cableway",
        category: "Travel & Places",
        aliases: ["mountain_cableway"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F6A1}",
        description: "aerial tramway",
        category: "Travel & Places",
        aliases: ["aerial_tramway"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F6F0}\uFE0F",
        description: "satellite",
        category: "Travel & Places",
        aliases: ["artificial_satellite"],
        tags: ["orbit", "space"],
        unicode_version: "7.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F680}",
        description: "rocket",
        category: "Travel & Places",
        aliases: ["rocket"],
        tags: ["ship", "launch"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F6F8}",
        description: "flying saucer",
        category: "Travel & Places",
        aliases: ["flying_saucer"],
        tags: ["ufo"],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F6CE}\uFE0F",
        description: "bellhop bell",
        category: "Travel & Places",
        aliases: ["bellhop_bell"],
        tags: [],
        unicode_version: "7.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F9F3}",
        description: "luggage",
        category: "Travel & Places",
        aliases: ["luggage"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u231B",
        description: "hourglass done",
        category: "Travel & Places",
        aliases: ["hourglass"],
        tags: ["time"],
        unicode_version: "",
        ios_version: "6.0"
      },
      {
        emoji: "\u23F3",
        description: "hourglass not done",
        category: "Travel & Places",
        aliases: ["hourglass_flowing_sand"],
        tags: ["time"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u231A",
        description: "watch",
        category: "Travel & Places",
        aliases: ["watch"],
        tags: ["time"],
        unicode_version: "",
        ios_version: "6.0"
      },
      {
        emoji: "\u23F0",
        description: "alarm clock",
        category: "Travel & Places",
        aliases: ["alarm_clock"],
        tags: ["morning"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u23F1\uFE0F",
        description: "stopwatch",
        category: "Travel & Places",
        aliases: ["stopwatch"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u23F2\uFE0F",
        description: "timer clock",
        category: "Travel & Places",
        aliases: ["timer_clock"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F570}\uFE0F",
        description: "mantelpiece clock",
        category: "Travel & Places",
        aliases: ["mantelpiece_clock"],
        tags: [],
        unicode_version: "7.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F55B}",
        description: "twelve o\u2019clock",
        category: "Travel & Places",
        aliases: ["clock12"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F567}",
        description: "twelve-thirty",
        category: "Travel & Places",
        aliases: ["clock1230"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F550}",
        description: "one o\u2019clock",
        category: "Travel & Places",
        aliases: ["clock1"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F55C}",
        description: "one-thirty",
        category: "Travel & Places",
        aliases: ["clock130"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F551}",
        description: "two o\u2019clock",
        category: "Travel & Places",
        aliases: ["clock2"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F55D}",
        description: "two-thirty",
        category: "Travel & Places",
        aliases: ["clock230"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F552}",
        description: "three o\u2019clock",
        category: "Travel & Places",
        aliases: ["clock3"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F55E}",
        description: "three-thirty",
        category: "Travel & Places",
        aliases: ["clock330"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F553}",
        description: "four o\u2019clock",
        category: "Travel & Places",
        aliases: ["clock4"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F55F}",
        description: "four-thirty",
        category: "Travel & Places",
        aliases: ["clock430"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F554}",
        description: "five o\u2019clock",
        category: "Travel & Places",
        aliases: ["clock5"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F560}",
        description: "five-thirty",
        category: "Travel & Places",
        aliases: ["clock530"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F555}",
        description: "six o\u2019clock",
        category: "Travel & Places",
        aliases: ["clock6"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F561}",
        description: "six-thirty",
        category: "Travel & Places",
        aliases: ["clock630"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F556}",
        description: "seven o\u2019clock",
        category: "Travel & Places",
        aliases: ["clock7"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F562}",
        description: "seven-thirty",
        category: "Travel & Places",
        aliases: ["clock730"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F557}",
        description: "eight o\u2019clock",
        category: "Travel & Places",
        aliases: ["clock8"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F563}",
        description: "eight-thirty",
        category: "Travel & Places",
        aliases: ["clock830"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F558}",
        description: "nine o\u2019clock",
        category: "Travel & Places",
        aliases: ["clock9"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F564}",
        description: "nine-thirty",
        category: "Travel & Places",
        aliases: ["clock930"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F559}",
        description: "ten o\u2019clock",
        category: "Travel & Places",
        aliases: ["clock10"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F565}",
        description: "ten-thirty",
        category: "Travel & Places",
        aliases: ["clock1030"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F55A}",
        description: "eleven o\u2019clock",
        category: "Travel & Places",
        aliases: ["clock11"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F566}",
        description: "eleven-thirty",
        category: "Travel & Places",
        aliases: ["clock1130"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F311}",
        description: "new moon",
        category: "Travel & Places",
        aliases: ["new_moon"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F312}",
        description: "waxing crescent moon",
        category: "Travel & Places",
        aliases: ["waxing_crescent_moon"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F313}",
        description: "first quarter moon",
        category: "Travel & Places",
        aliases: ["first_quarter_moon"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F314}",
        description: "waxing gibbous moon",
        category: "Travel & Places",
        aliases: ["moon", "waxing_gibbous_moon"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F315}",
        description: "full moon",
        category: "Travel & Places",
        aliases: ["full_moon"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F316}",
        description: "waning gibbous moon",
        category: "Travel & Places",
        aliases: ["waning_gibbous_moon"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F317}",
        description: "last quarter moon",
        category: "Travel & Places",
        aliases: ["last_quarter_moon"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F318}",
        description: "waning crescent moon",
        category: "Travel & Places",
        aliases: ["waning_crescent_moon"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F319}",
        description: "crescent moon",
        category: "Travel & Places",
        aliases: ["crescent_moon"],
        tags: ["night"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F31A}",
        description: "new moon face",
        category: "Travel & Places",
        aliases: ["new_moon_with_face"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F31B}",
        description: "first quarter moon face",
        category: "Travel & Places",
        aliases: ["first_quarter_moon_with_face"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F31C}",
        description: "last quarter moon face",
        category: "Travel & Places",
        aliases: ["last_quarter_moon_with_face"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F321}\uFE0F",
        description: "thermometer",
        category: "Travel & Places",
        aliases: ["thermometer"],
        tags: [],
        unicode_version: "7.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u2600\uFE0F",
        description: "sun",
        category: "Travel & Places",
        aliases: ["sunny"],
        tags: ["weather"],
        unicode_version: "",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F31D}",
        description: "full moon face",
        category: "Travel & Places",
        aliases: ["full_moon_with_face"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F31E}",
        description: "sun with face",
        category: "Travel & Places",
        aliases: ["sun_with_face"],
        tags: ["summer"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1FA90}",
        description: "ringed planet",
        category: "Travel & Places",
        aliases: ["ringed_planet"],
        tags: [],
        unicode_version: "12.0",
        ios_version: "13.0"
      },
      {
        emoji: "\u2B50",
        description: "star",
        category: "Travel & Places",
        aliases: ["star"],
        tags: [],
        unicode_version: "5.1",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F31F}",
        description: "glowing star",
        category: "Travel & Places",
        aliases: ["star2"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F320}",
        description: "shooting star",
        category: "Travel & Places",
        aliases: ["stars"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F30C}",
        description: "milky way",
        category: "Travel & Places",
        aliases: ["milky_way"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u2601\uFE0F",
        description: "cloud",
        category: "Travel & Places",
        aliases: ["cloud"],
        tags: [],
        unicode_version: "",
        ios_version: "6.0"
      },
      {
        emoji: "\u26C5",
        description: "sun behind cloud",
        category: "Travel & Places",
        aliases: ["partly_sunny"],
        tags: ["weather", "cloud"],
        unicode_version: "5.2",
        ios_version: "6.0"
      },
      {
        emoji: "\u26C8\uFE0F",
        description: "cloud with lightning and rain",
        category: "Travel & Places",
        aliases: ["cloud_with_lightning_and_rain"],
        tags: [],
        unicode_version: "5.2",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F324}\uFE0F",
        description: "sun behind small cloud",
        category: "Travel & Places",
        aliases: ["sun_behind_small_cloud"],
        tags: [],
        unicode_version: "7.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F325}\uFE0F",
        description: "sun behind large cloud",
        category: "Travel & Places",
        aliases: ["sun_behind_large_cloud"],
        tags: [],
        unicode_version: "7.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F326}\uFE0F",
        description: "sun behind rain cloud",
        category: "Travel & Places",
        aliases: ["sun_behind_rain_cloud"],
        tags: [],
        unicode_version: "7.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F327}\uFE0F",
        description: "cloud with rain",
        category: "Travel & Places",
        aliases: ["cloud_with_rain"],
        tags: [],
        unicode_version: "7.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F328}\uFE0F",
        description: "cloud with snow",
        category: "Travel & Places",
        aliases: ["cloud_with_snow"],
        tags: [],
        unicode_version: "7.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F329}\uFE0F",
        description: "cloud with lightning",
        category: "Travel & Places",
        aliases: ["cloud_with_lightning"],
        tags: [],
        unicode_version: "7.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F32A}\uFE0F",
        description: "tornado",
        category: "Travel & Places",
        aliases: ["tornado"],
        tags: [],
        unicode_version: "7.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F32B}\uFE0F",
        description: "fog",
        category: "Travel & Places",
        aliases: ["fog"],
        tags: [],
        unicode_version: "7.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F32C}\uFE0F",
        description: "wind face",
        category: "Travel & Places",
        aliases: ["wind_face"],
        tags: [],
        unicode_version: "7.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F300}",
        description: "cyclone",
        category: "Travel & Places",
        aliases: ["cyclone"],
        tags: ["swirl"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F308}",
        description: "rainbow",
        category: "Travel & Places",
        aliases: ["rainbow"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F302}",
        description: "closed umbrella",
        category: "Travel & Places",
        aliases: ["closed_umbrella"],
        tags: ["weather", "rain"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u2602\uFE0F",
        description: "umbrella",
        category: "Travel & Places",
        aliases: ["open_umbrella"],
        tags: [],
        unicode_version: "",
        ios_version: "9.1"
      },
      {
        emoji: "\u2614",
        description: "umbrella with rain drops",
        category: "Travel & Places",
        aliases: ["umbrella"],
        tags: ["rain", "weather"],
        unicode_version: "4.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u26F1\uFE0F",
        description: "umbrella on ground",
        category: "Travel & Places",
        aliases: ["parasol_on_ground"],
        tags: ["beach_umbrella"],
        unicode_version: "5.2",
        ios_version: "9.1"
      },
      {
        emoji: "\u26A1",
        description: "high voltage",
        category: "Travel & Places",
        aliases: ["zap"],
        tags: ["lightning", "thunder"],
        unicode_version: "4.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u2744\uFE0F",
        description: "snowflake",
        category: "Travel & Places",
        aliases: ["snowflake"],
        tags: ["winter", "cold", "weather"],
        unicode_version: "",
        ios_version: "6.0"
      },
      {
        emoji: "\u2603\uFE0F",
        description: "snowman",
        category: "Travel & Places",
        aliases: ["snowman_with_snow"],
        tags: ["winter", "christmas"],
        unicode_version: "",
        ios_version: "9.1"
      },
      {
        emoji: "\u26C4",
        description: "snowman without snow",
        category: "Travel & Places",
        aliases: ["snowman"],
        tags: ["winter"],
        unicode_version: "5.2",
        ios_version: "6.0"
      },
      {
        emoji: "\u2604\uFE0F",
        description: "comet",
        category: "Travel & Places",
        aliases: ["comet"],
        tags: [],
        unicode_version: "",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F525}",
        description: "fire",
        category: "Travel & Places",
        aliases: ["fire"],
        tags: ["burn"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F4A7}",
        description: "droplet",
        category: "Travel & Places",
        aliases: ["droplet"],
        tags: ["water"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F30A}",
        description: "water wave",
        category: "Travel & Places",
        aliases: ["ocean"],
        tags: ["sea"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F383}",
        description: "jack-o-lantern",
        category: "Activities",
        aliases: ["jack_o_lantern"],
        tags: ["halloween"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F384}",
        description: "Christmas tree",
        category: "Activities",
        aliases: ["christmas_tree"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F386}",
        description: "fireworks",
        category: "Activities",
        aliases: ["fireworks"],
        tags: ["festival", "celebration"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F387}",
        description: "sparkler",
        category: "Activities",
        aliases: ["sparkler"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F9E8}",
        description: "firecracker",
        category: "Activities",
        aliases: ["firecracker"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u2728",
        description: "sparkles",
        category: "Activities",
        aliases: ["sparkles"],
        tags: ["shiny"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F388}",
        description: "balloon",
        category: "Activities",
        aliases: ["balloon"],
        tags: ["party", "birthday"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F389}",
        description: "party popper",
        category: "Activities",
        aliases: ["tada"],
        tags: ["hooray", "party"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F38A}",
        description: "confetti ball",
        category: "Activities",
        aliases: ["confetti_ball"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F38B}",
        description: "tanabata tree",
        category: "Activities",
        aliases: ["tanabata_tree"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F38D}",
        description: "pine decoration",
        category: "Activities",
        aliases: ["bamboo"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F38E}",
        description: "Japanese dolls",
        category: "Activities",
        aliases: ["dolls"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F38F}",
        description: "carp streamer",
        category: "Activities",
        aliases: ["flags"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F390}",
        description: "wind chime",
        category: "Activities",
        aliases: ["wind_chime"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F391}",
        description: "moon viewing ceremony",
        category: "Activities",
        aliases: ["rice_scene"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F9E7}",
        description: "red envelope",
        category: "Activities",
        aliases: ["red_envelope"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F380}",
        description: "ribbon",
        category: "Activities",
        aliases: ["ribbon"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F381}",
        description: "wrapped gift",
        category: "Activities",
        aliases: ["gift"],
        tags: ["present", "birthday", "christmas"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F397}\uFE0F",
        description: "reminder ribbon",
        category: "Activities",
        aliases: ["reminder_ribbon"],
        tags: [],
        unicode_version: "7.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F39F}\uFE0F",
        description: "admission tickets",
        category: "Activities",
        aliases: ["tickets"],
        tags: [],
        unicode_version: "7.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F3AB}",
        description: "ticket",
        category: "Activities",
        aliases: ["ticket"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F396}\uFE0F",
        description: "military medal",
        category: "Activities",
        aliases: ["medal_military"],
        tags: [],
        unicode_version: "7.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F3C6}",
        description: "trophy",
        category: "Activities",
        aliases: ["trophy"],
        tags: ["award", "contest", "winner"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F3C5}",
        description: "sports medal",
        category: "Activities",
        aliases: ["medal_sports"],
        tags: ["gold", "winner"],
        unicode_version: "7.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F947}",
        description: "1st place medal",
        category: "Activities",
        aliases: ["1st_place_medal"],
        tags: ["gold"],
        unicode_version: "9.0",
        ios_version: "10.2"
      },
      {
        emoji: "\u{1F948}",
        description: "2nd place medal",
        category: "Activities",
        aliases: ["2nd_place_medal"],
        tags: ["silver"],
        unicode_version: "9.0",
        ios_version: "10.2"
      },
      {
        emoji: "\u{1F949}",
        description: "3rd place medal",
        category: "Activities",
        aliases: ["3rd_place_medal"],
        tags: ["bronze"],
        unicode_version: "9.0",
        ios_version: "10.2"
      },
      {
        emoji: "\u26BD",
        description: "soccer ball",
        category: "Activities",
        aliases: ["soccer"],
        tags: ["sports"],
        unicode_version: "5.2",
        ios_version: "6.0"
      },
      {
        emoji: "\u26BE",
        description: "baseball",
        category: "Activities",
        aliases: ["baseball"],
        tags: ["sports"],
        unicode_version: "5.2",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F94E}",
        description: "softball",
        category: "Activities",
        aliases: ["softball"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F3C0}",
        description: "basketball",
        category: "Activities",
        aliases: ["basketball"],
        tags: ["sports"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F3D0}",
        description: "volleyball",
        category: "Activities",
        aliases: ["volleyball"],
        tags: [],
        unicode_version: "8.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F3C8}",
        description: "american football",
        category: "Activities",
        aliases: ["football"],
        tags: ["sports"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F3C9}",
        description: "rugby football",
        category: "Activities",
        aliases: ["rugby_football"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F3BE}",
        description: "tennis",
        category: "Activities",
        aliases: ["tennis"],
        tags: ["sports"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F94F}",
        description: "flying disc",
        category: "Activities",
        aliases: ["flying_disc"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F3B3}",
        description: "bowling",
        category: "Activities",
        aliases: ["bowling"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F3CF}",
        description: "cricket game",
        category: "Activities",
        aliases: ["cricket_game"],
        tags: [],
        unicode_version: "8.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F3D1}",
        description: "field hockey",
        category: "Activities",
        aliases: ["field_hockey"],
        tags: [],
        unicode_version: "8.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F3D2}",
        description: "ice hockey",
        category: "Activities",
        aliases: ["ice_hockey"],
        tags: [],
        unicode_version: "8.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F94D}",
        description: "lacrosse",
        category: "Activities",
        aliases: ["lacrosse"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F3D3}",
        description: "ping pong",
        category: "Activities",
        aliases: ["ping_pong"],
        tags: [],
        unicode_version: "8.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F3F8}",
        description: "badminton",
        category: "Activities",
        aliases: ["badminton"],
        tags: [],
        unicode_version: "8.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F94A}",
        description: "boxing glove",
        category: "Activities",
        aliases: ["boxing_glove"],
        tags: [],
        unicode_version: "9.0",
        ios_version: "10.2"
      },
      {
        emoji: "\u{1F94B}",
        description: "martial arts uniform",
        category: "Activities",
        aliases: ["martial_arts_uniform"],
        tags: [],
        unicode_version: "9.0",
        ios_version: "10.2"
      },
      {
        emoji: "\u{1F945}",
        description: "goal net",
        category: "Activities",
        aliases: ["goal_net"],
        tags: [],
        unicode_version: "9.0",
        ios_version: "10.2"
      },
      {
        emoji: "\u26F3",
        description: "flag in hole",
        category: "Activities",
        aliases: ["golf"],
        tags: [],
        unicode_version: "5.2",
        ios_version: "6.0"
      },
      {
        emoji: "\u26F8\uFE0F",
        description: "ice skate",
        category: "Activities",
        aliases: ["ice_skate"],
        tags: ["skating"],
        unicode_version: "5.2",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F3A3}",
        description: "fishing pole",
        category: "Activities",
        aliases: ["fishing_pole_and_fish"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F93F}",
        description: "diving mask",
        category: "Activities",
        aliases: ["diving_mask"],
        tags: [],
        unicode_version: "12.0",
        ios_version: "13.0"
      },
      {
        emoji: "\u{1F3BD}",
        description: "running shirt",
        category: "Activities",
        aliases: ["running_shirt_with_sash"],
        tags: ["marathon"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F3BF}",
        description: "skis",
        category: "Activities",
        aliases: ["ski"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F6F7}",
        description: "sled",
        category: "Activities",
        aliases: ["sled"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F94C}",
        description: "curling stone",
        category: "Activities",
        aliases: ["curling_stone"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F3AF}",
        description: "bullseye",
        category: "Activities",
        aliases: ["dart"],
        tags: ["target"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1FA80}",
        description: "yo-yo",
        category: "Activities",
        aliases: ["yo_yo"],
        tags: [],
        unicode_version: "12.0",
        ios_version: "13.0"
      },
      {
        emoji: "\u{1FA81}",
        description: "kite",
        category: "Activities",
        aliases: ["kite"],
        tags: [],
        unicode_version: "12.0",
        ios_version: "13.0"
      },
      {
        emoji: "\u{1F3B1}",
        description: "pool 8 ball",
        category: "Activities",
        aliases: ["8ball"],
        tags: ["pool", "billiards"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F52E}",
        description: "crystal ball",
        category: "Activities",
        aliases: ["crystal_ball"],
        tags: ["fortune"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1FA84}",
        description: "magic wand",
        category: "Activities",
        aliases: ["magic_wand"],
        tags: [],
        unicode_version: "13.0",
        ios_version: "14.0"
      },
      {
        emoji: "\u{1F9FF}",
        description: "nazar amulet",
        category: "Activities",
        aliases: ["nazar_amulet"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F3AE}",
        description: "video game",
        category: "Activities",
        aliases: ["video_game"],
        tags: ["play", "controller", "console"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F579}\uFE0F",
        description: "joystick",
        category: "Activities",
        aliases: ["joystick"],
        tags: [],
        unicode_version: "7.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F3B0}",
        description: "slot machine",
        category: "Activities",
        aliases: ["slot_machine"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F3B2}",
        description: "game die",
        category: "Activities",
        aliases: ["game_die"],
        tags: ["dice", "gambling"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F9E9}",
        description: "puzzle piece",
        category: "Activities",
        aliases: ["jigsaw"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F9F8}",
        description: "teddy bear",
        category: "Activities",
        aliases: ["teddy_bear"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1FA85}",
        description: "pi\xF1ata",
        category: "Activities",
        aliases: ["pinata"],
        tags: [],
        unicode_version: "13.0",
        ios_version: "14.0"
      },
      {
        emoji: "\u{1FA86}",
        description: "nesting dolls",
        category: "Activities",
        aliases: ["nesting_dolls"],
        tags: [],
        unicode_version: "13.0",
        ios_version: "14.0"
      },
      {
        emoji: "\u2660\uFE0F",
        description: "spade suit",
        category: "Activities",
        aliases: ["spades"],
        tags: [],
        unicode_version: "",
        ios_version: "6.0"
      },
      {
        emoji: "\u2665\uFE0F",
        description: "heart suit",
        category: "Activities",
        aliases: ["hearts"],
        tags: [],
        unicode_version: "",
        ios_version: "6.0"
      },
      {
        emoji: "\u2666\uFE0F",
        description: "diamond suit",
        category: "Activities",
        aliases: ["diamonds"],
        tags: [],
        unicode_version: "",
        ios_version: "6.0"
      },
      {
        emoji: "\u2663\uFE0F",
        description: "club suit",
        category: "Activities",
        aliases: ["clubs"],
        tags: [],
        unicode_version: "",
        ios_version: "6.0"
      },
      {
        emoji: "\u265F\uFE0F",
        description: "chess pawn",
        category: "Activities",
        aliases: ["chess_pawn"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F0CF}",
        description: "joker",
        category: "Activities",
        aliases: ["black_joker"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F004}",
        description: "mahjong red dragon",
        category: "Activities",
        aliases: ["mahjong"],
        tags: [],
        unicode_version: "",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F3B4}",
        description: "flower playing cards",
        category: "Activities",
        aliases: ["flower_playing_cards"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F3AD}",
        description: "performing arts",
        category: "Activities",
        aliases: ["performing_arts"],
        tags: ["theater", "drama"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F5BC}\uFE0F",
        description: "framed picture",
        category: "Activities",
        aliases: ["framed_picture"],
        tags: [],
        unicode_version: "7.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F3A8}",
        description: "artist palette",
        category: "Activities",
        aliases: ["art"],
        tags: ["design", "paint"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F9F5}",
        description: "thread",
        category: "Activities",
        aliases: ["thread"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1FAA1}",
        description: "sewing needle",
        category: "Activities",
        aliases: ["sewing_needle"],
        tags: [],
        unicode_version: "13.0",
        ios_version: "14.0"
      },
      {
        emoji: "\u{1F9F6}",
        description: "yarn",
        category: "Activities",
        aliases: ["yarn"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1FAA2}",
        description: "knot",
        category: "Activities",
        aliases: ["knot"],
        tags: [],
        unicode_version: "13.0",
        ios_version: "14.0"
      },
      {
        emoji: "\u{1F453}",
        description: "glasses",
        category: "Objects",
        aliases: ["eyeglasses"],
        tags: ["glasses"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F576}\uFE0F",
        description: "sunglasses",
        category: "Objects",
        aliases: ["dark_sunglasses"],
        tags: [],
        unicode_version: "7.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F97D}",
        description: "goggles",
        category: "Objects",
        aliases: ["goggles"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F97C}",
        description: "lab coat",
        category: "Objects",
        aliases: ["lab_coat"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F9BA}",
        description: "safety vest",
        category: "Objects",
        aliases: ["safety_vest"],
        tags: [],
        unicode_version: "12.0",
        ios_version: "13.0"
      },
      {
        emoji: "\u{1F454}",
        description: "necktie",
        category: "Objects",
        aliases: ["necktie"],
        tags: ["shirt", "formal"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F455}",
        description: "t-shirt",
        category: "Objects",
        aliases: ["shirt", "tshirt"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F456}",
        description: "jeans",
        category: "Objects",
        aliases: ["jeans"],
        tags: ["pants"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F9E3}",
        description: "scarf",
        category: "Objects",
        aliases: ["scarf"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F9E4}",
        description: "gloves",
        category: "Objects",
        aliases: ["gloves"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F9E5}",
        description: "coat",
        category: "Objects",
        aliases: ["coat"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F9E6}",
        description: "socks",
        category: "Objects",
        aliases: ["socks"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F457}",
        description: "dress",
        category: "Objects",
        aliases: ["dress"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F458}",
        description: "kimono",
        category: "Objects",
        aliases: ["kimono"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F97B}",
        description: "sari",
        category: "Objects",
        aliases: ["sari"],
        tags: [],
        unicode_version: "12.0",
        ios_version: "13.0"
      },
      {
        emoji: "\u{1FA71}",
        description: "one-piece swimsuit",
        category: "Objects",
        aliases: ["one_piece_swimsuit"],
        tags: [],
        unicode_version: "12.0",
        ios_version: "13.0"
      },
      {
        emoji: "\u{1FA72}",
        description: "briefs",
        category: "Objects",
        aliases: ["swim_brief"],
        tags: [],
        unicode_version: "12.0",
        ios_version: "13.0"
      },
      {
        emoji: "\u{1FA73}",
        description: "shorts",
        category: "Objects",
        aliases: ["shorts"],
        tags: [],
        unicode_version: "12.0",
        ios_version: "13.0"
      },
      {
        emoji: "\u{1F459}",
        description: "bikini",
        category: "Objects",
        aliases: ["bikini"],
        tags: ["beach"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F45A}",
        description: "woman\u2019s clothes",
        category: "Objects",
        aliases: ["womans_clothes"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F45B}",
        description: "purse",
        category: "Objects",
        aliases: ["purse"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F45C}",
        description: "handbag",
        category: "Objects",
        aliases: ["handbag"],
        tags: ["bag"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F45D}",
        description: "clutch bag",
        category: "Objects",
        aliases: ["pouch"],
        tags: ["bag"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F6CD}\uFE0F",
        description: "shopping bags",
        category: "Objects",
        aliases: ["shopping"],
        tags: ["bags"],
        unicode_version: "7.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F392}",
        description: "backpack",
        category: "Objects",
        aliases: ["school_satchel"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1FA74}",
        description: "thong sandal",
        category: "Objects",
        aliases: ["thong_sandal"],
        tags: [],
        unicode_version: "13.0",
        ios_version: "14.0"
      },
      {
        emoji: "\u{1F45E}",
        description: "man\u2019s shoe",
        category: "Objects",
        aliases: ["mans_shoe", "shoe"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F45F}",
        description: "running shoe",
        category: "Objects",
        aliases: ["athletic_shoe"],
        tags: ["sneaker", "sport", "running"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F97E}",
        description: "hiking boot",
        category: "Objects",
        aliases: ["hiking_boot"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F97F}",
        description: "flat shoe",
        category: "Objects",
        aliases: ["flat_shoe"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F460}",
        description: "high-heeled shoe",
        category: "Objects",
        aliases: ["high_heel"],
        tags: ["shoe"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F461}",
        description: "woman\u2019s sandal",
        category: "Objects",
        aliases: ["sandal"],
        tags: ["shoe"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1FA70}",
        description: "ballet shoes",
        category: "Objects",
        aliases: ["ballet_shoes"],
        tags: [],
        unicode_version: "12.0",
        ios_version: "13.0"
      },
      {
        emoji: "\u{1F462}",
        description: "woman\u2019s boot",
        category: "Objects",
        aliases: ["boot"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F451}",
        description: "crown",
        category: "Objects",
        aliases: ["crown"],
        tags: ["king", "queen", "royal"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F452}",
        description: "woman\u2019s hat",
        category: "Objects",
        aliases: ["womans_hat"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F3A9}",
        description: "top hat",
        category: "Objects",
        aliases: ["tophat"],
        tags: ["hat", "classy"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F393}",
        description: "graduation cap",
        category: "Objects",
        aliases: ["mortar_board"],
        tags: ["education", "college", "university", "graduation"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F9E2}",
        description: "billed cap",
        category: "Objects",
        aliases: ["billed_cap"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1FA96}",
        description: "military helmet",
        category: "Objects",
        aliases: ["military_helmet"],
        tags: [],
        unicode_version: "13.0",
        ios_version: "14.0"
      },
      {
        emoji: "\u26D1\uFE0F",
        description: "rescue worker\u2019s helmet",
        category: "Objects",
        aliases: ["rescue_worker_helmet"],
        tags: [],
        unicode_version: "5.2",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F4FF}",
        description: "prayer beads",
        category: "Objects",
        aliases: ["prayer_beads"],
        tags: [],
        unicode_version: "8.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F484}",
        description: "lipstick",
        category: "Objects",
        aliases: ["lipstick"],
        tags: ["makeup"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F48D}",
        description: "ring",
        category: "Objects",
        aliases: ["ring"],
        tags: ["wedding", "marriage", "engaged"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F48E}",
        description: "gem stone",
        category: "Objects",
        aliases: ["gem"],
        tags: ["diamond"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F507}",
        description: "muted speaker",
        category: "Objects",
        aliases: ["mute"],
        tags: ["sound", "volume"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F508}",
        description: "speaker low volume",
        category: "Objects",
        aliases: ["speaker"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F509}",
        description: "speaker medium volume",
        category: "Objects",
        aliases: ["sound"],
        tags: ["volume"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F50A}",
        description: "speaker high volume",
        category: "Objects",
        aliases: ["loud_sound"],
        tags: ["volume"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F4E2}",
        description: "loudspeaker",
        category: "Objects",
        aliases: ["loudspeaker"],
        tags: ["announcement"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F4E3}",
        description: "megaphone",
        category: "Objects",
        aliases: ["mega"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F4EF}",
        description: "postal horn",
        category: "Objects",
        aliases: ["postal_horn"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F514}",
        description: "bell",
        category: "Objects",
        aliases: ["bell"],
        tags: ["sound", "notification"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F515}",
        description: "bell with slash",
        category: "Objects",
        aliases: ["no_bell"],
        tags: ["volume", "off"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F3BC}",
        description: "musical score",
        category: "Objects",
        aliases: ["musical_score"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F3B5}",
        description: "musical note",
        category: "Objects",
        aliases: ["musical_note"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F3B6}",
        description: "musical notes",
        category: "Objects",
        aliases: ["notes"],
        tags: ["music"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F399}\uFE0F",
        description: "studio microphone",
        category: "Objects",
        aliases: ["studio_microphone"],
        tags: ["podcast"],
        unicode_version: "7.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F39A}\uFE0F",
        description: "level slider",
        category: "Objects",
        aliases: ["level_slider"],
        tags: [],
        unicode_version: "7.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F39B}\uFE0F",
        description: "control knobs",
        category: "Objects",
        aliases: ["control_knobs"],
        tags: [],
        unicode_version: "7.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F3A4}",
        description: "microphone",
        category: "Objects",
        aliases: ["microphone"],
        tags: ["sing"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F3A7}",
        description: "headphone",
        category: "Objects",
        aliases: ["headphones"],
        tags: ["music", "earphones"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F4FB}",
        description: "radio",
        category: "Objects",
        aliases: ["radio"],
        tags: ["podcast"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F3B7}",
        description: "saxophone",
        category: "Objects",
        aliases: ["saxophone"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1FA97}",
        description: "accordion",
        category: "Objects",
        aliases: ["accordion"],
        tags: [],
        unicode_version: "13.0",
        ios_version: "14.0"
      },
      {
        emoji: "\u{1F3B8}",
        description: "guitar",
        category: "Objects",
        aliases: ["guitar"],
        tags: ["rock"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F3B9}",
        description: "musical keyboard",
        category: "Objects",
        aliases: ["musical_keyboard"],
        tags: ["piano"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F3BA}",
        description: "trumpet",
        category: "Objects",
        aliases: ["trumpet"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F3BB}",
        description: "violin",
        category: "Objects",
        aliases: ["violin"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1FA95}",
        description: "banjo",
        category: "Objects",
        aliases: ["banjo"],
        tags: [],
        unicode_version: "12.0",
        ios_version: "13.0"
      },
      {
        emoji: "\u{1F941}",
        description: "drum",
        category: "Objects",
        aliases: ["drum"],
        tags: [],
        unicode_version: "",
        ios_version: "10.2"
      },
      {
        emoji: "\u{1FA98}",
        description: "long drum",
        category: "Objects",
        aliases: ["long_drum"],
        tags: [],
        unicode_version: "13.0",
        ios_version: "14.0"
      },
      {
        emoji: "\u{1F4F1}",
        description: "mobile phone",
        category: "Objects",
        aliases: ["iphone"],
        tags: ["smartphone", "mobile"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F4F2}",
        description: "mobile phone with arrow",
        category: "Objects",
        aliases: ["calling"],
        tags: ["call", "incoming"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u260E\uFE0F",
        description: "telephone",
        category: "Objects",
        aliases: ["phone", "telephone"],
        tags: [],
        unicode_version: "",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F4DE}",
        description: "telephone receiver",
        category: "Objects",
        aliases: ["telephone_receiver"],
        tags: ["phone", "call"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F4DF}",
        description: "pager",
        category: "Objects",
        aliases: ["pager"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F4E0}",
        description: "fax machine",
        category: "Objects",
        aliases: ["fax"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F50B}",
        description: "battery",
        category: "Objects",
        aliases: ["battery"],
        tags: ["power"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F50C}",
        description: "electric plug",
        category: "Objects",
        aliases: ["electric_plug"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F4BB}",
        description: "laptop",
        category: "Objects",
        aliases: ["computer"],
        tags: ["desktop", "screen"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F5A5}\uFE0F",
        description: "desktop computer",
        category: "Objects",
        aliases: ["desktop_computer"],
        tags: [],
        unicode_version: "7.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F5A8}\uFE0F",
        description: "printer",
        category: "Objects",
        aliases: ["printer"],
        tags: [],
        unicode_version: "7.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u2328\uFE0F",
        description: "keyboard",
        category: "Objects",
        aliases: ["keyboard"],
        tags: [],
        unicode_version: "",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F5B1}\uFE0F",
        description: "computer mouse",
        category: "Objects",
        aliases: ["computer_mouse"],
        tags: [],
        unicode_version: "7.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F5B2}\uFE0F",
        description: "trackball",
        category: "Objects",
        aliases: ["trackball"],
        tags: [],
        unicode_version: "7.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F4BD}",
        description: "computer disk",
        category: "Objects",
        aliases: ["minidisc"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F4BE}",
        description: "floppy disk",
        category: "Objects",
        aliases: ["floppy_disk"],
        tags: ["save"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F4BF}",
        description: "optical disk",
        category: "Objects",
        aliases: ["cd"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F4C0}",
        description: "dvd",
        category: "Objects",
        aliases: ["dvd"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F9EE}",
        description: "abacus",
        category: "Objects",
        aliases: ["abacus"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F3A5}",
        description: "movie camera",
        category: "Objects",
        aliases: ["movie_camera"],
        tags: ["film", "video"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F39E}\uFE0F",
        description: "film frames",
        category: "Objects",
        aliases: ["film_strip"],
        tags: [],
        unicode_version: "7.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F4FD}\uFE0F",
        description: "film projector",
        category: "Objects",
        aliases: ["film_projector"],
        tags: [],
        unicode_version: "7.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F3AC}",
        description: "clapper board",
        category: "Objects",
        aliases: ["clapper"],
        tags: ["film"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F4FA}",
        description: "television",
        category: "Objects",
        aliases: ["tv"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F4F7}",
        description: "camera",
        category: "Objects",
        aliases: ["camera"],
        tags: ["photo"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F4F8}",
        description: "camera with flash",
        category: "Objects",
        aliases: ["camera_flash"],
        tags: ["photo"],
        unicode_version: "7.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F4F9}",
        description: "video camera",
        category: "Objects",
        aliases: ["video_camera"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F4FC}",
        description: "videocassette",
        category: "Objects",
        aliases: ["vhs"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F50D}",
        description: "magnifying glass tilted left",
        category: "Objects",
        aliases: ["mag"],
        tags: ["search", "zoom"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F50E}",
        description: "magnifying glass tilted right",
        category: "Objects",
        aliases: ["mag_right"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F56F}\uFE0F",
        description: "candle",
        category: "Objects",
        aliases: ["candle"],
        tags: [],
        unicode_version: "7.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F4A1}",
        description: "light bulb",
        category: "Objects",
        aliases: ["bulb"],
        tags: ["idea", "light"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F526}",
        description: "flashlight",
        category: "Objects",
        aliases: ["flashlight"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F3EE}",
        description: "red paper lantern",
        category: "Objects",
        aliases: ["izakaya_lantern", "lantern"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1FA94}",
        description: "diya lamp",
        category: "Objects",
        aliases: ["diya_lamp"],
        tags: [],
        unicode_version: "12.0",
        ios_version: "13.0"
      },
      {
        emoji: "\u{1F4D4}",
        description: "notebook with decorative cover",
        category: "Objects",
        aliases: ["notebook_with_decorative_cover"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F4D5}",
        description: "closed book",
        category: "Objects",
        aliases: ["closed_book"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F4D6}",
        description: "open book",
        category: "Objects",
        aliases: ["book", "open_book"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F4D7}",
        description: "green book",
        category: "Objects",
        aliases: ["green_book"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F4D8}",
        description: "blue book",
        category: "Objects",
        aliases: ["blue_book"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F4D9}",
        description: "orange book",
        category: "Objects",
        aliases: ["orange_book"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F4DA}",
        description: "books",
        category: "Objects",
        aliases: ["books"],
        tags: ["library"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F4D3}",
        description: "notebook",
        category: "Objects",
        aliases: ["notebook"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F4D2}",
        description: "ledger",
        category: "Objects",
        aliases: ["ledger"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F4C3}",
        description: "page with curl",
        category: "Objects",
        aliases: ["page_with_curl"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F4DC}",
        description: "scroll",
        category: "Objects",
        aliases: ["scroll"],
        tags: ["document"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F4C4}",
        description: "page facing up",
        category: "Objects",
        aliases: ["page_facing_up"],
        tags: ["document"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F4F0}",
        description: "newspaper",
        category: "Objects",
        aliases: ["newspaper"],
        tags: ["press"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F5DE}\uFE0F",
        description: "rolled-up newspaper",
        category: "Objects",
        aliases: ["newspaper_roll"],
        tags: ["press"],
        unicode_version: "7.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F4D1}",
        description: "bookmark tabs",
        category: "Objects",
        aliases: ["bookmark_tabs"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F516}",
        description: "bookmark",
        category: "Objects",
        aliases: ["bookmark"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F3F7}\uFE0F",
        description: "label",
        category: "Objects",
        aliases: ["label"],
        tags: ["tag"],
        unicode_version: "7.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F4B0}",
        description: "money bag",
        category: "Objects",
        aliases: ["moneybag"],
        tags: ["dollar", "cream"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1FA99}",
        description: "coin",
        category: "Objects",
        aliases: ["coin"],
        tags: [],
        unicode_version: "13.0",
        ios_version: "14.0"
      },
      {
        emoji: "\u{1F4B4}",
        description: "yen banknote",
        category: "Objects",
        aliases: ["yen"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F4B5}",
        description: "dollar banknote",
        category: "Objects",
        aliases: ["dollar"],
        tags: ["money"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F4B6}",
        description: "euro banknote",
        category: "Objects",
        aliases: ["euro"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F4B7}",
        description: "pound banknote",
        category: "Objects",
        aliases: ["pound"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F4B8}",
        description: "money with wings",
        category: "Objects",
        aliases: ["money_with_wings"],
        tags: ["dollar"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F4B3}",
        description: "credit card",
        category: "Objects",
        aliases: ["credit_card"],
        tags: ["subscription"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F9FE}",
        description: "receipt",
        category: "Objects",
        aliases: ["receipt"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F4B9}",
        description: "chart increasing with yen",
        category: "Objects",
        aliases: ["chart"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u2709\uFE0F",
        description: "envelope",
        category: "Objects",
        aliases: ["envelope"],
        tags: ["letter", "email"],
        unicode_version: "",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F4E7}",
        description: "e-mail",
        category: "Objects",
        aliases: ["email", "e-mail"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F4E8}",
        description: "incoming envelope",
        category: "Objects",
        aliases: ["incoming_envelope"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F4E9}",
        description: "envelope with arrow",
        category: "Objects",
        aliases: ["envelope_with_arrow"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F4E4}",
        description: "outbox tray",
        category: "Objects",
        aliases: ["outbox_tray"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F4E5}",
        description: "inbox tray",
        category: "Objects",
        aliases: ["inbox_tray"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F4E6}",
        description: "package",
        category: "Objects",
        aliases: ["package"],
        tags: ["shipping"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F4EB}",
        description: "closed mailbox with raised flag",
        category: "Objects",
        aliases: ["mailbox"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F4EA}",
        description: "closed mailbox with lowered flag",
        category: "Objects",
        aliases: ["mailbox_closed"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F4EC}",
        description: "open mailbox with raised flag",
        category: "Objects",
        aliases: ["mailbox_with_mail"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F4ED}",
        description: "open mailbox with lowered flag",
        category: "Objects",
        aliases: ["mailbox_with_no_mail"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F4EE}",
        description: "postbox",
        category: "Objects",
        aliases: ["postbox"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F5F3}\uFE0F",
        description: "ballot box with ballot",
        category: "Objects",
        aliases: ["ballot_box"],
        tags: [],
        unicode_version: "7.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u270F\uFE0F",
        description: "pencil",
        category: "Objects",
        aliases: ["pencil2"],
        tags: [],
        unicode_version: "",
        ios_version: "6.0"
      },
      {
        emoji: "\u2712\uFE0F",
        description: "black nib",
        category: "Objects",
        aliases: ["black_nib"],
        tags: [],
        unicode_version: "",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F58B}\uFE0F",
        description: "fountain pen",
        category: "Objects",
        aliases: ["fountain_pen"],
        tags: [],
        unicode_version: "7.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F58A}\uFE0F",
        description: "pen",
        category: "Objects",
        aliases: ["pen"],
        tags: [],
        unicode_version: "7.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F58C}\uFE0F",
        description: "paintbrush",
        category: "Objects",
        aliases: ["paintbrush"],
        tags: [],
        unicode_version: "7.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F58D}\uFE0F",
        description: "crayon",
        category: "Objects",
        aliases: ["crayon"],
        tags: [],
        unicode_version: "7.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F4DD}",
        description: "memo",
        category: "Objects",
        aliases: ["memo", "pencil"],
        tags: ["document", "note"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F4BC}",
        description: "briefcase",
        category: "Objects",
        aliases: ["briefcase"],
        tags: ["business"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F4C1}",
        description: "file folder",
        category: "Objects",
        aliases: ["file_folder"],
        tags: ["directory"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F4C2}",
        description: "open file folder",
        category: "Objects",
        aliases: ["open_file_folder"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F5C2}\uFE0F",
        description: "card index dividers",
        category: "Objects",
        aliases: ["card_index_dividers"],
        tags: [],
        unicode_version: "7.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F4C5}",
        description: "calendar",
        category: "Objects",
        aliases: ["date"],
        tags: ["calendar", "schedule"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F4C6}",
        description: "tear-off calendar",
        category: "Objects",
        aliases: ["calendar"],
        tags: ["schedule"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F5D2}\uFE0F",
        description: "spiral notepad",
        category: "Objects",
        aliases: ["spiral_notepad"],
        tags: [],
        unicode_version: "7.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F5D3}\uFE0F",
        description: "spiral calendar",
        category: "Objects",
        aliases: ["spiral_calendar"],
        tags: [],
        unicode_version: "7.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F4C7}",
        description: "card index",
        category: "Objects",
        aliases: ["card_index"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F4C8}",
        description: "chart increasing",
        category: "Objects",
        aliases: ["chart_with_upwards_trend"],
        tags: ["graph", "metrics"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F4C9}",
        description: "chart decreasing",
        category: "Objects",
        aliases: ["chart_with_downwards_trend"],
        tags: ["graph", "metrics"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F4CA}",
        description: "bar chart",
        category: "Objects",
        aliases: ["bar_chart"],
        tags: ["stats", "metrics"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F4CB}",
        description: "clipboard",
        category: "Objects",
        aliases: ["clipboard"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F4CC}",
        description: "pushpin",
        category: "Objects",
        aliases: ["pushpin"],
        tags: ["location"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F4CD}",
        description: "round pushpin",
        category: "Objects",
        aliases: ["round_pushpin"],
        tags: ["location"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F4CE}",
        description: "paperclip",
        category: "Objects",
        aliases: ["paperclip"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F587}\uFE0F",
        description: "linked paperclips",
        category: "Objects",
        aliases: ["paperclips"],
        tags: [],
        unicode_version: "7.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F4CF}",
        description: "straight ruler",
        category: "Objects",
        aliases: ["straight_ruler"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F4D0}",
        description: "triangular ruler",
        category: "Objects",
        aliases: ["triangular_ruler"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u2702\uFE0F",
        description: "scissors",
        category: "Objects",
        aliases: ["scissors"],
        tags: ["cut"],
        unicode_version: "",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F5C3}\uFE0F",
        description: "card file box",
        category: "Objects",
        aliases: ["card_file_box"],
        tags: [],
        unicode_version: "7.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F5C4}\uFE0F",
        description: "file cabinet",
        category: "Objects",
        aliases: ["file_cabinet"],
        tags: [],
        unicode_version: "7.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F5D1}\uFE0F",
        description: "wastebasket",
        category: "Objects",
        aliases: ["wastebasket"],
        tags: ["trash"],
        unicode_version: "7.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F512}",
        description: "locked",
        category: "Objects",
        aliases: ["lock"],
        tags: ["security", "private"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F513}",
        description: "unlocked",
        category: "Objects",
        aliases: ["unlock"],
        tags: ["security"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F50F}",
        description: "locked with pen",
        category: "Objects",
        aliases: ["lock_with_ink_pen"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F510}",
        description: "locked with key",
        category: "Objects",
        aliases: ["closed_lock_with_key"],
        tags: ["security"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F511}",
        description: "key",
        category: "Objects",
        aliases: ["key"],
        tags: ["lock", "password"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F5DD}\uFE0F",
        description: "old key",
        category: "Objects",
        aliases: ["old_key"],
        tags: [],
        unicode_version: "7.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F528}",
        description: "hammer",
        category: "Objects",
        aliases: ["hammer"],
        tags: ["tool"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1FA93}",
        description: "axe",
        category: "Objects",
        aliases: ["axe"],
        tags: [],
        unicode_version: "12.0",
        ios_version: "13.0"
      },
      {
        emoji: "\u26CF\uFE0F",
        description: "pick",
        category: "Objects",
        aliases: ["pick"],
        tags: [],
        unicode_version: "5.2",
        ios_version: "9.1"
      },
      {
        emoji: "\u2692\uFE0F",
        description: "hammer and pick",
        category: "Objects",
        aliases: ["hammer_and_pick"],
        tags: [],
        unicode_version: "4.1",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F6E0}\uFE0F",
        description: "hammer and wrench",
        category: "Objects",
        aliases: ["hammer_and_wrench"],
        tags: [],
        unicode_version: "7.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F5E1}\uFE0F",
        description: "dagger",
        category: "Objects",
        aliases: ["dagger"],
        tags: [],
        unicode_version: "7.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u2694\uFE0F",
        description: "crossed swords",
        category: "Objects",
        aliases: ["crossed_swords"],
        tags: [],
        unicode_version: "4.1",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F52B}",
        description: "water pistol",
        category: "Objects",
        aliases: ["gun"],
        tags: ["shoot", "weapon"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1FA83}",
        description: "boomerang",
        category: "Objects",
        aliases: ["boomerang"],
        tags: [],
        unicode_version: "13.0",
        ios_version: "14.0"
      },
      {
        emoji: "\u{1F3F9}",
        description: "bow and arrow",
        category: "Objects",
        aliases: ["bow_and_arrow"],
        tags: ["archery"],
        unicode_version: "8.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F6E1}\uFE0F",
        description: "shield",
        category: "Objects",
        aliases: ["shield"],
        tags: [],
        unicode_version: "7.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1FA9A}",
        description: "carpentry saw",
        category: "Objects",
        aliases: ["carpentry_saw"],
        tags: [],
        unicode_version: "13.0",
        ios_version: "14.0"
      },
      {
        emoji: "\u{1F527}",
        description: "wrench",
        category: "Objects",
        aliases: ["wrench"],
        tags: ["tool"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1FA9B}",
        description: "screwdriver",
        category: "Objects",
        aliases: ["screwdriver"],
        tags: [],
        unicode_version: "13.0",
        ios_version: "14.0"
      },
      {
        emoji: "\u{1F529}",
        description: "nut and bolt",
        category: "Objects",
        aliases: ["nut_and_bolt"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u2699\uFE0F",
        description: "gear",
        category: "Objects",
        aliases: ["gear"],
        tags: [],
        unicode_version: "4.1",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F5DC}\uFE0F",
        description: "clamp",
        category: "Objects",
        aliases: ["clamp"],
        tags: [],
        unicode_version: "7.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u2696\uFE0F",
        description: "balance scale",
        category: "Objects",
        aliases: ["balance_scale"],
        tags: [],
        unicode_version: "4.1",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F9AF}",
        description: "white cane",
        category: "Objects",
        aliases: ["probing_cane"],
        tags: [],
        unicode_version: "12.0",
        ios_version: "13.0"
      },
      {
        emoji: "\u{1F517}",
        description: "link",
        category: "Objects",
        aliases: ["link"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u26D3\uFE0F",
        description: "chains",
        category: "Objects",
        aliases: ["chains"],
        tags: [],
        unicode_version: "5.2",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1FA9D}",
        description: "hook",
        category: "Objects",
        aliases: ["hook"],
        tags: [],
        unicode_version: "13.0",
        ios_version: "14.0"
      },
      {
        emoji: "\u{1F9F0}",
        description: "toolbox",
        category: "Objects",
        aliases: ["toolbox"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F9F2}",
        description: "magnet",
        category: "Objects",
        aliases: ["magnet"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1FA9C}",
        description: "ladder",
        category: "Objects",
        aliases: ["ladder"],
        tags: [],
        unicode_version: "13.0",
        ios_version: "14.0"
      },
      {
        emoji: "\u2697\uFE0F",
        description: "alembic",
        category: "Objects",
        aliases: ["alembic"],
        tags: [],
        unicode_version: "4.1",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F9EA}",
        description: "test tube",
        category: "Objects",
        aliases: ["test_tube"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F9EB}",
        description: "petri dish",
        category: "Objects",
        aliases: ["petri_dish"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F9EC}",
        description: "dna",
        category: "Objects",
        aliases: ["dna"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F52C}",
        description: "microscope",
        category: "Objects",
        aliases: ["microscope"],
        tags: ["science", "laboratory", "investigate"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F52D}",
        description: "telescope",
        category: "Objects",
        aliases: ["telescope"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F4E1}",
        description: "satellite antenna",
        category: "Objects",
        aliases: ["satellite"],
        tags: ["signal"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F489}",
        description: "syringe",
        category: "Objects",
        aliases: ["syringe"],
        tags: ["health", "hospital", "needle"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1FA78}",
        description: "drop of blood",
        category: "Objects",
        aliases: ["drop_of_blood"],
        tags: [],
        unicode_version: "12.0",
        ios_version: "13.0"
      },
      {
        emoji: "\u{1F48A}",
        description: "pill",
        category: "Objects",
        aliases: ["pill"],
        tags: ["health", "medicine"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1FA79}",
        description: "adhesive bandage",
        category: "Objects",
        aliases: ["adhesive_bandage"],
        tags: [],
        unicode_version: "12.0",
        ios_version: "13.0"
      },
      {
        emoji: "\u{1FA7A}",
        description: "stethoscope",
        category: "Objects",
        aliases: ["stethoscope"],
        tags: [],
        unicode_version: "12.0",
        ios_version: "13.0"
      },
      {
        emoji: "\u{1F6AA}",
        description: "door",
        category: "Objects",
        aliases: ["door"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F6D7}",
        description: "elevator",
        category: "Objects",
        aliases: ["elevator"],
        tags: [],
        unicode_version: "13.0",
        ios_version: "14.0"
      },
      {
        emoji: "\u{1FA9E}",
        description: "mirror",
        category: "Objects",
        aliases: ["mirror"],
        tags: [],
        unicode_version: "13.0",
        ios_version: "14.0"
      },
      {
        emoji: "\u{1FA9F}",
        description: "window",
        category: "Objects",
        aliases: ["window"],
        tags: [],
        unicode_version: "13.0",
        ios_version: "14.0"
      },
      {
        emoji: "\u{1F6CF}\uFE0F",
        description: "bed",
        category: "Objects",
        aliases: ["bed"],
        tags: [],
        unicode_version: "7.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F6CB}\uFE0F",
        description: "couch and lamp",
        category: "Objects",
        aliases: ["couch_and_lamp"],
        tags: [],
        unicode_version: "7.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1FA91}",
        description: "chair",
        category: "Objects",
        aliases: ["chair"],
        tags: [],
        unicode_version: "12.0",
        ios_version: "13.0"
      },
      {
        emoji: "\u{1F6BD}",
        description: "toilet",
        category: "Objects",
        aliases: ["toilet"],
        tags: ["wc"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1FAA0}",
        description: "plunger",
        category: "Objects",
        aliases: ["plunger"],
        tags: [],
        unicode_version: "13.0",
        ios_version: "14.0"
      },
      {
        emoji: "\u{1F6BF}",
        description: "shower",
        category: "Objects",
        aliases: ["shower"],
        tags: ["bath"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F6C1}",
        description: "bathtub",
        category: "Objects",
        aliases: ["bathtub"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1FAA4}",
        description: "mouse trap",
        category: "Objects",
        aliases: ["mouse_trap"],
        tags: [],
        unicode_version: "13.0",
        ios_version: "14.0"
      },
      {
        emoji: "\u{1FA92}",
        description: "razor",
        category: "Objects",
        aliases: ["razor"],
        tags: [],
        unicode_version: "12.0",
        ios_version: "13.0"
      },
      {
        emoji: "\u{1F9F4}",
        description: "lotion bottle",
        category: "Objects",
        aliases: ["lotion_bottle"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F9F7}",
        description: "safety pin",
        category: "Objects",
        aliases: ["safety_pin"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F9F9}",
        description: "broom",
        category: "Objects",
        aliases: ["broom"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F9FA}",
        description: "basket",
        category: "Objects",
        aliases: ["basket"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F9FB}",
        description: "roll of paper",
        category: "Objects",
        aliases: ["roll_of_paper"],
        tags: ["toilet"],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1FAA3}",
        description: "bucket",
        category: "Objects",
        aliases: ["bucket"],
        tags: [],
        unicode_version: "13.0",
        ios_version: "14.0"
      },
      {
        emoji: "\u{1F9FC}",
        description: "soap",
        category: "Objects",
        aliases: ["soap"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1FAA5}",
        description: "toothbrush",
        category: "Objects",
        aliases: ["toothbrush"],
        tags: [],
        unicode_version: "13.0",
        ios_version: "14.0"
      },
      {
        emoji: "\u{1F9FD}",
        description: "sponge",
        category: "Objects",
        aliases: ["sponge"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F9EF}",
        description: "fire extinguisher",
        category: "Objects",
        aliases: ["fire_extinguisher"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F6D2}",
        description: "shopping cart",
        category: "Objects",
        aliases: ["shopping_cart"],
        tags: [],
        unicode_version: "9.0",
        ios_version: "10.2"
      },
      {
        emoji: "\u{1F6AC}",
        description: "cigarette",
        category: "Objects",
        aliases: ["smoking"],
        tags: ["cigarette"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u26B0\uFE0F",
        description: "coffin",
        category: "Objects",
        aliases: ["coffin"],
        tags: ["funeral"],
        unicode_version: "4.1",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1FAA6}",
        description: "headstone",
        category: "Objects",
        aliases: ["headstone"],
        tags: [],
        unicode_version: "13.0",
        ios_version: "14.0"
      },
      {
        emoji: "\u26B1\uFE0F",
        description: "funeral urn",
        category: "Objects",
        aliases: ["funeral_urn"],
        tags: [],
        unicode_version: "4.1",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F5FF}",
        description: "moai",
        category: "Objects",
        aliases: ["moyai"],
        tags: ["stone"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1FAA7}",
        description: "placard",
        category: "Objects",
        aliases: ["placard"],
        tags: [],
        unicode_version: "13.0",
        ios_version: "14.0"
      },
      {
        emoji: "\u{1F3E7}",
        description: "ATM sign",
        category: "Symbols",
        aliases: ["atm"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F6AE}",
        description: "litter in bin sign",
        category: "Symbols",
        aliases: ["put_litter_in_its_place"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F6B0}",
        description: "potable water",
        category: "Symbols",
        aliases: ["potable_water"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u267F",
        description: "wheelchair symbol",
        category: "Symbols",
        aliases: ["wheelchair"],
        tags: ["accessibility"],
        unicode_version: "4.1",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F6B9}",
        description: "men\u2019s room",
        category: "Symbols",
        aliases: ["mens"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F6BA}",
        description: "women\u2019s room",
        category: "Symbols",
        aliases: ["womens"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F6BB}",
        description: "restroom",
        category: "Symbols",
        aliases: ["restroom"],
        tags: ["toilet"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F6BC}",
        description: "baby symbol",
        category: "Symbols",
        aliases: ["baby_symbol"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F6BE}",
        description: "water closet",
        category: "Symbols",
        aliases: ["wc"],
        tags: ["toilet", "restroom"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F6C2}",
        description: "passport control",
        category: "Symbols",
        aliases: ["passport_control"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F6C3}",
        description: "customs",
        category: "Symbols",
        aliases: ["customs"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F6C4}",
        description: "baggage claim",
        category: "Symbols",
        aliases: ["baggage_claim"],
        tags: ["airport"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F6C5}",
        description: "left luggage",
        category: "Symbols",
        aliases: ["left_luggage"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u26A0\uFE0F",
        description: "warning",
        category: "Symbols",
        aliases: ["warning"],
        tags: ["wip"],
        unicode_version: "4.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F6B8}",
        description: "children crossing",
        category: "Symbols",
        aliases: ["children_crossing"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u26D4",
        description: "no entry",
        category: "Symbols",
        aliases: ["no_entry"],
        tags: ["limit"],
        unicode_version: "5.2",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F6AB}",
        description: "prohibited",
        category: "Symbols",
        aliases: ["no_entry_sign"],
        tags: ["block", "forbidden"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F6B3}",
        description: "no bicycles",
        category: "Symbols",
        aliases: ["no_bicycles"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F6AD}",
        description: "no smoking",
        category: "Symbols",
        aliases: ["no_smoking"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F6AF}",
        description: "no littering",
        category: "Symbols",
        aliases: ["do_not_litter"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F6B1}",
        description: "non-potable water",
        category: "Symbols",
        aliases: ["non-potable_water"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F6B7}",
        description: "no pedestrians",
        category: "Symbols",
        aliases: ["no_pedestrians"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F4F5}",
        description: "no mobile phones",
        category: "Symbols",
        aliases: ["no_mobile_phones"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F51E}",
        description: "no one under eighteen",
        category: "Symbols",
        aliases: ["underage"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u2622\uFE0F",
        description: "radioactive",
        category: "Symbols",
        aliases: ["radioactive"],
        tags: [],
        unicode_version: "",
        ios_version: "9.1"
      },
      {
        emoji: "\u2623\uFE0F",
        description: "biohazard",
        category: "Symbols",
        aliases: ["biohazard"],
        tags: [],
        unicode_version: "",
        ios_version: "9.1"
      },
      {
        emoji: "\u2B06\uFE0F",
        description: "up arrow",
        category: "Symbols",
        aliases: ["arrow_up"],
        tags: [],
        unicode_version: "4.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u2197\uFE0F",
        description: "up-right arrow",
        category: "Symbols",
        aliases: ["arrow_upper_right"],
        tags: [],
        unicode_version: "",
        ios_version: "6.0"
      },
      {
        emoji: "\u27A1\uFE0F",
        description: "right arrow",
        category: "Symbols",
        aliases: ["arrow_right"],
        tags: [],
        unicode_version: "",
        ios_version: "6.0"
      },
      {
        emoji: "\u2198\uFE0F",
        description: "down-right arrow",
        category: "Symbols",
        aliases: ["arrow_lower_right"],
        tags: [],
        unicode_version: "",
        ios_version: "6.0"
      },
      {
        emoji: "\u2B07\uFE0F",
        description: "down arrow",
        category: "Symbols",
        aliases: ["arrow_down"],
        tags: [],
        unicode_version: "4.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u2199\uFE0F",
        description: "down-left arrow",
        category: "Symbols",
        aliases: ["arrow_lower_left"],
        tags: [],
        unicode_version: "",
        ios_version: "6.0"
      },
      {
        emoji: "\u2B05\uFE0F",
        description: "left arrow",
        category: "Symbols",
        aliases: ["arrow_left"],
        tags: [],
        unicode_version: "4.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u2196\uFE0F",
        description: "up-left arrow",
        category: "Symbols",
        aliases: ["arrow_upper_left"],
        tags: [],
        unicode_version: "",
        ios_version: "6.0"
      },
      {
        emoji: "\u2195\uFE0F",
        description: "up-down arrow",
        category: "Symbols",
        aliases: ["arrow_up_down"],
        tags: [],
        unicode_version: "",
        ios_version: "6.0"
      },
      {
        emoji: "\u2194\uFE0F",
        description: "left-right arrow",
        category: "Symbols",
        aliases: ["left_right_arrow"],
        tags: [],
        unicode_version: "",
        ios_version: "6.0"
      },
      {
        emoji: "\u21A9\uFE0F",
        description: "right arrow curving left",
        category: "Symbols",
        aliases: ["leftwards_arrow_with_hook"],
        tags: ["return"],
        unicode_version: "",
        ios_version: "6.0"
      },
      {
        emoji: "\u21AA\uFE0F",
        description: "left arrow curving right",
        category: "Symbols",
        aliases: ["arrow_right_hook"],
        tags: [],
        unicode_version: "",
        ios_version: "6.0"
      },
      {
        emoji: "\u2934\uFE0F",
        description: "right arrow curving up",
        category: "Symbols",
        aliases: ["arrow_heading_up"],
        tags: [],
        unicode_version: "",
        ios_version: "6.0"
      },
      {
        emoji: "\u2935\uFE0F",
        description: "right arrow curving down",
        category: "Symbols",
        aliases: ["arrow_heading_down"],
        tags: [],
        unicode_version: "",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F503}",
        description: "clockwise vertical arrows",
        category: "Symbols",
        aliases: ["arrows_clockwise"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F504}",
        description: "counterclockwise arrows button",
        category: "Symbols",
        aliases: ["arrows_counterclockwise"],
        tags: ["sync"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F519}",
        description: "BACK arrow",
        category: "Symbols",
        aliases: ["back"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F51A}",
        description: "END arrow",
        category: "Symbols",
        aliases: ["end"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F51B}",
        description: "ON! arrow",
        category: "Symbols",
        aliases: ["on"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F51C}",
        description: "SOON arrow",
        category: "Symbols",
        aliases: ["soon"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F51D}",
        description: "TOP arrow",
        category: "Symbols",
        aliases: ["top"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F6D0}",
        description: "place of worship",
        category: "Symbols",
        aliases: ["place_of_worship"],
        tags: [],
        unicode_version: "8.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u269B\uFE0F",
        description: "atom symbol",
        category: "Symbols",
        aliases: ["atom_symbol"],
        tags: [],
        unicode_version: "4.1",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F549}\uFE0F",
        description: "om",
        category: "Symbols",
        aliases: ["om"],
        tags: [],
        unicode_version: "7.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u2721\uFE0F",
        description: "star of David",
        category: "Symbols",
        aliases: ["star_of_david"],
        tags: [],
        unicode_version: "",
        ios_version: "9.1"
      },
      {
        emoji: "\u2638\uFE0F",
        description: "wheel of dharma",
        category: "Symbols",
        aliases: ["wheel_of_dharma"],
        tags: [],
        unicode_version: "",
        ios_version: "9.1"
      },
      {
        emoji: "\u262F\uFE0F",
        description: "yin yang",
        category: "Symbols",
        aliases: ["yin_yang"],
        tags: [],
        unicode_version: "",
        ios_version: "9.1"
      },
      {
        emoji: "\u271D\uFE0F",
        description: "latin cross",
        category: "Symbols",
        aliases: ["latin_cross"],
        tags: [],
        unicode_version: "",
        ios_version: "9.1"
      },
      {
        emoji: "\u2626\uFE0F",
        description: "orthodox cross",
        category: "Symbols",
        aliases: ["orthodox_cross"],
        tags: [],
        unicode_version: "",
        ios_version: "9.1"
      },
      {
        emoji: "\u262A\uFE0F",
        description: "star and crescent",
        category: "Symbols",
        aliases: ["star_and_crescent"],
        tags: [],
        unicode_version: "",
        ios_version: "9.1"
      },
      {
        emoji: "\u262E\uFE0F",
        description: "peace symbol",
        category: "Symbols",
        aliases: ["peace_symbol"],
        tags: [],
        unicode_version: "",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F54E}",
        description: "menorah",
        category: "Symbols",
        aliases: ["menorah"],
        tags: [],
        unicode_version: "8.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F52F}",
        description: "dotted six-pointed star",
        category: "Symbols",
        aliases: ["six_pointed_star"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u2648",
        description: "Aries",
        category: "Symbols",
        aliases: ["aries"],
        tags: [],
        unicode_version: "",
        ios_version: "6.0"
      },
      {
        emoji: "\u2649",
        description: "Taurus",
        category: "Symbols",
        aliases: ["taurus"],
        tags: [],
        unicode_version: "",
        ios_version: "6.0"
      },
      {
        emoji: "\u264A",
        description: "Gemini",
        category: "Symbols",
        aliases: ["gemini"],
        tags: [],
        unicode_version: "",
        ios_version: "6.0"
      },
      {
        emoji: "\u264B",
        description: "Cancer",
        category: "Symbols",
        aliases: ["cancer"],
        tags: [],
        unicode_version: "",
        ios_version: "6.0"
      },
      {
        emoji: "\u264C",
        description: "Leo",
        category: "Symbols",
        aliases: ["leo"],
        tags: [],
        unicode_version: "",
        ios_version: "6.0"
      },
      {
        emoji: "\u264D",
        description: "Virgo",
        category: "Symbols",
        aliases: ["virgo"],
        tags: [],
        unicode_version: "",
        ios_version: "6.0"
      },
      {
        emoji: "\u264E",
        description: "Libra",
        category: "Symbols",
        aliases: ["libra"],
        tags: [],
        unicode_version: "",
        ios_version: "6.0"
      },
      {
        emoji: "\u264F",
        description: "Scorpio",
        category: "Symbols",
        aliases: ["scorpius"],
        tags: [],
        unicode_version: "",
        ios_version: "6.0"
      },
      {
        emoji: "\u2650",
        description: "Sagittarius",
        category: "Symbols",
        aliases: ["sagittarius"],
        tags: [],
        unicode_version: "",
        ios_version: "6.0"
      },
      {
        emoji: "\u2651",
        description: "Capricorn",
        category: "Symbols",
        aliases: ["capricorn"],
        tags: [],
        unicode_version: "",
        ios_version: "6.0"
      },
      {
        emoji: "\u2652",
        description: "Aquarius",
        category: "Symbols",
        aliases: ["aquarius"],
        tags: [],
        unicode_version: "",
        ios_version: "6.0"
      },
      {
        emoji: "\u2653",
        description: "Pisces",
        category: "Symbols",
        aliases: ["pisces"],
        tags: [],
        unicode_version: "",
        ios_version: "6.0"
      },
      {
        emoji: "\u26CE",
        description: "Ophiuchus",
        category: "Symbols",
        aliases: ["ophiuchus"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F500}",
        description: "shuffle tracks button",
        category: "Symbols",
        aliases: ["twisted_rightwards_arrows"],
        tags: ["shuffle"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F501}",
        description: "repeat button",
        category: "Symbols",
        aliases: ["repeat"],
        tags: ["loop"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F502}",
        description: "repeat single button",
        category: "Symbols",
        aliases: ["repeat_one"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u25B6\uFE0F",
        description: "play button",
        category: "Symbols",
        aliases: ["arrow_forward"],
        tags: [],
        unicode_version: "",
        ios_version: "6.0"
      },
      {
        emoji: "\u23E9",
        description: "fast-forward button",
        category: "Symbols",
        aliases: ["fast_forward"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u23ED\uFE0F",
        description: "next track button",
        category: "Symbols",
        aliases: ["next_track_button"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u23EF\uFE0F",
        description: "play or pause button",
        category: "Symbols",
        aliases: ["play_or_pause_button"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u25C0\uFE0F",
        description: "reverse button",
        category: "Symbols",
        aliases: ["arrow_backward"],
        tags: [],
        unicode_version: "",
        ios_version: "6.0"
      },
      {
        emoji: "\u23EA",
        description: "fast reverse button",
        category: "Symbols",
        aliases: ["rewind"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u23EE\uFE0F",
        description: "last track button",
        category: "Symbols",
        aliases: ["previous_track_button"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F53C}",
        description: "upwards button",
        category: "Symbols",
        aliases: ["arrow_up_small"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u23EB",
        description: "fast up button",
        category: "Symbols",
        aliases: ["arrow_double_up"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F53D}",
        description: "downwards button",
        category: "Symbols",
        aliases: ["arrow_down_small"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u23EC",
        description: "fast down button",
        category: "Symbols",
        aliases: ["arrow_double_down"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u23F8\uFE0F",
        description: "pause button",
        category: "Symbols",
        aliases: ["pause_button"],
        tags: [],
        unicode_version: "7.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u23F9\uFE0F",
        description: "stop button",
        category: "Symbols",
        aliases: ["stop_button"],
        tags: [],
        unicode_version: "7.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u23FA\uFE0F",
        description: "record button",
        category: "Symbols",
        aliases: ["record_button"],
        tags: [],
        unicode_version: "7.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u23CF\uFE0F",
        description: "eject button",
        category: "Symbols",
        aliases: ["eject_button"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F3A6}",
        description: "cinema",
        category: "Symbols",
        aliases: ["cinema"],
        tags: ["film", "movie"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F505}",
        description: "dim button",
        category: "Symbols",
        aliases: ["low_brightness"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F506}",
        description: "bright button",
        category: "Symbols",
        aliases: ["high_brightness"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F4F6}",
        description: "antenna bars",
        category: "Symbols",
        aliases: ["signal_strength"],
        tags: ["wifi"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F4F3}",
        description: "vibration mode",
        category: "Symbols",
        aliases: ["vibration_mode"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F4F4}",
        description: "mobile phone off",
        category: "Symbols",
        aliases: ["mobile_phone_off"],
        tags: ["mute", "off"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u2640\uFE0F",
        description: "female sign",
        category: "Symbols",
        aliases: ["female_sign"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u2642\uFE0F",
        description: "male sign",
        category: "Symbols",
        aliases: ["male_sign"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u26A7\uFE0F",
        description: "transgender symbol",
        category: "Symbols",
        aliases: ["transgender_symbol"],
        tags: [],
        unicode_version: "13.0",
        ios_version: "14.0"
      },
      {
        emoji: "\u2716\uFE0F",
        description: "multiply",
        category: "Symbols",
        aliases: ["heavy_multiplication_x"],
        tags: [],
        unicode_version: "",
        ios_version: "6.0"
      },
      {
        emoji: "\u2795",
        description: "plus",
        category: "Symbols",
        aliases: ["heavy_plus_sign"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u2796",
        description: "minus",
        category: "Symbols",
        aliases: ["heavy_minus_sign"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u2797",
        description: "divide",
        category: "Symbols",
        aliases: ["heavy_division_sign"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u267E\uFE0F",
        description: "infinity",
        category: "Symbols",
        aliases: ["infinity"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u203C\uFE0F",
        description: "double exclamation mark",
        category: "Symbols",
        aliases: ["bangbang"],
        tags: [],
        unicode_version: "",
        ios_version: "6.0"
      },
      {
        emoji: "\u2049\uFE0F",
        description: "exclamation question mark",
        category: "Symbols",
        aliases: ["interrobang"],
        tags: [],
        unicode_version: "3.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u2753",
        description: "red question mark",
        category: "Symbols",
        aliases: ["question"],
        tags: ["confused"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u2754",
        description: "white question mark",
        category: "Symbols",
        aliases: ["grey_question"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u2755",
        description: "white exclamation mark",
        category: "Symbols",
        aliases: ["grey_exclamation"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u2757",
        description: "red exclamation mark",
        category: "Symbols",
        aliases: ["exclamation", "heavy_exclamation_mark"],
        tags: ["bang"],
        unicode_version: "5.2",
        ios_version: "6.0"
      },
      {
        emoji: "\u3030\uFE0F",
        description: "wavy dash",
        category: "Symbols",
        aliases: ["wavy_dash"],
        tags: [],
        unicode_version: "",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F4B1}",
        description: "currency exchange",
        category: "Symbols",
        aliases: ["currency_exchange"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F4B2}",
        description: "heavy dollar sign",
        category: "Symbols",
        aliases: ["heavy_dollar_sign"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u2695\uFE0F",
        description: "medical symbol",
        category: "Symbols",
        aliases: ["medical_symbol"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u267B\uFE0F",
        description: "recycling symbol",
        category: "Symbols",
        aliases: ["recycle"],
        tags: ["environment", "green"],
        unicode_version: "3.2",
        ios_version: "6.0"
      },
      {
        emoji: "\u269C\uFE0F",
        description: "fleur-de-lis",
        category: "Symbols",
        aliases: ["fleur_de_lis"],
        tags: [],
        unicode_version: "4.1",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F531}",
        description: "trident emblem",
        category: "Symbols",
        aliases: ["trident"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F4DB}",
        description: "name badge",
        category: "Symbols",
        aliases: ["name_badge"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F530}",
        description: "Japanese symbol for beginner",
        category: "Symbols",
        aliases: ["beginner"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u2B55",
        description: "hollow red circle",
        category: "Symbols",
        aliases: ["o"],
        tags: [],
        unicode_version: "5.2",
        ios_version: "6.0"
      },
      {
        emoji: "\u2705",
        description: "check mark button",
        category: "Symbols",
        aliases: ["white_check_mark"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u2611\uFE0F",
        description: "check box with check",
        category: "Symbols",
        aliases: ["ballot_box_with_check"],
        tags: [],
        unicode_version: "",
        ios_version: "6.0"
      },
      {
        emoji: "\u2714\uFE0F",
        description: "check mark",
        category: "Symbols",
        aliases: ["heavy_check_mark"],
        tags: [],
        unicode_version: "",
        ios_version: "6.0"
      },
      {
        emoji: "\u274C",
        description: "cross mark",
        category: "Symbols",
        aliases: ["x"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u274E",
        description: "cross mark button",
        category: "Symbols",
        aliases: ["negative_squared_cross_mark"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u27B0",
        description: "curly loop",
        category: "Symbols",
        aliases: ["curly_loop"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u27BF",
        description: "double curly loop",
        category: "Symbols",
        aliases: ["loop"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u303D\uFE0F",
        description: "part alternation mark",
        category: "Symbols",
        aliases: ["part_alternation_mark"],
        tags: [],
        unicode_version: "3.2",
        ios_version: "6.0"
      },
      {
        emoji: "\u2733\uFE0F",
        description: "eight-spoked asterisk",
        category: "Symbols",
        aliases: ["eight_spoked_asterisk"],
        tags: [],
        unicode_version: "",
        ios_version: "6.0"
      },
      {
        emoji: "\u2734\uFE0F",
        description: "eight-pointed star",
        category: "Symbols",
        aliases: ["eight_pointed_black_star"],
        tags: [],
        unicode_version: "",
        ios_version: "6.0"
      },
      {
        emoji: "\u2747\uFE0F",
        description: "sparkle",
        category: "Symbols",
        aliases: ["sparkle"],
        tags: [],
        unicode_version: "",
        ios_version: "6.0"
      },
      {
        emoji: "\xA9\uFE0F",
        description: "copyright",
        category: "Symbols",
        aliases: ["copyright"],
        tags: [],
        unicode_version: "",
        ios_version: "6.0"
      },
      {
        emoji: "\xAE\uFE0F",
        description: "registered",
        category: "Symbols",
        aliases: ["registered"],
        tags: [],
        unicode_version: "",
        ios_version: "6.0"
      },
      {
        emoji: "\u2122\uFE0F",
        description: "trade mark",
        category: "Symbols",
        aliases: ["tm"],
        tags: ["trademark"],
        unicode_version: "",
        ios_version: "6.0"
      },
      {
        emoji: "#\uFE0F\u20E3",
        description: "keycap: #",
        category: "Symbols",
        aliases: ["hash"],
        tags: ["number"],
        unicode_version: "",
        ios_version: "6.0"
      },
      {
        emoji: "*\uFE0F\u20E3",
        description: "keycap: *",
        category: "Symbols",
        aliases: ["asterisk"],
        tags: [],
        unicode_version: "",
        ios_version: "9.1"
      },
      {
        emoji: "0\uFE0F\u20E3",
        description: "keycap: 0",
        category: "Symbols",
        aliases: ["zero"],
        tags: [],
        unicode_version: "",
        ios_version: "6.0"
      },
      {
        emoji: "1\uFE0F\u20E3",
        description: "keycap: 1",
        category: "Symbols",
        aliases: ["one"],
        tags: [],
        unicode_version: "",
        ios_version: "6.0"
      },
      {
        emoji: "2\uFE0F\u20E3",
        description: "keycap: 2",
        category: "Symbols",
        aliases: ["two"],
        tags: [],
        unicode_version: "",
        ios_version: "6.0"
      },
      {
        emoji: "3\uFE0F\u20E3",
        description: "keycap: 3",
        category: "Symbols",
        aliases: ["three"],
        tags: [],
        unicode_version: "",
        ios_version: "6.0"
      },
      {
        emoji: "4\uFE0F\u20E3",
        description: "keycap: 4",
        category: "Symbols",
        aliases: ["four"],
        tags: [],
        unicode_version: "",
        ios_version: "6.0"
      },
      {
        emoji: "5\uFE0F\u20E3",
        description: "keycap: 5",
        category: "Symbols",
        aliases: ["five"],
        tags: [],
        unicode_version: "",
        ios_version: "6.0"
      },
      {
        emoji: "6\uFE0F\u20E3",
        description: "keycap: 6",
        category: "Symbols",
        aliases: ["six"],
        tags: [],
        unicode_version: "",
        ios_version: "6.0"
      },
      {
        emoji: "7\uFE0F\u20E3",
        description: "keycap: 7",
        category: "Symbols",
        aliases: ["seven"],
        tags: [],
        unicode_version: "",
        ios_version: "6.0"
      },
      {
        emoji: "8\uFE0F\u20E3",
        description: "keycap: 8",
        category: "Symbols",
        aliases: ["eight"],
        tags: [],
        unicode_version: "",
        ios_version: "6.0"
      },
      {
        emoji: "9\uFE0F\u20E3",
        description: "keycap: 9",
        category: "Symbols",
        aliases: ["nine"],
        tags: [],
        unicode_version: "",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F51F}",
        description: "keycap: 10",
        category: "Symbols",
        aliases: ["keycap_ten"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F520}",
        description: "input latin uppercase",
        category: "Symbols",
        aliases: ["capital_abcd"],
        tags: ["letters"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F521}",
        description: "input latin lowercase",
        category: "Symbols",
        aliases: ["abcd"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F522}",
        description: "input numbers",
        category: "Symbols",
        aliases: ["1234"],
        tags: ["numbers"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F523}",
        description: "input symbols",
        category: "Symbols",
        aliases: ["symbols"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F524}",
        description: "input latin letters",
        category: "Symbols",
        aliases: ["abc"],
        tags: ["alphabet"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F170}\uFE0F",
        description: "A button (blood type)",
        category: "Symbols",
        aliases: ["a"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F18E}",
        description: "AB button (blood type)",
        category: "Symbols",
        aliases: ["ab"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F171}\uFE0F",
        description: "B button (blood type)",
        category: "Symbols",
        aliases: ["b"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F191}",
        description: "CL button",
        category: "Symbols",
        aliases: ["cl"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F192}",
        description: "COOL button",
        category: "Symbols",
        aliases: ["cool"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F193}",
        description: "FREE button",
        category: "Symbols",
        aliases: ["free"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u2139\uFE0F",
        description: "information",
        category: "Symbols",
        aliases: ["information_source"],
        tags: [],
        unicode_version: "3.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F194}",
        description: "ID button",
        category: "Symbols",
        aliases: ["id"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u24C2\uFE0F",
        description: "circled M",
        category: "Symbols",
        aliases: ["m"],
        tags: [],
        unicode_version: "",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F195}",
        description: "NEW button",
        category: "Symbols",
        aliases: ["new"],
        tags: ["fresh"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F196}",
        description: "NG button",
        category: "Symbols",
        aliases: ["ng"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F17E}\uFE0F",
        description: "O button (blood type)",
        category: "Symbols",
        aliases: ["o2"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F197}",
        description: "OK button",
        category: "Symbols",
        aliases: ["ok"],
        tags: ["yes"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F17F}\uFE0F",
        description: "P button",
        category: "Symbols",
        aliases: ["parking"],
        tags: [],
        unicode_version: "5.2",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F198}",
        description: "SOS button",
        category: "Symbols",
        aliases: ["sos"],
        tags: ["help", "emergency"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F199}",
        description: "UP! button",
        category: "Symbols",
        aliases: ["up"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F19A}",
        description: "VS button",
        category: "Symbols",
        aliases: ["vs"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F201}",
        description: "Japanese \u201Chere\u201D button",
        category: "Symbols",
        aliases: ["koko"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F202}\uFE0F",
        description: "Japanese \u201Cservice charge\u201D button",
        category: "Symbols",
        aliases: ["sa"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F237}\uFE0F",
        description: "Japanese \u201Cmonthly amount\u201D button",
        category: "Symbols",
        aliases: ["u6708"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F236}",
        description: "Japanese \u201Cnot free of charge\u201D button",
        category: "Symbols",
        aliases: ["u6709"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F22F}",
        description: "Japanese \u201Creserved\u201D button",
        category: "Symbols",
        aliases: ["u6307"],
        tags: [],
        unicode_version: "",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F250}",
        description: "Japanese \u201Cbargain\u201D button",
        category: "Symbols",
        aliases: ["ideograph_advantage"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F239}",
        description: "Japanese \u201Cdiscount\u201D button",
        category: "Symbols",
        aliases: ["u5272"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F21A}",
        description: "Japanese \u201Cfree of charge\u201D button",
        category: "Symbols",
        aliases: ["u7121"],
        tags: [],
        unicode_version: "",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F232}",
        description: "Japanese \u201Cprohibited\u201D button",
        category: "Symbols",
        aliases: ["u7981"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F251}",
        description: "Japanese \u201Cacceptable\u201D button",
        category: "Symbols",
        aliases: ["accept"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F238}",
        description: "Japanese \u201Capplication\u201D button",
        category: "Symbols",
        aliases: ["u7533"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F234}",
        description: "Japanese \u201Cpassing grade\u201D button",
        category: "Symbols",
        aliases: ["u5408"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F233}",
        description: "Japanese \u201Cvacancy\u201D button",
        category: "Symbols",
        aliases: ["u7a7a"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u3297\uFE0F",
        description: "Japanese \u201Ccongratulations\u201D button",
        category: "Symbols",
        aliases: ["congratulations"],
        tags: [],
        unicode_version: "",
        ios_version: "6.0"
      },
      {
        emoji: "\u3299\uFE0F",
        description: "Japanese \u201Csecret\u201D button",
        category: "Symbols",
        aliases: ["secret"],
        tags: [],
        unicode_version: "",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F23A}",
        description: "Japanese \u201Copen for business\u201D button",
        category: "Symbols",
        aliases: ["u55b6"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F235}",
        description: "Japanese \u201Cno vacancy\u201D button",
        category: "Symbols",
        aliases: ["u6e80"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F534}",
        description: "red circle",
        category: "Symbols",
        aliases: ["red_circle"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F7E0}",
        description: "orange circle",
        category: "Symbols",
        aliases: ["orange_circle"],
        tags: [],
        unicode_version: "12.0",
        ios_version: "13.0"
      },
      {
        emoji: "\u{1F7E1}",
        description: "yellow circle",
        category: "Symbols",
        aliases: ["yellow_circle"],
        tags: [],
        unicode_version: "12.0",
        ios_version: "13.0"
      },
      {
        emoji: "\u{1F7E2}",
        description: "green circle",
        category: "Symbols",
        aliases: ["green_circle"],
        tags: [],
        unicode_version: "12.0",
        ios_version: "13.0"
      },
      {
        emoji: "\u{1F535}",
        description: "blue circle",
        category: "Symbols",
        aliases: ["large_blue_circle"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F7E3}",
        description: "purple circle",
        category: "Symbols",
        aliases: ["purple_circle"],
        tags: [],
        unicode_version: "12.0",
        ios_version: "13.0"
      },
      {
        emoji: "\u{1F7E4}",
        description: "brown circle",
        category: "Symbols",
        aliases: ["brown_circle"],
        tags: [],
        unicode_version: "12.0",
        ios_version: "13.0"
      },
      {
        emoji: "\u26AB",
        description: "black circle",
        category: "Symbols",
        aliases: ["black_circle"],
        tags: [],
        unicode_version: "4.1",
        ios_version: "6.0"
      },
      {
        emoji: "\u26AA",
        description: "white circle",
        category: "Symbols",
        aliases: ["white_circle"],
        tags: [],
        unicode_version: "4.1",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F7E5}",
        description: "red square",
        category: "Symbols",
        aliases: ["red_square"],
        tags: [],
        unicode_version: "12.0",
        ios_version: "13.0"
      },
      {
        emoji: "\u{1F7E7}",
        description: "orange square",
        category: "Symbols",
        aliases: ["orange_square"],
        tags: [],
        unicode_version: "12.0",
        ios_version: "13.0"
      },
      {
        emoji: "\u{1F7E8}",
        description: "yellow square",
        category: "Symbols",
        aliases: ["yellow_square"],
        tags: [],
        unicode_version: "12.0",
        ios_version: "13.0"
      },
      {
        emoji: "\u{1F7E9}",
        description: "green square",
        category: "Symbols",
        aliases: ["green_square"],
        tags: [],
        unicode_version: "12.0",
        ios_version: "13.0"
      },
      {
        emoji: "\u{1F7E6}",
        description: "blue square",
        category: "Symbols",
        aliases: ["blue_square"],
        tags: [],
        unicode_version: "12.0",
        ios_version: "13.0"
      },
      {
        emoji: "\u{1F7EA}",
        description: "purple square",
        category: "Symbols",
        aliases: ["purple_square"],
        tags: [],
        unicode_version: "12.0",
        ios_version: "13.0"
      },
      {
        emoji: "\u{1F7EB}",
        description: "brown square",
        category: "Symbols",
        aliases: ["brown_square"],
        tags: [],
        unicode_version: "12.0",
        ios_version: "13.0"
      },
      {
        emoji: "\u2B1B",
        description: "black large square",
        category: "Symbols",
        aliases: ["black_large_square"],
        tags: [],
        unicode_version: "5.1",
        ios_version: "6.0"
      },
      {
        emoji: "\u2B1C",
        description: "white large square",
        category: "Symbols",
        aliases: ["white_large_square"],
        tags: [],
        unicode_version: "5.1",
        ios_version: "6.0"
      },
      {
        emoji: "\u25FC\uFE0F",
        description: "black medium square",
        category: "Symbols",
        aliases: ["black_medium_square"],
        tags: [],
        unicode_version: "3.2",
        ios_version: "6.0"
      },
      {
        emoji: "\u25FB\uFE0F",
        description: "white medium square",
        category: "Symbols",
        aliases: ["white_medium_square"],
        tags: [],
        unicode_version: "3.2",
        ios_version: "6.0"
      },
      {
        emoji: "\u25FE",
        description: "black medium-small square",
        category: "Symbols",
        aliases: ["black_medium_small_square"],
        tags: [],
        unicode_version: "3.2",
        ios_version: "6.0"
      },
      {
        emoji: "\u25FD",
        description: "white medium-small square",
        category: "Symbols",
        aliases: ["white_medium_small_square"],
        tags: [],
        unicode_version: "3.2",
        ios_version: "6.0"
      },
      {
        emoji: "\u25AA\uFE0F",
        description: "black small square",
        category: "Symbols",
        aliases: ["black_small_square"],
        tags: [],
        unicode_version: "",
        ios_version: "6.0"
      },
      {
        emoji: "\u25AB\uFE0F",
        description: "white small square",
        category: "Symbols",
        aliases: ["white_small_square"],
        tags: [],
        unicode_version: "",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F536}",
        description: "large orange diamond",
        category: "Symbols",
        aliases: ["large_orange_diamond"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F537}",
        description: "large blue diamond",
        category: "Symbols",
        aliases: ["large_blue_diamond"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F538}",
        description: "small orange diamond",
        category: "Symbols",
        aliases: ["small_orange_diamond"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F539}",
        description: "small blue diamond",
        category: "Symbols",
        aliases: ["small_blue_diamond"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F53A}",
        description: "red triangle pointed up",
        category: "Symbols",
        aliases: ["small_red_triangle"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F53B}",
        description: "red triangle pointed down",
        category: "Symbols",
        aliases: ["small_red_triangle_down"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F4A0}",
        description: "diamond with a dot",
        category: "Symbols",
        aliases: ["diamond_shape_with_a_dot_inside"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F518}",
        description: "radio button",
        category: "Symbols",
        aliases: ["radio_button"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F533}",
        description: "white square button",
        category: "Symbols",
        aliases: ["white_square_button"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F532}",
        description: "black square button",
        category: "Symbols",
        aliases: ["black_square_button"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F3C1}",
        description: "chequered flag",
        category: "Flags",
        aliases: ["checkered_flag"],
        tags: ["milestone", "finish"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F6A9}",
        description: "triangular flag",
        category: "Flags",
        aliases: ["triangular_flag_on_post"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F38C}",
        description: "crossed flags",
        category: "Flags",
        aliases: ["crossed_flags"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F3F4}",
        description: "black flag",
        category: "Flags",
        aliases: ["black_flag"],
        tags: [],
        unicode_version: "7.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F3F3}\uFE0F",
        description: "white flag",
        category: "Flags",
        aliases: ["white_flag"],
        tags: [],
        unicode_version: "7.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F3F3}\uFE0F\u200D\u{1F308}",
        description: "rainbow flag",
        category: "Flags",
        aliases: ["rainbow_flag"],
        tags: ["pride"],
        unicode_version: "6.0",
        ios_version: "10.0"
      },
      {
        emoji: "\u{1F3F3}\uFE0F\u200D\u26A7\uFE0F",
        description: "transgender flag",
        category: "Flags",
        aliases: ["transgender_flag"],
        tags: [],
        unicode_version: "13.0",
        ios_version: "14.0"
      },
      {
        emoji: "\u{1F3F4}\u200D\u2620\uFE0F",
        description: "pirate flag",
        category: "Flags",
        aliases: ["pirate_flag"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F1E6}\u{1F1E8}",
        description: "flag: Ascension Island",
        category: "Flags",
        aliases: ["ascension_island"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F1E6}\u{1F1E9}",
        description: "flag: Andorra",
        category: "Flags",
        aliases: ["andorra"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1E6}\u{1F1EA}",
        description: "flag: United Arab Emirates",
        category: "Flags",
        aliases: ["united_arab_emirates"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1E6}\u{1F1EB}",
        description: "flag: Afghanistan",
        category: "Flags",
        aliases: ["afghanistan"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1E6}\u{1F1EC}",
        description: "flag: Antigua & Barbuda",
        category: "Flags",
        aliases: ["antigua_barbuda"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1E6}\u{1F1EE}",
        description: "flag: Anguilla",
        category: "Flags",
        aliases: ["anguilla"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1E6}\u{1F1F1}",
        description: "flag: Albania",
        category: "Flags",
        aliases: ["albania"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1E6}\u{1F1F2}",
        description: "flag: Armenia",
        category: "Flags",
        aliases: ["armenia"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1E6}\u{1F1F4}",
        description: "flag: Angola",
        category: "Flags",
        aliases: ["angola"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1E6}\u{1F1F6}",
        description: "flag: Antarctica",
        category: "Flags",
        aliases: ["antarctica"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "9.0"
      },
      {
        emoji: "\u{1F1E6}\u{1F1F7}",
        description: "flag: Argentina",
        category: "Flags",
        aliases: ["argentina"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1E6}\u{1F1F8}",
        description: "flag: American Samoa",
        category: "Flags",
        aliases: ["american_samoa"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1E6}\u{1F1F9}",
        description: "flag: Austria",
        category: "Flags",
        aliases: ["austria"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1E6}\u{1F1FA}",
        description: "flag: Australia",
        category: "Flags",
        aliases: ["australia"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1E6}\u{1F1FC}",
        description: "flag: Aruba",
        category: "Flags",
        aliases: ["aruba"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1E6}\u{1F1FD}",
        description: "flag: \xC5land Islands",
        category: "Flags",
        aliases: ["aland_islands"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "9.0"
      },
      {
        emoji: "\u{1F1E6}\u{1F1FF}",
        description: "flag: Azerbaijan",
        category: "Flags",
        aliases: ["azerbaijan"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1E7}\u{1F1E6}",
        description: "flag: Bosnia & Herzegovina",
        category: "Flags",
        aliases: ["bosnia_herzegovina"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1E7}\u{1F1E7}",
        description: "flag: Barbados",
        category: "Flags",
        aliases: ["barbados"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1E7}\u{1F1E9}",
        description: "flag: Bangladesh",
        category: "Flags",
        aliases: ["bangladesh"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1E7}\u{1F1EA}",
        description: "flag: Belgium",
        category: "Flags",
        aliases: ["belgium"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1E7}\u{1F1EB}",
        description: "flag: Burkina Faso",
        category: "Flags",
        aliases: ["burkina_faso"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1E7}\u{1F1EC}",
        description: "flag: Bulgaria",
        category: "Flags",
        aliases: ["bulgaria"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1E7}\u{1F1ED}",
        description: "flag: Bahrain",
        category: "Flags",
        aliases: ["bahrain"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1E7}\u{1F1EE}",
        description: "flag: Burundi",
        category: "Flags",
        aliases: ["burundi"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1E7}\u{1F1EF}",
        description: "flag: Benin",
        category: "Flags",
        aliases: ["benin"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1E7}\u{1F1F1}",
        description: "flag: St. Barth\xE9lemy",
        category: "Flags",
        aliases: ["st_barthelemy"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "9.0"
      },
      {
        emoji: "\u{1F1E7}\u{1F1F2}",
        description: "flag: Bermuda",
        category: "Flags",
        aliases: ["bermuda"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1E7}\u{1F1F3}",
        description: "flag: Brunei",
        category: "Flags",
        aliases: ["brunei"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1E7}\u{1F1F4}",
        description: "flag: Bolivia",
        category: "Flags",
        aliases: ["bolivia"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1E7}\u{1F1F6}",
        description: "flag: Caribbean Netherlands",
        category: "Flags",
        aliases: ["caribbean_netherlands"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "9.0"
      },
      {
        emoji: "\u{1F1E7}\u{1F1F7}",
        description: "flag: Brazil",
        category: "Flags",
        aliases: ["brazil"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1E7}\u{1F1F8}",
        description: "flag: Bahamas",
        category: "Flags",
        aliases: ["bahamas"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1E7}\u{1F1F9}",
        description: "flag: Bhutan",
        category: "Flags",
        aliases: ["bhutan"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1E7}\u{1F1FB}",
        description: "flag: Bouvet Island",
        category: "Flags",
        aliases: ["bouvet_island"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F1E7}\u{1F1FC}",
        description: "flag: Botswana",
        category: "Flags",
        aliases: ["botswana"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1E7}\u{1F1FE}",
        description: "flag: Belarus",
        category: "Flags",
        aliases: ["belarus"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1E7}\u{1F1FF}",
        description: "flag: Belize",
        category: "Flags",
        aliases: ["belize"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1E8}\u{1F1E6}",
        description: "flag: Canada",
        category: "Flags",
        aliases: ["canada"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1E8}\u{1F1E8}",
        description: "flag: Cocos (Keeling) Islands",
        category: "Flags",
        aliases: ["cocos_islands"],
        tags: ["keeling"],
        unicode_version: "6.0",
        ios_version: "9.0"
      },
      {
        emoji: "\u{1F1E8}\u{1F1E9}",
        description: "flag: Congo - Kinshasa",
        category: "Flags",
        aliases: ["congo_kinshasa"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1E8}\u{1F1EB}",
        description: "flag: Central African Republic",
        category: "Flags",
        aliases: ["central_african_republic"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1E8}\u{1F1EC}",
        description: "flag: Congo - Brazzaville",
        category: "Flags",
        aliases: ["congo_brazzaville"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1E8}\u{1F1ED}",
        description: "flag: Switzerland",
        category: "Flags",
        aliases: ["switzerland"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1E8}\u{1F1EE}",
        description: "flag: C\xF4te d\u2019Ivoire",
        category: "Flags",
        aliases: ["cote_divoire"],
        tags: ["ivory"],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1E8}\u{1F1F0}",
        description: "flag: Cook Islands",
        category: "Flags",
        aliases: ["cook_islands"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1E8}\u{1F1F1}",
        description: "flag: Chile",
        category: "Flags",
        aliases: ["chile"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1E8}\u{1F1F2}",
        description: "flag: Cameroon",
        category: "Flags",
        aliases: ["cameroon"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1E8}\u{1F1F3}",
        description: "flag: China",
        category: "Flags",
        aliases: ["cn"],
        tags: ["china"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F1E8}\u{1F1F4}",
        description: "flag: Colombia",
        category: "Flags",
        aliases: ["colombia"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1E8}\u{1F1F5}",
        description: "flag: Clipperton Island",
        category: "Flags",
        aliases: ["clipperton_island"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F1E8}\u{1F1F7}",
        description: "flag: Costa Rica",
        category: "Flags",
        aliases: ["costa_rica"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1E8}\u{1F1FA}",
        description: "flag: Cuba",
        category: "Flags",
        aliases: ["cuba"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1E8}\u{1F1FB}",
        description: "flag: Cape Verde",
        category: "Flags",
        aliases: ["cape_verde"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1E8}\u{1F1FC}",
        description: "flag: Cura\xE7ao",
        category: "Flags",
        aliases: ["curacao"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1E8}\u{1F1FD}",
        description: "flag: Christmas Island",
        category: "Flags",
        aliases: ["christmas_island"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "9.0"
      },
      {
        emoji: "\u{1F1E8}\u{1F1FE}",
        description: "flag: Cyprus",
        category: "Flags",
        aliases: ["cyprus"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1E8}\u{1F1FF}",
        description: "flag: Czechia",
        category: "Flags",
        aliases: ["czech_republic"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1E9}\u{1F1EA}",
        description: "flag: Germany",
        category: "Flags",
        aliases: ["de"],
        tags: ["flag", "germany"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F1E9}\u{1F1EC}",
        description: "flag: Diego Garcia",
        category: "Flags",
        aliases: ["diego_garcia"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F1E9}\u{1F1EF}",
        description: "flag: Djibouti",
        category: "Flags",
        aliases: ["djibouti"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1E9}\u{1F1F0}",
        description: "flag: Denmark",
        category: "Flags",
        aliases: ["denmark"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1E9}\u{1F1F2}",
        description: "flag: Dominica",
        category: "Flags",
        aliases: ["dominica"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1E9}\u{1F1F4}",
        description: "flag: Dominican Republic",
        category: "Flags",
        aliases: ["dominican_republic"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1E9}\u{1F1FF}",
        description: "flag: Algeria",
        category: "Flags",
        aliases: ["algeria"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1EA}\u{1F1E6}",
        description: "flag: Ceuta & Melilla",
        category: "Flags",
        aliases: ["ceuta_melilla"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F1EA}\u{1F1E8}",
        description: "flag: Ecuador",
        category: "Flags",
        aliases: ["ecuador"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1EA}\u{1F1EA}",
        description: "flag: Estonia",
        category: "Flags",
        aliases: ["estonia"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1EA}\u{1F1EC}",
        description: "flag: Egypt",
        category: "Flags",
        aliases: ["egypt"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1EA}\u{1F1ED}",
        description: "flag: Western Sahara",
        category: "Flags",
        aliases: ["western_sahara"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "9.0"
      },
      {
        emoji: "\u{1F1EA}\u{1F1F7}",
        description: "flag: Eritrea",
        category: "Flags",
        aliases: ["eritrea"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1EA}\u{1F1F8}",
        description: "flag: Spain",
        category: "Flags",
        aliases: ["es"],
        tags: ["spain"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F1EA}\u{1F1F9}",
        description: "flag: Ethiopia",
        category: "Flags",
        aliases: ["ethiopia"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1EA}\u{1F1FA}",
        description: "flag: European Union",
        category: "Flags",
        aliases: ["eu", "european_union"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "9.0"
      },
      {
        emoji: "\u{1F1EB}\u{1F1EE}",
        description: "flag: Finland",
        category: "Flags",
        aliases: ["finland"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1EB}\u{1F1EF}",
        description: "flag: Fiji",
        category: "Flags",
        aliases: ["fiji"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1EB}\u{1F1F0}",
        description: "flag: Falkland Islands",
        category: "Flags",
        aliases: ["falkland_islands"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "9.0"
      },
      {
        emoji: "\u{1F1EB}\u{1F1F2}",
        description: "flag: Micronesia",
        category: "Flags",
        aliases: ["micronesia"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "9.0"
      },
      {
        emoji: "\u{1F1EB}\u{1F1F4}",
        description: "flag: Faroe Islands",
        category: "Flags",
        aliases: ["faroe_islands"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1EB}\u{1F1F7}",
        description: "flag: France",
        category: "Flags",
        aliases: ["fr"],
        tags: ["france", "french"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F1EC}\u{1F1E6}",
        description: "flag: Gabon",
        category: "Flags",
        aliases: ["gabon"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1EC}\u{1F1E7}",
        description: "flag: United Kingdom",
        category: "Flags",
        aliases: ["gb", "uk"],
        tags: ["flag", "british"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F1EC}\u{1F1E9}",
        description: "flag: Grenada",
        category: "Flags",
        aliases: ["grenada"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1EC}\u{1F1EA}",
        description: "flag: Georgia",
        category: "Flags",
        aliases: ["georgia"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1EC}\u{1F1EB}",
        description: "flag: French Guiana",
        category: "Flags",
        aliases: ["french_guiana"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1EC}\u{1F1EC}",
        description: "flag: Guernsey",
        category: "Flags",
        aliases: ["guernsey"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "9.0"
      },
      {
        emoji: "\u{1F1EC}\u{1F1ED}",
        description: "flag: Ghana",
        category: "Flags",
        aliases: ["ghana"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1EC}\u{1F1EE}",
        description: "flag: Gibraltar",
        category: "Flags",
        aliases: ["gibraltar"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1EC}\u{1F1F1}",
        description: "flag: Greenland",
        category: "Flags",
        aliases: ["greenland"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "9.0"
      },
      {
        emoji: "\u{1F1EC}\u{1F1F2}",
        description: "flag: Gambia",
        category: "Flags",
        aliases: ["gambia"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1EC}\u{1F1F3}",
        description: "flag: Guinea",
        category: "Flags",
        aliases: ["guinea"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1EC}\u{1F1F5}",
        description: "flag: Guadeloupe",
        category: "Flags",
        aliases: ["guadeloupe"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "9.0"
      },
      {
        emoji: "\u{1F1EC}\u{1F1F6}",
        description: "flag: Equatorial Guinea",
        category: "Flags",
        aliases: ["equatorial_guinea"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1EC}\u{1F1F7}",
        description: "flag: Greece",
        category: "Flags",
        aliases: ["greece"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1EC}\u{1F1F8}",
        description: "flag: South Georgia & South Sandwich Islands",
        category: "Flags",
        aliases: ["south_georgia_south_sandwich_islands"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "9.0"
      },
      {
        emoji: "\u{1F1EC}\u{1F1F9}",
        description: "flag: Guatemala",
        category: "Flags",
        aliases: ["guatemala"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1EC}\u{1F1FA}",
        description: "flag: Guam",
        category: "Flags",
        aliases: ["guam"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1EC}\u{1F1FC}",
        description: "flag: Guinea-Bissau",
        category: "Flags",
        aliases: ["guinea_bissau"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1EC}\u{1F1FE}",
        description: "flag: Guyana",
        category: "Flags",
        aliases: ["guyana"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1ED}\u{1F1F0}",
        description: "flag: Hong Kong SAR China",
        category: "Flags",
        aliases: ["hong_kong"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1ED}\u{1F1F2}",
        description: "flag: Heard & McDonald Islands",
        category: "Flags",
        aliases: ["heard_mcdonald_islands"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F1ED}\u{1F1F3}",
        description: "flag: Honduras",
        category: "Flags",
        aliases: ["honduras"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1ED}\u{1F1F7}",
        description: "flag: Croatia",
        category: "Flags",
        aliases: ["croatia"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1ED}\u{1F1F9}",
        description: "flag: Haiti",
        category: "Flags",
        aliases: ["haiti"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1ED}\u{1F1FA}",
        description: "flag: Hungary",
        category: "Flags",
        aliases: ["hungary"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1EE}\u{1F1E8}",
        description: "flag: Canary Islands",
        category: "Flags",
        aliases: ["canary_islands"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "9.0"
      },
      {
        emoji: "\u{1F1EE}\u{1F1E9}",
        description: "flag: Indonesia",
        category: "Flags",
        aliases: ["indonesia"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1EE}\u{1F1EA}",
        description: "flag: Ireland",
        category: "Flags",
        aliases: ["ireland"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1EE}\u{1F1F1}",
        description: "flag: Israel",
        category: "Flags",
        aliases: ["israel"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1EE}\u{1F1F2}",
        description: "flag: Isle of Man",
        category: "Flags",
        aliases: ["isle_of_man"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "9.0"
      },
      {
        emoji: "\u{1F1EE}\u{1F1F3}",
        description: "flag: India",
        category: "Flags",
        aliases: ["india"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1EE}\u{1F1F4}",
        description: "flag: British Indian Ocean Territory",
        category: "Flags",
        aliases: ["british_indian_ocean_territory"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "9.0"
      },
      {
        emoji: "\u{1F1EE}\u{1F1F6}",
        description: "flag: Iraq",
        category: "Flags",
        aliases: ["iraq"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1EE}\u{1F1F7}",
        description: "flag: Iran",
        category: "Flags",
        aliases: ["iran"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1EE}\u{1F1F8}",
        description: "flag: Iceland",
        category: "Flags",
        aliases: ["iceland"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1EE}\u{1F1F9}",
        description: "flag: Italy",
        category: "Flags",
        aliases: ["it"],
        tags: ["italy"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F1EF}\u{1F1EA}",
        description: "flag: Jersey",
        category: "Flags",
        aliases: ["jersey"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "9.0"
      },
      {
        emoji: "\u{1F1EF}\u{1F1F2}",
        description: "flag: Jamaica",
        category: "Flags",
        aliases: ["jamaica"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1EF}\u{1F1F4}",
        description: "flag: Jordan",
        category: "Flags",
        aliases: ["jordan"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1EF}\u{1F1F5}",
        description: "flag: Japan",
        category: "Flags",
        aliases: ["jp"],
        tags: ["japan"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F1F0}\u{1F1EA}",
        description: "flag: Kenya",
        category: "Flags",
        aliases: ["kenya"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1F0}\u{1F1EC}",
        description: "flag: Kyrgyzstan",
        category: "Flags",
        aliases: ["kyrgyzstan"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1F0}\u{1F1ED}",
        description: "flag: Cambodia",
        category: "Flags",
        aliases: ["cambodia"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1F0}\u{1F1EE}",
        description: "flag: Kiribati",
        category: "Flags",
        aliases: ["kiribati"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1F0}\u{1F1F2}",
        description: "flag: Comoros",
        category: "Flags",
        aliases: ["comoros"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1F0}\u{1F1F3}",
        description: "flag: St. Kitts & Nevis",
        category: "Flags",
        aliases: ["st_kitts_nevis"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1F0}\u{1F1F5}",
        description: "flag: North Korea",
        category: "Flags",
        aliases: ["north_korea"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1F0}\u{1F1F7}",
        description: "flag: South Korea",
        category: "Flags",
        aliases: ["kr"],
        tags: ["korea"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F1F0}\u{1F1FC}",
        description: "flag: Kuwait",
        category: "Flags",
        aliases: ["kuwait"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1F0}\u{1F1FE}",
        description: "flag: Cayman Islands",
        category: "Flags",
        aliases: ["cayman_islands"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1F0}\u{1F1FF}",
        description: "flag: Kazakhstan",
        category: "Flags",
        aliases: ["kazakhstan"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1F1}\u{1F1E6}",
        description: "flag: Laos",
        category: "Flags",
        aliases: ["laos"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1F1}\u{1F1E7}",
        description: "flag: Lebanon",
        category: "Flags",
        aliases: ["lebanon"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1F1}\u{1F1E8}",
        description: "flag: St. Lucia",
        category: "Flags",
        aliases: ["st_lucia"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1F1}\u{1F1EE}",
        description: "flag: Liechtenstein",
        category: "Flags",
        aliases: ["liechtenstein"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1F1}\u{1F1F0}",
        description: "flag: Sri Lanka",
        category: "Flags",
        aliases: ["sri_lanka"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1F1}\u{1F1F7}",
        description: "flag: Liberia",
        category: "Flags",
        aliases: ["liberia"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1F1}\u{1F1F8}",
        description: "flag: Lesotho",
        category: "Flags",
        aliases: ["lesotho"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1F1}\u{1F1F9}",
        description: "flag: Lithuania",
        category: "Flags",
        aliases: ["lithuania"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1F1}\u{1F1FA}",
        description: "flag: Luxembourg",
        category: "Flags",
        aliases: ["luxembourg"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1F1}\u{1F1FB}",
        description: "flag: Latvia",
        category: "Flags",
        aliases: ["latvia"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1F1}\u{1F1FE}",
        description: "flag: Libya",
        category: "Flags",
        aliases: ["libya"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1F2}\u{1F1E6}",
        description: "flag: Morocco",
        category: "Flags",
        aliases: ["morocco"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1F2}\u{1F1E8}",
        description: "flag: Monaco",
        category: "Flags",
        aliases: ["monaco"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "9.0"
      },
      {
        emoji: "\u{1F1F2}\u{1F1E9}",
        description: "flag: Moldova",
        category: "Flags",
        aliases: ["moldova"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1F2}\u{1F1EA}",
        description: "flag: Montenegro",
        category: "Flags",
        aliases: ["montenegro"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1F2}\u{1F1EB}",
        description: "flag: St. Martin",
        category: "Flags",
        aliases: ["st_martin"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F1F2}\u{1F1EC}",
        description: "flag: Madagascar",
        category: "Flags",
        aliases: ["madagascar"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1F2}\u{1F1ED}",
        description: "flag: Marshall Islands",
        category: "Flags",
        aliases: ["marshall_islands"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "9.0"
      },
      {
        emoji: "\u{1F1F2}\u{1F1F0}",
        description: "flag: North Macedonia",
        category: "Flags",
        aliases: ["macedonia"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1F2}\u{1F1F1}",
        description: "flag: Mali",
        category: "Flags",
        aliases: ["mali"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1F2}\u{1F1F2}",
        description: "flag: Myanmar (Burma)",
        category: "Flags",
        aliases: ["myanmar"],
        tags: ["burma"],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1F2}\u{1F1F3}",
        description: "flag: Mongolia",
        category: "Flags",
        aliases: ["mongolia"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1F2}\u{1F1F4}",
        description: "flag: Macao SAR China",
        category: "Flags",
        aliases: ["macau"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1F2}\u{1F1F5}",
        description: "flag: Northern Mariana Islands",
        category: "Flags",
        aliases: ["northern_mariana_islands"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1F2}\u{1F1F6}",
        description: "flag: Martinique",
        category: "Flags",
        aliases: ["martinique"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "9.0"
      },
      {
        emoji: "\u{1F1F2}\u{1F1F7}",
        description: "flag: Mauritania",
        category: "Flags",
        aliases: ["mauritania"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1F2}\u{1F1F8}",
        description: "flag: Montserrat",
        category: "Flags",
        aliases: ["montserrat"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1F2}\u{1F1F9}",
        description: "flag: Malta",
        category: "Flags",
        aliases: ["malta"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1F2}\u{1F1FA}",
        description: "flag: Mauritius",
        category: "Flags",
        aliases: ["mauritius"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "9.0"
      },
      {
        emoji: "\u{1F1F2}\u{1F1FB}",
        description: "flag: Maldives",
        category: "Flags",
        aliases: ["maldives"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1F2}\u{1F1FC}",
        description: "flag: Malawi",
        category: "Flags",
        aliases: ["malawi"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1F2}\u{1F1FD}",
        description: "flag: Mexico",
        category: "Flags",
        aliases: ["mexico"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1F2}\u{1F1FE}",
        description: "flag: Malaysia",
        category: "Flags",
        aliases: ["malaysia"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1F2}\u{1F1FF}",
        description: "flag: Mozambique",
        category: "Flags",
        aliases: ["mozambique"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1F3}\u{1F1E6}",
        description: "flag: Namibia",
        category: "Flags",
        aliases: ["namibia"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1F3}\u{1F1E8}",
        description: "flag: New Caledonia",
        category: "Flags",
        aliases: ["new_caledonia"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1F3}\u{1F1EA}",
        description: "flag: Niger",
        category: "Flags",
        aliases: ["niger"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1F3}\u{1F1EB}",
        description: "flag: Norfolk Island",
        category: "Flags",
        aliases: ["norfolk_island"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "9.0"
      },
      {
        emoji: "\u{1F1F3}\u{1F1EC}",
        description: "flag: Nigeria",
        category: "Flags",
        aliases: ["nigeria"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1F3}\u{1F1EE}",
        description: "flag: Nicaragua",
        category: "Flags",
        aliases: ["nicaragua"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1F3}\u{1F1F1}",
        description: "flag: Netherlands",
        category: "Flags",
        aliases: ["netherlands"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1F3}\u{1F1F4}",
        description: "flag: Norway",
        category: "Flags",
        aliases: ["norway"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1F3}\u{1F1F5}",
        description: "flag: Nepal",
        category: "Flags",
        aliases: ["nepal"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1F3}\u{1F1F7}",
        description: "flag: Nauru",
        category: "Flags",
        aliases: ["nauru"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "9.0"
      },
      {
        emoji: "\u{1F1F3}\u{1F1FA}",
        description: "flag: Niue",
        category: "Flags",
        aliases: ["niue"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1F3}\u{1F1FF}",
        description: "flag: New Zealand",
        category: "Flags",
        aliases: ["new_zealand"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1F4}\u{1F1F2}",
        description: "flag: Oman",
        category: "Flags",
        aliases: ["oman"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1F5}\u{1F1E6}",
        description: "flag: Panama",
        category: "Flags",
        aliases: ["panama"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1F5}\u{1F1EA}",
        description: "flag: Peru",
        category: "Flags",
        aliases: ["peru"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1F5}\u{1F1EB}",
        description: "flag: French Polynesia",
        category: "Flags",
        aliases: ["french_polynesia"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "9.0"
      },
      {
        emoji: "\u{1F1F5}\u{1F1EC}",
        description: "flag: Papua New Guinea",
        category: "Flags",
        aliases: ["papua_new_guinea"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1F5}\u{1F1ED}",
        description: "flag: Philippines",
        category: "Flags",
        aliases: ["philippines"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1F5}\u{1F1F0}",
        description: "flag: Pakistan",
        category: "Flags",
        aliases: ["pakistan"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1F5}\u{1F1F1}",
        description: "flag: Poland",
        category: "Flags",
        aliases: ["poland"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1F5}\u{1F1F2}",
        description: "flag: St. Pierre & Miquelon",
        category: "Flags",
        aliases: ["st_pierre_miquelon"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "9.0"
      },
      {
        emoji: "\u{1F1F5}\u{1F1F3}",
        description: "flag: Pitcairn Islands",
        category: "Flags",
        aliases: ["pitcairn_islands"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "9.0"
      },
      {
        emoji: "\u{1F1F5}\u{1F1F7}",
        description: "flag: Puerto Rico",
        category: "Flags",
        aliases: ["puerto_rico"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1F5}\u{1F1F8}",
        description: "flag: Palestinian Territories",
        category: "Flags",
        aliases: ["palestinian_territories"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1F5}\u{1F1F9}",
        description: "flag: Portugal",
        category: "Flags",
        aliases: ["portugal"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1F5}\u{1F1FC}",
        description: "flag: Palau",
        category: "Flags",
        aliases: ["palau"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1F5}\u{1F1FE}",
        description: "flag: Paraguay",
        category: "Flags",
        aliases: ["paraguay"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1F6}\u{1F1E6}",
        description: "flag: Qatar",
        category: "Flags",
        aliases: ["qatar"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1F7}\u{1F1EA}",
        description: "flag: R\xE9union",
        category: "Flags",
        aliases: ["reunion"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "9.0"
      },
      {
        emoji: "\u{1F1F7}\u{1F1F4}",
        description: "flag: Romania",
        category: "Flags",
        aliases: ["romania"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1F7}\u{1F1F8}",
        description: "flag: Serbia",
        category: "Flags",
        aliases: ["serbia"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1F7}\u{1F1FA}",
        description: "flag: Russia",
        category: "Flags",
        aliases: ["ru"],
        tags: ["russia"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F1F7}\u{1F1FC}",
        description: "flag: Rwanda",
        category: "Flags",
        aliases: ["rwanda"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1F8}\u{1F1E6}",
        description: "flag: Saudi Arabia",
        category: "Flags",
        aliases: ["saudi_arabia"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1F8}\u{1F1E7}",
        description: "flag: Solomon Islands",
        category: "Flags",
        aliases: ["solomon_islands"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1F8}\u{1F1E8}",
        description: "flag: Seychelles",
        category: "Flags",
        aliases: ["seychelles"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1F8}\u{1F1E9}",
        description: "flag: Sudan",
        category: "Flags",
        aliases: ["sudan"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1F8}\u{1F1EA}",
        description: "flag: Sweden",
        category: "Flags",
        aliases: ["sweden"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1F8}\u{1F1EC}",
        description: "flag: Singapore",
        category: "Flags",
        aliases: ["singapore"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1F8}\u{1F1ED}",
        description: "flag: St. Helena",
        category: "Flags",
        aliases: ["st_helena"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "9.0"
      },
      {
        emoji: "\u{1F1F8}\u{1F1EE}",
        description: "flag: Slovenia",
        category: "Flags",
        aliases: ["slovenia"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1F8}\u{1F1EF}",
        description: "flag: Svalbard & Jan Mayen",
        category: "Flags",
        aliases: ["svalbard_jan_mayen"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F1F8}\u{1F1F0}",
        description: "flag: Slovakia",
        category: "Flags",
        aliases: ["slovakia"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1F8}\u{1F1F1}",
        description: "flag: Sierra Leone",
        category: "Flags",
        aliases: ["sierra_leone"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1F8}\u{1F1F2}",
        description: "flag: San Marino",
        category: "Flags",
        aliases: ["san_marino"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1F8}\u{1F1F3}",
        description: "flag: Senegal",
        category: "Flags",
        aliases: ["senegal"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1F8}\u{1F1F4}",
        description: "flag: Somalia",
        category: "Flags",
        aliases: ["somalia"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1F8}\u{1F1F7}",
        description: "flag: Suriname",
        category: "Flags",
        aliases: ["suriname"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1F8}\u{1F1F8}",
        description: "flag: South Sudan",
        category: "Flags",
        aliases: ["south_sudan"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1F8}\u{1F1F9}",
        description: "flag: S\xE3o Tom\xE9 & Pr\xEDncipe",
        category: "Flags",
        aliases: ["sao_tome_principe"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1F8}\u{1F1FB}",
        description: "flag: El Salvador",
        category: "Flags",
        aliases: ["el_salvador"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1F8}\u{1F1FD}",
        description: "flag: Sint Maarten",
        category: "Flags",
        aliases: ["sint_maarten"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1F8}\u{1F1FE}",
        description: "flag: Syria",
        category: "Flags",
        aliases: ["syria"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1F8}\u{1F1FF}",
        description: "flag: Eswatini",
        category: "Flags",
        aliases: ["swaziland"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1F9}\u{1F1E6}",
        description: "flag: Tristan da Cunha",
        category: "Flags",
        aliases: ["tristan_da_cunha"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F1F9}\u{1F1E8}",
        description: "flag: Turks & Caicos Islands",
        category: "Flags",
        aliases: ["turks_caicos_islands"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1F9}\u{1F1E9}",
        description: "flag: Chad",
        category: "Flags",
        aliases: ["chad"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "9.0"
      },
      {
        emoji: "\u{1F1F9}\u{1F1EB}",
        description: "flag: French Southern Territories",
        category: "Flags",
        aliases: ["french_southern_territories"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1F9}\u{1F1EC}",
        description: "flag: Togo",
        category: "Flags",
        aliases: ["togo"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1F9}\u{1F1ED}",
        description: "flag: Thailand",
        category: "Flags",
        aliases: ["thailand"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1F9}\u{1F1EF}",
        description: "flag: Tajikistan",
        category: "Flags",
        aliases: ["tajikistan"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1F9}\u{1F1F0}",
        description: "flag: Tokelau",
        category: "Flags",
        aliases: ["tokelau"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "9.0"
      },
      {
        emoji: "\u{1F1F9}\u{1F1F1}",
        description: "flag: Timor-Leste",
        category: "Flags",
        aliases: ["timor_leste"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1F9}\u{1F1F2}",
        description: "flag: Turkmenistan",
        category: "Flags",
        aliases: ["turkmenistan"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1F9}\u{1F1F3}",
        description: "flag: Tunisia",
        category: "Flags",
        aliases: ["tunisia"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1F9}\u{1F1F4}",
        description: "flag: Tonga",
        category: "Flags",
        aliases: ["tonga"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1F9}\u{1F1F7}",
        description: "flag: Turkey",
        category: "Flags",
        aliases: ["tr"],
        tags: ["turkey"],
        unicode_version: "8.0",
        ios_version: "9.1"
      },
      {
        emoji: "\u{1F1F9}\u{1F1F9}",
        description: "flag: Trinidad & Tobago",
        category: "Flags",
        aliases: ["trinidad_tobago"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1F9}\u{1F1FB}",
        description: "flag: Tuvalu",
        category: "Flags",
        aliases: ["tuvalu"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1F9}\u{1F1FC}",
        description: "flag: Taiwan",
        category: "Flags",
        aliases: ["taiwan"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "9.0"
      },
      {
        emoji: "\u{1F1F9}\u{1F1FF}",
        description: "flag: Tanzania",
        category: "Flags",
        aliases: ["tanzania"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1FA}\u{1F1E6}",
        description: "flag: Ukraine",
        category: "Flags",
        aliases: ["ukraine"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1FA}\u{1F1EC}",
        description: "flag: Uganda",
        category: "Flags",
        aliases: ["uganda"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1FA}\u{1F1F2}",
        description: "flag: U.S. Outlying Islands",
        category: "Flags",
        aliases: ["us_outlying_islands"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F1FA}\u{1F1F3}",
        description: "flag: United Nations",
        category: "Flags",
        aliases: ["united_nations"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F1FA}\u{1F1F8}",
        description: "flag: United States",
        category: "Flags",
        aliases: ["us"],
        tags: ["flag", "united", "america"],
        unicode_version: "6.0",
        ios_version: "6.0"
      },
      {
        emoji: "\u{1F1FA}\u{1F1FE}",
        description: "flag: Uruguay",
        category: "Flags",
        aliases: ["uruguay"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1FA}\u{1F1FF}",
        description: "flag: Uzbekistan",
        category: "Flags",
        aliases: ["uzbekistan"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1FB}\u{1F1E6}",
        description: "flag: Vatican City",
        category: "Flags",
        aliases: ["vatican_city"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "9.0"
      },
      {
        emoji: "\u{1F1FB}\u{1F1E8}",
        description: "flag: St. Vincent & Grenadines",
        category: "Flags",
        aliases: ["st_vincent_grenadines"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1FB}\u{1F1EA}",
        description: "flag: Venezuela",
        category: "Flags",
        aliases: ["venezuela"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1FB}\u{1F1EC}",
        description: "flag: British Virgin Islands",
        category: "Flags",
        aliases: ["british_virgin_islands"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1FB}\u{1F1EE}",
        description: "flag: U.S. Virgin Islands",
        category: "Flags",
        aliases: ["us_virgin_islands"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1FB}\u{1F1F3}",
        description: "flag: Vietnam",
        category: "Flags",
        aliases: ["vietnam"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1FB}\u{1F1FA}",
        description: "flag: Vanuatu",
        category: "Flags",
        aliases: ["vanuatu"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1FC}\u{1F1EB}",
        description: "flag: Wallis & Futuna",
        category: "Flags",
        aliases: ["wallis_futuna"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "9.0"
      },
      {
        emoji: "\u{1F1FC}\u{1F1F8}",
        description: "flag: Samoa",
        category: "Flags",
        aliases: ["samoa"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1FD}\u{1F1F0}",
        description: "flag: Kosovo",
        category: "Flags",
        aliases: ["kosovo"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1FE}\u{1F1EA}",
        description: "flag: Yemen",
        category: "Flags",
        aliases: ["yemen"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1FE}\u{1F1F9}",
        description: "flag: Mayotte",
        category: "Flags",
        aliases: ["mayotte"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "9.0"
      },
      {
        emoji: "\u{1F1FF}\u{1F1E6}",
        description: "flag: South Africa",
        category: "Flags",
        aliases: ["south_africa"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1FF}\u{1F1F2}",
        description: "flag: Zambia",
        category: "Flags",
        aliases: ["zambia"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F1FF}\u{1F1FC}",
        description: "flag: Zimbabwe",
        category: "Flags",
        aliases: ["zimbabwe"],
        tags: [],
        unicode_version: "6.0",
        ios_version: "8.3"
      },
      {
        emoji: "\u{1F3F4}\u{E0067}\u{E0062}\u{E0065}\u{E006E}\u{E0067}\u{E007F}",
        description: "flag: England",
        category: "Flags",
        aliases: ["england"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F3F4}\u{E0067}\u{E0062}\u{E0073}\u{E0063}\u{E0074}\u{E007F}",
        description: "flag: Scotland",
        category: "Flags",
        aliases: ["scotland"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      },
      {
        emoji: "\u{1F3F4}\u{E0067}\u{E0062}\u{E0077}\u{E006C}\u{E0073}\u{E007F}",
        description: "flag: Wales",
        category: "Flags",
        aliases: ["wales"],
        tags: [],
        unicode_version: "11.0",
        ios_version: "12.1"
      }
    ];
  }
});

// src/index.ts
var src_exports = {};
__export(src_exports, {
  HtmlProvider: () => HtmlProvider,
  LexicalEditorComponent: () => components_default,
  useHtmlContext: () => useHtmlContext
});
module.exports = __toCommonJS(src_exports);
init_cjs_shims();

// src/components/index.tsx
init_cjs_shims();
var import_react45 = __toESM(require("react"));
var import_LexicalComposer = require("@lexical/react/LexicalComposer");

// src/components/editor/context/FlashMessageContext.tsx
init_cjs_shims();
var import_react = require("react");
var import_react2 = __toESM(require("react"));

// src/components/editor/ui/FlashMessage.tsx
init_cjs_shims();
var import_react_dom = require("react-dom");
function FlashMessage({
  children
}) {
  return (0, import_react_dom.createPortal)(
    /* @__PURE__ */ React.createElement("div", { className: "FlashMessage__overlay", role: "dialog" }, /* @__PURE__ */ React.createElement("p", { className: "FlashMessage__alert", role: "alert" }, children)),
    document.body
  );
}

// src/components/editor/context/FlashMessageContext.tsx
var Context = (0, import_react.createContext)(void 0);
var INITIAL_STATE = {};
var DEFAULT_DURATION = 1e3;
var FlashMessageContext = ({
  children
}) => {
  const [props, setProps] = (0, import_react.useState)(INITIAL_STATE);
  const showFlashMessage = (0, import_react.useCallback)(
    (message, duration) => setProps(message ? { duration, message } : INITIAL_STATE),
    []
  );
  (0, import_react.useEffect)(() => {
    var _a;
    if (props.message) {
      const timeoutId = setTimeout(
        () => setProps(INITIAL_STATE),
        (_a = props.duration) != null ? _a : DEFAULT_DURATION
      );
      return () => clearTimeout(timeoutId);
    }
  }, [props]);
  return /* @__PURE__ */ import_react2.default.createElement(Context.Provider, { value: showFlashMessage }, children, props.message && /* @__PURE__ */ import_react2.default.createElement(FlashMessage, null, props.message));
};
var useFlashMessageContext = () => {
  const ctx = (0, import_react.useContext)(Context);
  if (!ctx) {
    throw new Error("Missing FlashMessageContext");
  }
  return ctx;
};

// src/components/editor/nodes/PlaygroundNodes.ts
init_cjs_shims();
var import_code = require("@lexical/code");
var import_hashtag = require("@lexical/hashtag");
var import_link = require("@lexical/link");
var import_list = require("@lexical/list");
var import_mark = require("@lexical/mark");
var import_overflow = require("@lexical/overflow");
var import_LexicalHorizontalRuleNode = require("@lexical/react/LexicalHorizontalRuleNode");
var import_rich_text = require("@lexical/rich-text");
var import_table = require("@lexical/table");

// src/components/editor/nodes/AutocompleteNode.tsx
init_cjs_shims();
var import_lexical2 = require("lexical");
var React4 = __toESM(require("react"));

// src/components/editor/context/SharedAutocompleteContext.tsx
init_cjs_shims();
var React3 = __toESM(require("react"));
var import_react3 = require("react");
var Context2 = (0, import_react3.createContext)([
  (_cb) => () => {
    return;
  },
  (_newSuggestion) => {
    return;
  }
]);
var SharedAutocompleteContext = ({
  children
}) => {
  const context = (0, import_react3.useMemo)(() => {
    let suggestion = null;
    const listeners = /* @__PURE__ */ new Set();
    return [
      (cb) => {
        cb(suggestion);
        listeners.add(cb);
        return () => {
          listeners.delete(cb);
        };
      },
      (newSuggestion) => {
        suggestion = newSuggestion;
        for (const listener of listeners) {
          listener(newSuggestion);
        }
      }
    ];
  }, []);
  return /* @__PURE__ */ React3.createElement(Context2.Provider, { value: context }, children);
};
var useSharedAutocompleteContext = () => {
  const [subscribe, publish] = (0, import_react3.useContext)(Context2);
  const [suggestion, setSuggestion] = (0, import_react3.useState)(null);
  (0, import_react3.useEffect)(() => {
    return subscribe((newSuggestion) => {
      setSuggestion(newSuggestion);
    });
  }, [subscribe]);
  return [suggestion, publish];
};

// src/components/editor/plugins/AutocompletePlugin/index.tsx
init_cjs_shims();
var import_LexicalComposerContext = require("@lexical/react/LexicalComposerContext");
var import_selection = require("@lexical/selection");
var import_utils = require("@lexical/utils");
var import_lexical = require("lexical");
var import_react4 = require("react");

// src/components/editor/utils/swipe.ts
init_cjs_shims();

// src/components/editor/plugins/AutocompletePlugin/index.tsx
var uuid = Math.random().toString(36).replace(/[^a-z]+/g, "").substr(0, 5);

// src/components/editor/nodes/AutocompleteNode.tsx
var AutocompleteNode = class _AutocompleteNode extends import_lexical2.DecoratorNode {
  static clone(node) {
    return new _AutocompleteNode(node.__uuid, node.__key);
  }
  static getType() {
    return "autocomplete";
  }
  static importJSON(serializedNode) {
    const node = $createAutocompleteNode(serializedNode.uuid);
    return node;
  }
  exportJSON() {
    return __spreadProps(__spreadValues({}, super.exportJSON()), {
      type: "autocomplete",
      uuid: this.__uuid,
      version: 1
    });
  }
  constructor(uuid2, key) {
    super(key);
    this.__uuid = uuid2;
  }
  updateDOM(prevNode, dom, config) {
    return false;
  }
  createDOM(config) {
    return document.createElement("span");
  }
  decorate(editor, config) {
    if (this.__uuid !== uuid) {
      return null;
    }
    return /* @__PURE__ */ React4.createElement(AutocompleteComponent, { className: config.theme.autocomplete });
  }
};
function $createAutocompleteNode(uuid2) {
  return new AutocompleteNode(uuid2);
}
function AutocompleteComponent({
  className
}) {
  const [suggestion] = useSharedAutocompleteContext();
  const userAgentData = window.navigator.userAgentData;
  const isMobile = userAgentData !== void 0 ? userAgentData.mobile : window.innerWidth <= 800 && window.innerHeight <= 600;
  return /* @__PURE__ */ React4.createElement("span", { className, spellCheck: "false" }, suggestion, " ", isMobile ? "(SWIPE \u2B95)" : "(TAB)");
}

// src/components/editor/nodes/PlaygroundNodes.ts
init_EmojiNode();
init_ImageNode2();
init_KeywordNode();

// src/components/editor/nodes/LayoutContainerNode.ts
init_cjs_shims();
var import_utils4 = require("@lexical/utils");
var import_lexical9 = require("lexical");
function $convertLayoutContainerElement(domNode) {
  const styleAttributes = window.getComputedStyle(domNode);
  const templateColumns = styleAttributes.getPropertyValue(
    "grid-template-columns"
  );
  if (templateColumns) {
    const node = $createLayoutContainerNode(templateColumns);
    return { node };
  }
  return null;
}
var LayoutContainerNode = class _LayoutContainerNode extends import_lexical9.ElementNode {
  constructor(templateColumns, key) {
    super(key);
    this.__templateColumns = templateColumns;
  }
  static getType() {
    return "layout-container";
  }
  static clone(node) {
    return new _LayoutContainerNode(node.__templateColumns, node.__key);
  }
  createDOM(config) {
    const dom = document.createElement("div");
    dom.style.gridTemplateColumns = this.__templateColumns;
    if (typeof config.theme.layoutContainer === "string") {
      (0, import_utils4.addClassNamesToElement)(dom, config.theme.layoutContainer);
    }
    return dom;
  }
  exportDOM() {
    const element = document.createElement("div");
    element.style.gridTemplateColumns = this.__templateColumns;
    element.setAttribute("data-lexical-layout-container", "true");
    return { element };
  }
  updateDOM(prevNode, dom) {
    if (prevNode.__templateColumns !== this.__templateColumns) {
      dom.style.gridTemplateColumns = this.__templateColumns;
    }
    return false;
  }
  static importDOM() {
    return {
      div: (domNode) => {
        if (!domNode.hasAttribute("data-lexical-layout-container")) {
          return null;
        }
        return {
          conversion: $convertLayoutContainerElement,
          priority: 2
        };
      }
    };
  }
  static importJSON(json) {
    return $createLayoutContainerNode(json.templateColumns);
  }
  isShadowRoot() {
    return true;
  }
  canBeEmpty() {
    return false;
  }
  exportJSON() {
    return __spreadProps(__spreadValues({}, super.exportJSON()), {
      templateColumns: this.__templateColumns,
      type: "layout-container",
      version: 1
    });
  }
  getTemplateColumns() {
    return this.getLatest().__templateColumns;
  }
  setTemplateColumns(templateColumns) {
    this.getWritable().__templateColumns = templateColumns;
  }
};
function $createLayoutContainerNode(templateColumns) {
  return new LayoutContainerNode(templateColumns);
}
function $isLayoutContainerNode(node) {
  return node instanceof LayoutContainerNode;
}

// src/components/editor/nodes/LayoutItemNode.ts
init_cjs_shims();
var import_utils5 = require("@lexical/utils");
var import_lexical10 = require("lexical");
var LayoutItemNode = class _LayoutItemNode extends import_lexical10.ElementNode {
  static getType() {
    return "layout-item";
  }
  static clone(node) {
    return new _LayoutItemNode(node.__key);
  }
  createDOM(config) {
    const dom = document.createElement("div");
    if (typeof config.theme.layoutItem === "string") {
      (0, import_utils5.addClassNamesToElement)(dom, config.theme.layoutItem);
    }
    return dom;
  }
  updateDOM() {
    return false;
  }
  static importDOM() {
    return {};
  }
  static importJSON() {
    return $createLayoutItemNode();
  }
  isShadowRoot() {
    return true;
  }
  exportJSON() {
    return __spreadProps(__spreadValues({}, super.exportJSON()), {
      type: "layout-item",
      version: 1
    });
  }
};
function $createLayoutItemNode() {
  return new LayoutItemNode();
}
function $isLayoutItemNode(node) {
  return node instanceof LayoutItemNode;
}

// src/components/editor/nodes/PlaygroundNodes.ts
init_MentionNode();

// src/components/editor/nodes/YouTubeNode.tsx
init_cjs_shims();
var import_LexicalBlockWithAlignableContents = require("@lexical/react/LexicalBlockWithAlignableContents");
var import_LexicalDecoratorBlockNode = require("@lexical/react/LexicalDecoratorBlockNode");
var React14 = __toESM(require("react"));
function YouTubeComponent({
  className,
  format,
  nodeKey,
  videoID
}) {
  return /* @__PURE__ */ React14.createElement(
    import_LexicalBlockWithAlignableContents.BlockWithAlignableContents,
    {
      className,
      format,
      nodeKey
    },
    /* @__PURE__ */ React14.createElement(
      "iframe",
      {
        width: "560",
        height: "315",
        src: `https://www.youtube-nocookie.com/embed/${videoID}`,
        frameBorder: "0",
        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
        allowFullScreen: true,
        title: "YouTube video"
      }
    )
  );
}
function $convertYoutubeElement(domNode) {
  const videoID = domNode.getAttribute("data-lexical-youtube");
  if (videoID) {
    const node = $createYouTubeNode(videoID);
    return { node };
  }
  return null;
}
var YouTubeNode = class _YouTubeNode extends import_LexicalDecoratorBlockNode.DecoratorBlockNode {
  static getType() {
    return "youtube";
  }
  static clone(node) {
    return new _YouTubeNode(node.__id, node.__format, node.__key);
  }
  static importJSON(serializedNode) {
    const node = $createYouTubeNode(serializedNode.videoID);
    node.setFormat(serializedNode.format);
    return node;
  }
  exportJSON() {
    return __spreadProps(__spreadValues({}, super.exportJSON()), {
      type: "youtube",
      version: 1,
      videoID: this.__id
    });
  }
  constructor(id, format, key) {
    super(format, key);
    this.__id = id;
  }
  exportDOM() {
    const element = document.createElement("iframe");
    element.setAttribute("data-lexical-youtube", this.__id);
    element.setAttribute("width", "560");
    element.setAttribute("height", "315");
    element.setAttribute(
      "src",
      `https://www.youtube-nocookie.com/embed/${this.__id}`
    );
    element.setAttribute("frameborder", "0");
    element.setAttribute(
      "allow",
      "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    );
    element.setAttribute("allowfullscreen", "true");
    element.setAttribute("title", "YouTube video");
    return { element };
  }
  static importDOM() {
    return {
      iframe: (domNode) => {
        if (!domNode.hasAttribute("data-lexical-youtube")) {
          return null;
        }
        return {
          conversion: $convertYoutubeElement,
          priority: 1
        };
      }
    };
  }
  updateDOM() {
    return false;
  }
  getId() {
    return this.__id;
  }
  getTextContent(_includeInert, _includeDirectionless) {
    return `https://www.youtube.com/watch?v=${this.__id}`;
  }
  decorate(_editor, config) {
    const embedBlockTheme = config.theme.embedBlock || {};
    const className = {
      base: embedBlockTheme.base || "",
      focus: embedBlockTheme.focus || ""
    };
    return /* @__PURE__ */ React14.createElement(
      YouTubeComponent,
      {
        className,
        format: this.__format,
        nodeKey: this.getKey(),
        videoID: this.__id
      }
    );
  }
};
function $createYouTubeNode(videoID) {
  return new YouTubeNode(videoID);
}

// src/components/editor/nodes/PlaygroundNodes.ts
var PlaygroundNodes = [
  import_rich_text.HeadingNode,
  import_list.ListNode,
  import_list.ListItemNode,
  import_rich_text.QuoteNode,
  import_code.CodeNode,
  import_table.TableNode,
  import_table.TableCellNode,
  import_table.TableRowNode,
  import_hashtag.HashtagNode,
  import_code.CodeHighlightNode,
  import_link.AutoLinkNode,
  import_link.LinkNode,
  import_overflow.OverflowNode,
  ImageNode,
  MentionNode,
  EmojiNode,
  AutocompleteNode,
  KeywordNode,
  import_LexicalHorizontalRuleNode.HorizontalRuleNode,
  YouTubeNode,
  import_mark.MarkNode,
  LayoutContainerNode,
  LayoutItemNode
];
var PlaygroundNodes_default = PlaygroundNodes;

// src/components/editor/themes/PlaygroundEditorTheme.ts
init_cjs_shims();
var theme = {
  autocomplete: "autocomplete",
  blockCursor: "blockCursor",
  characterLimit: "characterLimit",
  code: "code",
  codeHighlight: {
    atrule: "tokenAttr",
    attr: "tokenAttr",
    boolean: "tokenProperty",
    builtin: "tokenSelector",
    cdata: "tokenComment",
    char: "tokenSelector",
    class: "tokenFunction",
    "class-name": "tokenFunction",
    comment: "tokenComment",
    constant: "tokenProperty",
    deleted: "tokenProperty",
    doctype: "tokenComment",
    entity: "tokenOperator",
    function: "tokenFunction",
    important: "tokenVariable",
    inserted: "tokenSelector",
    keyword: "tokenAttr",
    namespace: "tokenVariable",
    number: "tokenProperty",
    operator: "tokenOperator",
    prolog: "tokenComment",
    property: "tokenProperty",
    punctuation: "tokenPunctuation",
    regex: "tokenVariable",
    selector: "tokenSelector",
    string: "tokenSelector",
    symbol: "tokenProperty",
    tag: "tokenProperty",
    url: "tokenOperator",
    variable: "tokenVariable"
  },
  embedBlock: {
    base: "embedBlock",
    focus: "embedBlockFocus"
  },
  hashtag: "hashtag",
  heading: {
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    h5: "h5",
    h6: "h6"
  },
  hr: "hr",
  image: "editor-image",
  indent: "indent",
  inlineImage: "inline-editor-image",
  layoutContainer: "layoutContainer",
  layoutItem: "layoutItem",
  link: "link",
  list: {
    checklist: "checklist",
    listitem: "listItem",
    listitemChecked: "listItemChecked",
    listitemUnchecked: "listItemUnchecked",
    nested: {
      listitem: "nestedListItem"
    },
    olDepth: [
      "ol1",
      "ol2",
      "ol3",
      "ol4",
      "ol5"
    ],
    ul: "ul"
  },
  ltr: "ltr",
  mark: "mark",
  markOverlap: "markOverlap",
  paragraph: "paragraph",
  quote: "quote",
  rtl: "rtl",
  table: "table",
  tableAddColumns: "tableAddColumns",
  tableAddRows: "tableAddRows",
  tableCell: "tableCell",
  tableCellActionButton: "tableCellActionButton",
  tableCellActionButtonContainer: "tableCellActionButtonContainer",
  tableCellEditing: "tableCellEditing",
  tableCellHeader: "tableCellHeader",
  tableCellPrimarySelected: "tableCellPrimarySelected",
  tableCellResizer: "tableCellResizer",
  tableCellSelected: "tableCellSelected",
  tableCellSortedIndicator: "tableCellSortedIndicator",
  tableResizeRuler: "tableCellResizeRuler",
  tableSelected: "tableSelected",
  tableSelection: "tableSelection",
  text: {
    bold: "textBold",
    code: "textCode",
    italic: "textItalic",
    strikethrough: "textStrikethrough",
    subscript: "textSubscript",
    superscript: "textSuperscript",
    underline: "textUnderline",
    underlineStrikethrough: "textUnderlineStrikethrough"
  }
};
var PlaygroundEditorTheme_default = theme;

// src/components/index.tsx
init_SharedHistoryContext();

// src/components/editor/plugins/TablePlugin.tsx
init_cjs_shims();
var import_LexicalComposerContext7 = require("@lexical/react/LexicalComposerContext");
var import_table2 = require("@lexical/table");
var import_lexical11 = require("lexical");
var import_react13 = require("react");
var React18 = __toESM(require("react"));

// src/components/editor/shared/invariant.ts
init_cjs_shims();
function invariant(cond, message, ...args) {
  if (cond) {
    return;
  }
  throw new Error(
    "Internal Lexical error: invariant() is meant to be replaced at compile time. There is no runtime version. Error: " + message
  );
}

// src/components/editor/ui/Button.tsx
init_cjs_shims();
var React15 = __toESM(require("react"));

// src/components/editor/utils/joinClasses.ts
init_cjs_shims();
function joinClasses(...args) {
  return args.filter(Boolean).join(" ");
}

// src/components/editor/ui/Button.tsx
function Button({
  "data-test-id": dataTestId,
  children,
  className,
  onClick,
  disabled,
  small,
  title
}) {
  return /* @__PURE__ */ React15.createElement(
    "button",
    __spreadValues({
      disabled,
      className: joinClasses(
        "Button__root",
        disabled && "Button__disabled",
        small && "Button__small",
        className
      ),
      onClick,
      title,
      "aria-label": title
    }, dataTestId && { "data-test-id": dataTestId }),
    children
  );
}

// src/components/editor/ui/Dialog.tsx
init_cjs_shims();
var React16 = __toESM(require("react"));
function DialogButtonsList({ children }) {
  return /* @__PURE__ */ React16.createElement("div", { className: "DialogButtonsList" }, children);
}
function DialogActions({
  "data-test-id": dataTestId,
  children
}) {
  return /* @__PURE__ */ React16.createElement("div", { className: "DialogActions", "data-test-id": dataTestId }, children);
}

// src/components/editor/ui/TextInput.tsx
init_cjs_shims();
var React17 = __toESM(require("react"));
function TextInput({
  label,
  value,
  onChange,
  placeholder = "",
  "data-test-id": dataTestId,
  type = "text"
}) {
  return /* @__PURE__ */ React17.createElement("div", { className: "Input__wrapper" }, /* @__PURE__ */ React17.createElement("label", { className: "Input__label" }, label), /* @__PURE__ */ React17.createElement(
    "input",
    {
      type,
      className: "Input__input",
      placeholder,
      value,
      onChange: (e) => {
        onChange(e.target.value);
      },
      "data-test-id": dataTestId
    }
  ));
}

// src/components/editor/plugins/TablePlugin.tsx
var INSERT_NEW_TABLE_COMMAND = (0, import_lexical11.createCommand)("INSERT_NEW_TABLE_COMMAND");
var CellContext = (0, import_react13.createContext)({
  cellEditorConfig: null,
  cellEditorPlugins: null,
  set: () => {
  }
});
function TableContext({ children }) {
  const [contextValue, setContextValue] = (0, import_react13.useState)({
    cellEditorConfig: null,
    cellEditorPlugins: null
  });
  return /* @__PURE__ */ React18.createElement(
    CellContext.Provider,
    {
      value: (0, import_react13.useMemo)(
        () => ({
          cellEditorConfig: contextValue.cellEditorConfig,
          cellEditorPlugins: contextValue.cellEditorPlugins,
          set: (cellEditorConfig, cellEditorPlugins) => {
            setContextValue({ cellEditorConfig, cellEditorPlugins });
          }
        }),
        [contextValue.cellEditorConfig, contextValue.cellEditorPlugins]
      )
    },
    children
  );
}
function InsertTableDialog({
  activeEditor,
  onClose
}) {
  const [rows, setRows] = (0, import_react13.useState)("5");
  const [columns, setColumns] = (0, import_react13.useState)("5");
  const [isDisabled, setIsDisabled] = (0, import_react13.useState)(true);
  (0, import_react13.useEffect)(() => {
    const row = Number(rows);
    const column = Number(columns);
    if (row && row > 0 && row <= 500 && column && column > 0 && column <= 50) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [rows, columns]);
  const onClick = () => {
    activeEditor.dispatchCommand(import_table2.INSERT_TABLE_COMMAND, {
      columns,
      rows
    });
    onClose();
  };
  return /* @__PURE__ */ React18.createElement(React18.Fragment, null, /* @__PURE__ */ React18.createElement(
    TextInput,
    {
      placeholder: "# of rows (1-500)",
      label: "Rows",
      onChange: setRows,
      value: rows,
      "data-test-id": "table-modal-rows",
      type: "number"
    }
  ), /* @__PURE__ */ React18.createElement(
    TextInput,
    {
      placeholder: "# of columns (1-50)",
      label: "Columns",
      onChange: setColumns,
      value: columns,
      "data-test-id": "table-modal-columns",
      type: "number"
    }
  ), /* @__PURE__ */ React18.createElement(DialogActions, { "data-test-id": "table-model-confirm-insert" }, /* @__PURE__ */ React18.createElement(Button, { disabled: isDisabled, onClick }, "Confirm")));
}

// src/components/editor/index.tsx
init_cjs_shims();
var import_LexicalAutoFocusPlugin2 = require("@lexical/react/LexicalAutoFocusPlugin");
var import_LexicalCheckListPlugin = require("@lexical/react/LexicalCheckListPlugin");
var import_LexicalClearEditorPlugin = require("@lexical/react/LexicalClearEditorPlugin");
var import_LexicalClickableLinkPlugin = require("@lexical/react/LexicalClickableLinkPlugin");
var import_LexicalErrorBoundary2 = __toESM(require("@lexical/react/LexicalErrorBoundary"));
var import_LexicalHashtagPlugin2 = require("@lexical/react/LexicalHashtagPlugin");
var import_LexicalHistoryPlugin3 = require("@lexical/react/LexicalHistoryPlugin");
var import_LexicalHorizontalRulePlugin = require("@lexical/react/LexicalHorizontalRulePlugin");
var import_LexicalListPlugin = require("@lexical/react/LexicalListPlugin");
var import_LexicalRichTextPlugin2 = require("@lexical/react/LexicalRichTextPlugin");
var import_LexicalTabIndentationPlugin = require("@lexical/react/LexicalTabIndentationPlugin");
var import_LexicalTablePlugin = require("@lexical/react/LexicalTablePlugin");
var import_useLexicalEditable3 = require("@lexical/react/useLexicalEditable");
var React43 = __toESM(require("react"));
var import_react44 = require("react");

// src/components/editor/shared/canUseDOM.ts
init_cjs_shims();
var CAN_USE_DOM = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";

// src/components/editor/index.tsx
init_SharedHistoryContext();

// src/components/editor/plugins/ActionsPlugin/index.tsx
init_cjs_shims();
var import_react16 = __toESM(require("react"));
var import_file = require("@lexical/file");
var import_LexicalCollaborationContext2 = require("@lexical/react/LexicalCollaborationContext");
var import_LexicalComposerContext8 = require("@lexical/react/LexicalComposerContext");
var import_utils6 = require("@lexical/utils");
var import_yjs = require("@lexical/yjs");
var import_lexical12 = require("lexical");
var import_react17 = require("react");

// src/components/editor/hooks/useFlashMessage.tsx
init_cjs_shims();
function useFlashMessage() {
  return useFlashMessageContext();
}

// src/components/editor/hooks/useModal.tsx
init_cjs_shims();
var import_react15 = require("react");
var React20 = __toESM(require("react"));

// src/components/editor/ui/Modal.tsx
init_cjs_shims();
var React19 = __toESM(require("react"));
var import_react14 = require("react");
var import_react_dom2 = require("react-dom");
function PortalImpl({
  onClose,
  children,
  title,
  closeOnClickOutside
}) {
  const modalRef = (0, import_react14.useRef)(null);
  (0, import_react14.useEffect)(() => {
    if (modalRef.current !== null) {
      modalRef.current.focus();
    }
  }, []);
  (0, import_react14.useEffect)(() => {
    let modalOverlayElement = null;
    const handler = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };
    const clickOutsideHandler = (event) => {
      const target = event.target;
      if (modalRef.current !== null && !modalRef.current.contains(target) && closeOnClickOutside) {
        onClose();
      }
    };
    const modelElement = modalRef.current;
    if (modelElement !== null) {
      modalOverlayElement = modelElement.parentElement;
      if (modalOverlayElement !== null) {
        modalOverlayElement.addEventListener("click", clickOutsideHandler);
      }
    }
    window.addEventListener("keydown", handler);
    return () => {
      window.removeEventListener("keydown", handler);
      if (modalOverlayElement !== null) {
        modalOverlayElement == null ? void 0 : modalOverlayElement.removeEventListener("click", clickOutsideHandler);
      }
    };
  }, [closeOnClickOutside, onClose]);
  return /* @__PURE__ */ React19.createElement("div", { className: "Modal__overlay", role: "dialog" }, /* @__PURE__ */ React19.createElement("div", { className: "Modal__modal", tabIndex: -1, ref: modalRef }, /* @__PURE__ */ React19.createElement("h2", { className: "Modal__title" }, title), /* @__PURE__ */ React19.createElement(
    "button",
    {
      className: "Modal__closeButton",
      "aria-label": "Close modal",
      type: "button",
      onClick: onClose
    },
    "X"
  ), /* @__PURE__ */ React19.createElement("div", { className: "Modal__content" }, children)));
}
function Modal({
  onClose,
  children,
  title,
  closeOnClickOutside = false
}) {
  return (0, import_react_dom2.createPortal)(
    /* @__PURE__ */ React19.createElement(
      PortalImpl,
      {
        onClose,
        title,
        closeOnClickOutside
      },
      children
    ),
    document.body
  );
}

// src/components/editor/hooks/useModal.tsx
function useModal() {
  const [modalContent, setModalContent] = (0, import_react15.useState)(null);
  const onClose = (0, import_react15.useCallback)(() => {
    setModalContent(null);
  }, []);
  const modal = (0, import_react15.useMemo)(() => {
    if (modalContent === null) {
      return null;
    }
    const { title, content, closeOnClickOutside } = modalContent;
    return /* @__PURE__ */ React20.createElement(
      Modal,
      {
        onClose,
        title,
        closeOnClickOutside
      },
      content
    );
  }, [modalContent, onClose]);
  const showModal = (0, import_react15.useCallback)(
    (title, getContent, closeOnClickOutside = false) => {
      setModalContent({
        closeOnClickOutside,
        content: getContent(onClose),
        title
      });
    },
    [onClose]
  );
  return [modal, showModal];
}

// src/components/editor/utils/docSerialization.ts
init_cjs_shims();
function generateReader(reader) {
  return __asyncGenerator(this, null, function* () {
    let done = false;
    while (!done) {
      const res = yield new __await(reader.read());
      const { value } = res;
      if (value !== void 0) {
        yield value;
      }
      done = res.done;
    }
  });
}
function docFromHash(hash) {
  return __async(this, null, function* () {
    const m = /^#doc=(.*)$/.exec(hash);
    if (!m) {
      return null;
    }
    const ds = new DecompressionStream("gzip");
    const writer = ds.writable.getWriter();
    const b64 = atob(m[1].replace(/_/g, "/").replace(/-/g, "+"));
    const array = new Uint8Array(b64.length);
    for (let i = 0; i < b64.length; i++) {
      array[i] = b64.charCodeAt(i);
    }
    const closed = writer.write(array).then(() => writer.close());
    const output = [];
    try {
      for (var iter = __forAwait(generateReader(
        ds.readable.pipeThrough(new TextDecoderStream()).getReader()
      )), more, temp, error; more = !(temp = yield iter.next()).done; more = false) {
        const chunk = temp.value;
        output.push(chunk);
      }
    } catch (temp) {
      error = [temp];
    } finally {
      try {
        more && (temp = iter.return) && (yield temp.call(iter));
      } finally {
        if (error)
          throw error[0];
      }
    }
    yield closed;
    return JSON.parse(output.join(""));
  });
}

// src/components/editor/plugins/ActionsPlugin/index.tsx
function validateEditorState(editor) {
  return __async(this, null, function* () {
    const stringifiedEditorState = JSON.stringify(editor.getEditorState());
    let response = null;
    try {
      response = yield fetch("http://localhost:1235/validateEditorState", {
        body: stringifiedEditorState,
        headers: {
          Accept: "application/json",
          "Content-type": "application/json"
        },
        method: "POST"
      });
    } catch (e) {
    }
    if (response !== null && response.status === 403) {
      throw new Error(
        "Editor state validation failed! Server did not accept changes."
      );
    }
  });
}
function ActionsPlugin({
  isRichText,
  shouldPreserveNewLinesInMarkdown
}) {
  const [editor] = (0, import_LexicalComposerContext8.useLexicalComposerContext)();
  const [isEditable, setIsEditable] = (0, import_react17.useState)(() => editor.isEditable());
  const [isSpeechToText, setIsSpeechToText] = (0, import_react17.useState)(false);
  const [connected, setConnected] = (0, import_react17.useState)(false);
  const [isEditorEmpty, setIsEditorEmpty] = (0, import_react17.useState)(true);
  const [modal, showModal] = useModal();
  const showFlashMessage = useFlashMessage();
  const { isCollabActive } = (0, import_LexicalCollaborationContext2.useCollaborationContext)();
  (0, import_react17.useEffect)(() => {
    docFromHash(window.location.hash).then((doc) => {
      if (doc && doc.source === "Playground") {
        editor.setEditorState((0, import_file.editorStateFromSerializedDocument)(editor, doc));
        editor.dispatchCommand(import_lexical12.CLEAR_HISTORY_COMMAND, void 0);
      }
    });
  }, [editor]);
  (0, import_react17.useEffect)(() => {
    return (0, import_utils6.mergeRegister)(
      editor.registerEditableListener((editable) => {
        setIsEditable(editable);
      }),
      editor.registerCommand(
        import_yjs.CONNECTED_COMMAND,
        (payload) => {
          const isConnected = payload;
          setConnected(isConnected);
          return false;
        },
        import_lexical12.COMMAND_PRIORITY_EDITOR
      )
    );
  }, [editor]);
  (0, import_react17.useEffect)(() => {
    return editor.registerUpdateListener(
      ({ dirtyElements, prevEditorState, tags }) => {
        if (!isEditable && dirtyElements.size > 0 && !tags.has("historic") && !tags.has("collaboration")) {
          validateEditorState(editor);
        }
        editor.getEditorState().read(() => {
          const root = (0, import_lexical12.$getRoot)();
          const children = root.getChildren();
          if (children.length > 1) {
            setIsEditorEmpty(false);
          } else {
            if ((0, import_lexical12.$isParagraphNode)(children[0])) {
              const paragraphChildren = children[0].getChildren();
              setIsEditorEmpty(paragraphChildren.length === 0);
            } else {
              setIsEditorEmpty(false);
            }
          }
        });
      }
    );
  }, [editor, isEditable]);
  return /* @__PURE__ */ import_react16.default.createElement("div", { className: "actions" }, /* @__PURE__ */ import_react16.default.createElement(
    "div",
    {
      className: "action-button clear",
      onClick: () => {
        showModal("Clear editor", (onClose) => /* @__PURE__ */ import_react16.default.createElement(ShowClearDialog, { editor, onClose }));
      },
      title: "Clear",
      "aria-label": "Clear editor contents"
    },
    /* @__PURE__ */ import_react16.default.createElement("i", { className: "clear" })
  ), modal);
}
function ShowClearDialog({
  editor,
  onClose
}) {
  return /* @__PURE__ */ import_react16.default.createElement(import_react16.default.Fragment, null, "Are you sure you want to clear the editor?", /* @__PURE__ */ import_react16.default.createElement("div", { className: "Modal__content" }, /* @__PURE__ */ import_react16.default.createElement(
    Button,
    {
      onClick: () => {
        editor.dispatchCommand(import_lexical12.CLEAR_EDITOR_COMMAND, void 0);
        editor.focus();
        onClose();
      }
    },
    "Clear"
  ), " ", /* @__PURE__ */ import_react16.default.createElement(
    Button,
    {
      onClick: () => {
        editor.focus();
        onClose();
      }
    },
    "Cancel"
  )));
}

// src/components/editor/plugins/AutoEmbedPlugin/index.tsx
init_cjs_shims();
var import_LexicalAutoEmbedPlugin = require("@lexical/react/LexicalAutoEmbedPlugin");
var import_LexicalComposerContext10 = require("@lexical/react/LexicalComposerContext");
var import_react19 = require("react");
var import_react20 = __toESM(require("react"));
var ReactDOM2 = __toESM(require("react-dom"));

// src/components/editor/plugins/YouTubePlugin/index.ts
init_cjs_shims();
var import_LexicalComposerContext9 = require("@lexical/react/LexicalComposerContext");
var import_utils7 = require("@lexical/utils");
var import_lexical13 = require("lexical");
var import_react18 = require("react");
var INSERT_YOUTUBE_COMMAND = (0, import_lexical13.createCommand)(
  "INSERT_YOUTUBE_COMMAND"
);
function YouTubePlugin() {
  const [editor] = (0, import_LexicalComposerContext9.useLexicalComposerContext)();
  (0, import_react18.useEffect)(() => {
    if (!editor.hasNodes([YouTubeNode])) {
      throw new Error("YouTubePlugin: YouTubeNode not registered on editor");
    }
    return editor.registerCommand(
      INSERT_YOUTUBE_COMMAND,
      (payload) => {
        const youTubeNode = $createYouTubeNode(payload);
        (0, import_utils7.$insertNodeToNearestRoot)(youTubeNode);
        return true;
      },
      import_lexical13.COMMAND_PRIORITY_EDITOR
    );
  }, [editor]);
  return null;
}

// src/components/editor/plugins/AutoEmbedPlugin/index.tsx
var YoutubeEmbedConfig = {
  contentName: "Youtube Video",
  exampleUrl: "https://www.youtube.com/watch?v=jNQXAC9IVRw",
  // Icon for display.
  icon: /* @__PURE__ */ import_react20.default.createElement("i", { className: "icon youtube" }),
  insertNode: (editor, result) => {
    editor.dispatchCommand(INSERT_YOUTUBE_COMMAND, result.id);
  },
  keywords: ["youtube", "video"],
  // Determine if a given URL is a match and return url data.
  parseUrl: (url) => __async(void 0, null, function* () {
    const match = /^.*(youtu\.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/.exec(url);
    const id = match ? (match == null ? void 0 : match[2].length) === 11 ? match[2] : null : null;
    if (id != null) {
      return {
        id,
        url
      };
    }
    return null;
  }),
  type: "youtube-video"
};
var EmbedConfigs = [
  // TwitterEmbedConfig,
  YoutubeEmbedConfig
  //FigmaEmbedConfig,
];
function AutoEmbedMenuItem({
  index,
  isSelected,
  onClick,
  onMouseEnter,
  option
}) {
  let className = "item";
  if (isSelected) {
    className += " selected";
  }
  return /* @__PURE__ */ import_react20.default.createElement(
    "li",
    {
      key: option.key,
      tabIndex: -1,
      className,
      ref: option.setRefElement,
      role: "option",
      "aria-selected": isSelected,
      id: "typeahead-item-" + index,
      onMouseEnter,
      onClick
    },
    /* @__PURE__ */ import_react20.default.createElement("span", { className: "text" }, option.title)
  );
}
function AutoEmbedMenu({
  options,
  selectedItemIndex,
  onOptionClick,
  onOptionMouseEnter
}) {
  return /* @__PURE__ */ import_react20.default.createElement("div", { className: "typeahead-popover" }, /* @__PURE__ */ import_react20.default.createElement("ul", null, options.map((option, i) => /* @__PURE__ */ import_react20.default.createElement(
    AutoEmbedMenuItem,
    {
      index: i,
      isSelected: selectedItemIndex === i,
      onClick: () => onOptionClick(option, i),
      onMouseEnter: () => onOptionMouseEnter(i),
      key: option.key,
      option
    }
  ))));
}
var debounce = (callback, delay) => {
  let timeoutId;
  return (text) => {
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => {
      callback(text);
    }, delay);
  };
};
function AutoEmbedDialog({
  embedConfig,
  onClose
}) {
  const [text, setText] = (0, import_react19.useState)("");
  const [editor] = (0, import_LexicalComposerContext10.useLexicalComposerContext)();
  const [embedResult, setEmbedResult] = (0, import_react19.useState)(null);
  const validateText = (0, import_react19.useMemo)(
    () => debounce((inputText) => {
      const urlMatch = import_LexicalAutoEmbedPlugin.URL_MATCHER.exec(inputText);
      if (embedConfig != null && inputText != null && urlMatch != null) {
        Promise.resolve(embedConfig.parseUrl(inputText)).then(
          (parseResult) => {
            setEmbedResult(parseResult);
          }
        );
      } else if (embedResult != null) {
        setEmbedResult(null);
      }
    }, 200),
    [embedConfig, embedResult]
  );
  const onClick = () => {
    if (embedResult != null) {
      embedConfig.insertNode(editor, embedResult);
      onClose();
    }
  };
  return /* @__PURE__ */ import_react20.default.createElement("div", { style: { width: "600px" } }, /* @__PURE__ */ import_react20.default.createElement("div", { className: "Input__wrapper" }, /* @__PURE__ */ import_react20.default.createElement(
    "input",
    {
      type: "text",
      className: "Input__input",
      placeholder: embedConfig.exampleUrl,
      value: text,
      "data-test-id": `${embedConfig.type}-embed-modal-url`,
      onChange: (e) => {
        const { value } = e.target;
        setText(value);
        validateText(value);
      }
    }
  )), /* @__PURE__ */ import_react20.default.createElement(DialogActions, null, /* @__PURE__ */ import_react20.default.createElement(
    Button,
    {
      disabled: !embedResult,
      onClick,
      "data-test-id": `${embedConfig.type}-embed-modal-submit-btn`
    },
    "Embed"
  )));
}
function AutoEmbedPlugin() {
  const [modal, showModal] = useModal();
  const openEmbedModal = (embedConfig) => {
    showModal(`Embed ${embedConfig.contentName}`, (onClose) => /* @__PURE__ */ import_react20.default.createElement(AutoEmbedDialog, { embedConfig, onClose }));
  };
  const getMenuOptions = (activeEmbedConfig, embedFn, dismissFn) => {
    return [
      new import_LexicalAutoEmbedPlugin.AutoEmbedOption("Dismiss", {
        onSelect: dismissFn
      }),
      new import_LexicalAutoEmbedPlugin.AutoEmbedOption(`Embed ${activeEmbedConfig.contentName}`, {
        onSelect: embedFn
      })
    ];
  };
  return /* @__PURE__ */ import_react20.default.createElement(import_react20.default.Fragment, null, modal, /* @__PURE__ */ import_react20.default.createElement(
    import_LexicalAutoEmbedPlugin.LexicalAutoEmbedPlugin,
    {
      embedConfigs: EmbedConfigs,
      onOpenEmbedModalForConfig: openEmbedModal,
      getMenuOptions,
      menuRenderFn: (anchorElementRef, { selectedIndex, options, selectOptionAndCleanUp, setHighlightedIndex }) => anchorElementRef.current ? ReactDOM2.createPortal(
        /* @__PURE__ */ import_react20.default.createElement(
          "div",
          {
            className: "typeahead-popover auto-embed-menu",
            style: {
              marginLeft: `${Math.max(
                parseFloat(anchorElementRef.current.style.width) - 200,
                0
              )}px`,
              width: 200
            }
          },
          /* @__PURE__ */ import_react20.default.createElement(
            AutoEmbedMenu,
            {
              options,
              selectedItemIndex: selectedIndex,
              onOptionClick: (option, index) => {
                setHighlightedIndex(index);
                selectOptionAndCleanUp(option);
              },
              onOptionMouseEnter: (index) => {
                setHighlightedIndex(index);
              }
            }
          )
        ),
        anchorElementRef.current
      ) : null
    }
  ));
}

// src/components/editor/plugins/AutoLinkPlugin/index.tsx
init_cjs_shims();
var import_LexicalAutoLinkPlugin = require("@lexical/react/LexicalAutoLinkPlugin");
var React23 = __toESM(require("react"));
var URL_REGEX = /((https?:\/\/(www\.)?)|(www\.))[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/;
var EMAIL_REGEX = /(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
var MATCHERS = [
  (0, import_LexicalAutoLinkPlugin.createLinkMatcherWithRegExp)(URL_REGEX, (text) => {
    return text.startsWith("http") ? text : `https://${text}`;
  }),
  (0, import_LexicalAutoLinkPlugin.createLinkMatcherWithRegExp)(EMAIL_REGEX, (text) => {
    return `mailto:${text}`;
  })
];
function LexicalAutoLinkPlugin() {
  return /* @__PURE__ */ React23.createElement(import_LexicalAutoLinkPlugin.AutoLinkPlugin, { matchers: MATCHERS });
}

// src/components/editor/plugins/CodeActionMenuPlugin/index.tsx
init_cjs_shims();
var import_code4 = require("@lexical/code");
var import_LexicalComposerContext11 = require("@lexical/react/LexicalComposerContext");
var import_lexical16 = require("lexical");
var import_react24 = require("react");
var React26 = __toESM(require("react"));
var import_react_dom3 = require("react-dom");

// src/components/editor/plugins/CodeActionMenuPlugin/components/CopyButton/index.tsx
init_cjs_shims();
var import_code2 = require("@lexical/code");
var import_lexical14 = require("lexical");
var React24 = __toESM(require("react"));
var import_react22 = require("react");

// src/components/editor/plugins/CodeActionMenuPlugin/utils.ts
init_cjs_shims();
var import_lodash_es = require("lodash-es");
var import_react21 = require("react");
function useDebounce(fn, ms, maxWait) {
  const funcRef = (0, import_react21.useRef)(null);
  funcRef.current = fn;
  return (0, import_react21.useMemo)(
    () => (0, import_lodash_es.debounce)(
      (...args) => {
        if (funcRef.current) {
          funcRef.current(...args);
        }
      },
      ms,
      { maxWait }
    ),
    [ms, maxWait]
  );
}

// src/components/editor/plugins/CodeActionMenuPlugin/components/CopyButton/index.tsx
function CopyButton({ editor, getCodeDOMNode }) {
  const [isCopyCompleted, setCopyCompleted] = (0, import_react22.useState)(false);
  const removeSuccessIcon = useDebounce(() => {
    setCopyCompleted(false);
  }, 1e3);
  function handleClick() {
    return __async(this, null, function* () {
      const codeDOMNode = getCodeDOMNode();
      if (!codeDOMNode) {
        return;
      }
      let content = "";
      editor.update(() => {
        const codeNode = (0, import_lexical14.$getNearestNodeFromDOMNode)(codeDOMNode);
        if ((0, import_code2.$isCodeNode)(codeNode)) {
          content = codeNode.getTextContent();
        }
        const selection = (0, import_lexical14.$getSelection)();
        (0, import_lexical14.$setSelection)(selection);
      });
      try {
        yield navigator.clipboard.writeText(content);
        setCopyCompleted(true);
        removeSuccessIcon();
      } catch (err) {
        console.error("Failed to copy: ", err);
      }
    });
  }
  return /* @__PURE__ */ React24.createElement("button", { className: "menu-item", onClick: handleClick, "aria-label": "copy" }, isCopyCompleted ? /* @__PURE__ */ React24.createElement("i", { className: "format success" }) : /* @__PURE__ */ React24.createElement("i", { className: "format copy" }));
}

// src/components/editor/plugins/CodeActionMenuPlugin/components/PrettierButton/index.tsx
init_cjs_shims();
var import_code3 = require("@lexical/code");
var import_lexical15 = require("lexical");
var React25 = __toESM(require("react"));
var import_react23 = require("react");
var PRETTIER_PARSER_MODULES = {
  css: () => import("prettier/parser-postcss"),
  html: () => import("prettier/parser-html"),
  js: () => import("prettier/parser-babel"),
  markdown: () => import("prettier/parser-markdown")
};
function loadPrettierParserByLang(lang) {
  return __async(this, null, function* () {
    const dynamicImport = PRETTIER_PARSER_MODULES[lang];
    return yield dynamicImport();
  });
}
function loadPrettierFormat() {
  return __async(this, null, function* () {
    const { format } = yield import("prettier/standalone");
    return format;
  });
}
var PRETTIER_OPTIONS_BY_LANG = {
  css: {
    parser: "css"
  },
  html: {
    parser: "html"
  },
  js: {
    parser: "babel"
  },
  markdown: {
    parser: "markdown"
  }
};
var LANG_CAN_BE_PRETTIER = Object.keys(PRETTIER_OPTIONS_BY_LANG);
function canBePrettier(lang) {
  return LANG_CAN_BE_PRETTIER.includes(lang);
}
function getPrettierOptions(lang) {
  const options = PRETTIER_OPTIONS_BY_LANG[lang];
  if (!options) {
    throw new Error(
      `CodeActionMenuPlugin: Prettier does not support this language: ${lang}`
    );
  }
  return options;
}
function PrettierButton({ lang, editor, getCodeDOMNode }) {
  const [syntaxError, setSyntaxError] = (0, import_react23.useState)("");
  const [tipsVisible, setTipsVisible] = (0, import_react23.useState)(false);
  function handleClick() {
    return __async(this, null, function* () {
      const codeDOMNode = getCodeDOMNode();
      try {
        const format = yield loadPrettierFormat();
        const options = getPrettierOptions(lang);
        options.plugins = [yield loadPrettierParserByLang(lang)];
        if (!codeDOMNode) {
          return;
        }
        editor.update(() => __async(this, null, function* () {
          const codeNode = (0, import_lexical15.$getNearestNodeFromDOMNode)(codeDOMNode);
          if ((0, import_code3.$isCodeNode)(codeNode)) {
            const content = codeNode.getTextContent();
            let parsed = "";
            try {
              parsed = yield format(content, options);
            } catch (error) {
              setError(error);
            }
            if (parsed !== "") {
              const selection = codeNode.select(0);
              selection.insertText(parsed);
              setSyntaxError("");
              setTipsVisible(false);
            }
          }
        }));
      } catch (error) {
        setError(error);
      }
    });
  }
  function setError(error) {
    if (error instanceof Error) {
      setSyntaxError(error.message);
      setTipsVisible(true);
    } else {
      console.error("Unexpected error: ", error);
    }
  }
  function handleMouseEnter() {
    if (syntaxError !== "") {
      setTipsVisible(true);
    }
  }
  function handleMouseLeave() {
    if (syntaxError !== "") {
      setTipsVisible(false);
    }
  }
  return /* @__PURE__ */ React25.createElement("div", { className: "prettier-wrapper" }, /* @__PURE__ */ React25.createElement(
    "button",
    {
      className: "menu-item",
      onClick: handleClick,
      onMouseEnter: handleMouseEnter,
      onMouseLeave: handleMouseLeave,
      "aria-label": "prettier"
    },
    syntaxError ? /* @__PURE__ */ React25.createElement("i", { className: "format prettier-error" }) : /* @__PURE__ */ React25.createElement("i", { className: "format prettier" })
  ), tipsVisible ? /* @__PURE__ */ React25.createElement("pre", { className: "code-error-tips" }, syntaxError) : null);
}

// src/components/editor/plugins/CodeActionMenuPlugin/index.tsx
var CODE_PADDING = 8;
function CodeActionMenuContainer({
  anchorElem
}) {
  const [editor] = (0, import_LexicalComposerContext11.useLexicalComposerContext)();
  const [lang, setLang] = (0, import_react24.useState)("");
  const [isShown, setShown] = (0, import_react24.useState)(false);
  const [shouldListenMouseMove, setShouldListenMouseMove] = (0, import_react24.useState)(false);
  const [position, setPosition] = (0, import_react24.useState)({
    right: "0",
    top: "0"
  });
  const codeSetRef = (0, import_react24.useRef)(/* @__PURE__ */ new Set());
  const codeDOMNodeRef = (0, import_react24.useRef)(null);
  function getCodeDOMNode() {
    return codeDOMNodeRef.current;
  }
  const debouncedOnMouseMove = useDebounce(
    (event) => {
      const { codeDOMNode, isOutside } = getMouseInfo(event);
      if (isOutside) {
        setShown(false);
        return;
      }
      if (!codeDOMNode) {
        return;
      }
      codeDOMNodeRef.current = codeDOMNode;
      let codeNode = null;
      let _lang = "";
      editor.update(() => {
        const maybeCodeNode = (0, import_lexical16.$getNearestNodeFromDOMNode)(codeDOMNode);
        if ((0, import_code4.$isCodeNode)(maybeCodeNode)) {
          codeNode = maybeCodeNode;
          _lang = codeNode.getLanguage() || "";
        }
      });
      if (codeNode) {
        const { y: editorElemY, right: editorElemRight } = anchorElem.getBoundingClientRect();
        const { y, right } = codeDOMNode.getBoundingClientRect();
        setLang(_lang);
        setShown(true);
        setPosition({
          right: `${editorElemRight - right + CODE_PADDING}px`,
          top: `${y - editorElemY}px`
        });
      }
    },
    50,
    1e3
  );
  (0, import_react24.useEffect)(() => {
    if (!shouldListenMouseMove) {
      return;
    }
    document.addEventListener("mousemove", debouncedOnMouseMove);
    return () => {
      setShown(false);
      debouncedOnMouseMove.cancel();
      document.removeEventListener("mousemove", debouncedOnMouseMove);
    };
  }, [shouldListenMouseMove, debouncedOnMouseMove]);
  editor.registerMutationListener(import_code4.CodeNode, (mutations) => {
    editor.getEditorState().read(() => {
      for (const [key, type] of mutations) {
        switch (type) {
          case "created":
            codeSetRef.current.add(key);
            setShouldListenMouseMove(codeSetRef.current.size > 0);
            break;
          case "destroyed":
            codeSetRef.current.delete(key);
            setShouldListenMouseMove(codeSetRef.current.size > 0);
            break;
          default:
            break;
        }
      }
    });
  });
  const normalizedLang = (0, import_code4.normalizeCodeLang)(lang);
  const codeFriendlyName = (0, import_code4.getLanguageFriendlyName)(lang);
  return /* @__PURE__ */ React26.createElement(React26.Fragment, null, isShown ? /* @__PURE__ */ React26.createElement("div", { className: "code-action-menu-container", style: __spreadValues({}, position) }, /* @__PURE__ */ React26.createElement("div", { className: "code-highlight-language" }, codeFriendlyName), /* @__PURE__ */ React26.createElement(CopyButton, { editor, getCodeDOMNode }), canBePrettier(normalizedLang) ? /* @__PURE__ */ React26.createElement(
    PrettierButton,
    {
      editor,
      getCodeDOMNode,
      lang: normalizedLang
    }
  ) : null) : null);
}
function getMouseInfo(event) {
  const target = event.target;
  if (target && target instanceof HTMLElement) {
    const codeDOMNode = target.closest(
      "code.code"
    );
    const isOutside = !(codeDOMNode || target.closest("div.code-action-menu-container"));
    return { codeDOMNode, isOutside };
  } else {
    return { codeDOMNode: null, isOutside: true };
  }
}
function CodeActionMenuPlugin({
  anchorElem = document.body
}) {
  return (0, import_react_dom3.createPortal)(
    /* @__PURE__ */ React26.createElement(CodeActionMenuContainer, { anchorElem }),
    anchorElem
  );
}

// src/components/editor/plugins/CodeHighlightPlugin/index.ts
init_cjs_shims();
var import_code5 = require("@lexical/code");
var import_LexicalComposerContext12 = require("@lexical/react/LexicalComposerContext");
var import_react25 = require("react");
function CodeHighlightPlugin() {
  const [editor] = (0, import_LexicalComposerContext12.useLexicalComposerContext)();
  (0, import_react25.useEffect)(() => {
    return (0, import_code5.registerCodeHighlighting)(editor);
  }, [editor]);
  return null;
}

// src/components/editor/plugins/ComponentPickerPlugin/index.tsx
init_cjs_shims();
var import_code6 = require("@lexical/code");
var import_list2 = require("@lexical/list");
var import_LexicalAutoEmbedPlugin2 = require("@lexical/react/LexicalAutoEmbedPlugin");
var import_LexicalComposerContext15 = require("@lexical/react/LexicalComposerContext");
var import_LexicalHorizontalRuleNode2 = require("@lexical/react/LexicalHorizontalRuleNode");
var import_LexicalTypeaheadMenuPlugin2 = require("@lexical/react/LexicalTypeaheadMenuPlugin");
var import_rich_text2 = require("@lexical/rich-text");
var import_selection2 = require("@lexical/selection");
var import_table3 = require("@lexical/table");
var import_lexical19 = require("lexical");
var import_react30 = require("react");
var React31 = __toESM(require("react"));
var ReactDOM3 = __toESM(require("react-dom"));

// src/components/editor/plugins/ImagesPlugin/index.tsx
init_cjs_shims();
var import_LexicalComposerContext13 = require("@lexical/react/LexicalComposerContext");
var import_utils10 = require("@lexical/utils");
var import_lexical17 = require("lexical");
var import_react26 = require("react");
var React28 = __toESM(require("react"));
init_ImageNode2();

// src/components/editor/ui/FileInput.tsx
init_cjs_shims();
var React27 = __toESM(require("react"));
function FileInput({
  accept,
  label,
  onChange,
  "data-test-id": dataTestId
}) {
  return /* @__PURE__ */ React27.createElement("div", { className: "Input__wrapper" }, /* @__PURE__ */ React27.createElement("label", { className: "Input__label" }, label), /* @__PURE__ */ React27.createElement(
    "input",
    {
      type: "file",
      accept,
      className: "Input__input",
      onChange: (e) => onChange(e.target.files),
      "data-test-id": dataTestId
    }
  ));
}

// src/components/editor/plugins/ImagesPlugin/index.tsx
var getDOMSelection = (targetWindow) => CAN_USE_DOM ? (targetWindow || window).getSelection() : null;
var INSERT_IMAGE_COMMAND = (0, import_lexical17.createCommand)("INSERT_IMAGE_COMMAND");
function InsertImageUriDialogBody({
  onClick
}) {
  const [src, setSrc] = (0, import_react26.useState)("");
  const [altText, setAltText] = (0, import_react26.useState)("");
  const isDisabled = src === "";
  return /* @__PURE__ */ React28.createElement(React28.Fragment, null, /* @__PURE__ */ React28.createElement(
    TextInput,
    {
      label: "Image URL",
      placeholder: "i.e. https://source.unsplash.com/random",
      onChange: setSrc,
      value: src,
      "data-test-id": "image-modal-url-input"
    }
  ), /* @__PURE__ */ React28.createElement(
    TextInput,
    {
      label: "Alt Text",
      placeholder: "Random unsplash image",
      onChange: setAltText,
      value: altText,
      "data-test-id": "image-modal-alt-text-input"
    }
  ), /* @__PURE__ */ React28.createElement(DialogActions, null, /* @__PURE__ */ React28.createElement(
    Button,
    {
      "data-test-id": "image-modal-confirm-btn",
      disabled: isDisabled,
      onClick: () => onClick({ altText, src })
    },
    "Confirm"
  )));
}
function InsertImageUploadedDialogBody({
  onClick
}) {
  const [src, setSrc] = (0, import_react26.useState)("");
  const [altText, setAltText] = (0, import_react26.useState)("");
  const isDisabled = src === "";
  const loadImage = (files) => {
    const reader = new FileReader();
    reader.onload = function() {
      if (typeof reader.result === "string") {
        setSrc(reader.result);
      }
      return "";
    };
    if (files !== null) {
      reader.readAsDataURL(files[0]);
    }
  };
  return /* @__PURE__ */ React28.createElement(React28.Fragment, null, /* @__PURE__ */ React28.createElement(
    FileInput,
    {
      label: "Image Upload",
      onChange: loadImage,
      accept: "image/*",
      "data-test-id": "image-modal-file-upload"
    }
  ), /* @__PURE__ */ React28.createElement(
    TextInput,
    {
      label: "Alt Text",
      placeholder: "Descriptive alternative text",
      onChange: setAltText,
      value: altText,
      "data-test-id": "image-modal-alt-text-input"
    }
  ), /* @__PURE__ */ React28.createElement(DialogActions, null, /* @__PURE__ */ React28.createElement(
    Button,
    {
      "data-test-id": "image-modal-file-upload-btn",
      disabled: isDisabled,
      onClick: () => onClick({ altText, src })
    },
    "Confirm"
  )));
}
function InsertImageDialog({
  activeEditor,
  onClose
}) {
  const [mode, setMode] = (0, import_react26.useState)(null);
  const hasModifier = (0, import_react26.useRef)(false);
  (0, import_react26.useEffect)(() => {
    hasModifier.current = false;
    const handler = (e) => {
      hasModifier.current = e.altKey;
    };
    document.addEventListener("keydown", handler);
    return () => {
      document.removeEventListener("keydown", handler);
    };
  }, [activeEditor]);
  const onClick = (payload) => {
    activeEditor.dispatchCommand(INSERT_IMAGE_COMMAND, payload);
    onClose();
  };
  return /* @__PURE__ */ React28.createElement(React28.Fragment, null, !mode && /* @__PURE__ */ React28.createElement(DialogButtonsList, null, /* @__PURE__ */ React28.createElement(
    Button,
    {
      "data-test-id": "image-modal-option-url",
      onClick: () => setMode("url")
    },
    "URL"
  ), /* @__PURE__ */ React28.createElement(
    Button,
    {
      "data-test-id": "image-modal-option-file",
      onClick: () => setMode("file")
    },
    "File"
  )), mode === "url" && /* @__PURE__ */ React28.createElement(InsertImageUriDialogBody, { onClick }), mode === "file" && /* @__PURE__ */ React28.createElement(InsertImageUploadedDialogBody, { onClick }));
}
function ImagesPlugin({
  captionsEnabled
}) {
  const [editor] = (0, import_LexicalComposerContext13.useLexicalComposerContext)();
  (0, import_react26.useEffect)(() => {
    if (!editor.hasNodes([ImageNode])) {
      throw new Error("ImagesPlugin: ImageNode not registered on editor");
    }
    return (0, import_utils10.mergeRegister)(
      editor.registerCommand(
        INSERT_IMAGE_COMMAND,
        (payload) => {
          const imageNode = $createImageNode(payload);
          (0, import_lexical17.$insertNodes)([imageNode]);
          if ((0, import_lexical17.$isRootOrShadowRoot)(imageNode.getParentOrThrow())) {
            (0, import_utils10.$wrapNodeInElement)(imageNode, import_lexical17.$createParagraphNode).selectEnd();
          }
          return true;
        },
        import_lexical17.COMMAND_PRIORITY_EDITOR
      ),
      editor.registerCommand(
        import_lexical17.DRAGSTART_COMMAND,
        (event) => {
          return $onDragStart(event);
        },
        import_lexical17.COMMAND_PRIORITY_HIGH
      ),
      editor.registerCommand(
        import_lexical17.DRAGOVER_COMMAND,
        (event) => {
          return $onDragover(event);
        },
        import_lexical17.COMMAND_PRIORITY_LOW
      ),
      editor.registerCommand(
        import_lexical17.DROP_COMMAND,
        (event) => {
          return $onDrop(event, editor);
        },
        import_lexical17.COMMAND_PRIORITY_HIGH
      )
    );
  }, [captionsEnabled, editor]);
  return null;
}
function $onDragStart(event) {
  const node = $getImageNodeInSelection();
  if (!node) {
    return false;
  }
  const dataTransfer = event.dataTransfer;
  if (!dataTransfer) {
    return false;
  }
  dataTransfer.setData("text/plain", "_");
  dataTransfer.setData(
    "application/x-lexical-drag",
    JSON.stringify({
      data: {
        altText: node.__altText,
        caption: node.__caption,
        height: node.__height,
        key: node.getKey(),
        maxWidth: node.__maxWidth,
        showCaption: node.__showCaption,
        src: node.__src,
        width: node.__width
      },
      type: "image"
    })
  );
  return true;
}
function $onDragover(event) {
  const node = $getImageNodeInSelection();
  if (!node) {
    return false;
  }
  if (!canDropImage(event)) {
    event.preventDefault();
  }
  return true;
}
function $onDrop(event, editor) {
  const node = $getImageNodeInSelection();
  if (!node) {
    return false;
  }
  const data = getDragImageData(event);
  if (!data) {
    return false;
  }
  event.preventDefault();
  if (canDropImage(event)) {
    const range = getDragSelection(event);
    node.remove();
    const rangeSelection = (0, import_lexical17.$createRangeSelection)();
    if (range !== null && range !== void 0) {
      rangeSelection.applyDOMRange(range);
    }
    (0, import_lexical17.$setSelection)(rangeSelection);
    editor.dispatchCommand(INSERT_IMAGE_COMMAND, data);
  }
  return true;
}
function $getImageNodeInSelection() {
  const selection = (0, import_lexical17.$getSelection)();
  if (!(0, import_lexical17.$isNodeSelection)(selection)) {
    return null;
  }
  const nodes = selection.getNodes();
  const node = nodes[0];
  return $isImageNode(node) ? node : null;
}
function getDragImageData(event) {
  var _a;
  const dragData = (_a = event.dataTransfer) == null ? void 0 : _a.getData("application/x-lexical-drag");
  if (!dragData) {
    return null;
  }
  const { type, data } = JSON.parse(dragData);
  if (type !== "image") {
    return null;
  }
  return data;
}
function canDropImage(event) {
  const target = event.target;
  return !!(target && target instanceof HTMLElement && !target.closest("code, span.editor-image") && target.parentElement && target.parentElement.closest("div.ContentEditable__root"));
}
function getDragSelection(event) {
  let range;
  const target = event.target;
  const targetWindow = target == null ? null : target.nodeType === 9 ? target.defaultView : target.ownerDocument.defaultView;
  const domSelection = getDOMSelection(targetWindow);
  if (document.caretRangeFromPoint) {
    range = document.caretRangeFromPoint(event.clientX, event.clientY);
  } else if (event.rangeParent && domSelection !== null) {
    domSelection.collapse(event.rangeParent, event.rangeOffset || 0);
    range = domSelection.getRangeAt(0);
  } else {
    throw Error(`Cannot get the selection when dragging`);
  }
  return range;
}

// src/components/editor/plugins/LayoutPlugin/InsertLayoutDialog.tsx
init_cjs_shims();
var React30 = __toESM(require("react"));
var import_react29 = require("react");

// src/components/editor/ui/DropDown.tsx
init_cjs_shims();
var React29 = __toESM(require("react"));
var import_react27 = require("react");
var import_react_dom4 = require("react-dom");
var DropDownContext = React29.createContext(null);
var dropDownPadding = 4;
function DropDownItem({
  children,
  className,
  onClick,
  title
}) {
  const ref = (0, import_react27.useRef)(null);
  const dropDownContext = React29.useContext(DropDownContext);
  if (dropDownContext === null) {
    throw new Error("DropDownItem must be used within a DropDown");
  }
  const { registerItem } = dropDownContext;
  (0, import_react27.useEffect)(() => {
    if (ref && ref.current) {
      registerItem(ref);
    }
  }, [ref, registerItem]);
  return /* @__PURE__ */ React29.createElement(
    "button",
    {
      className,
      onClick,
      ref,
      title,
      type: "button"
    },
    children
  );
}
function DropDownItems({
  children,
  dropDownRef,
  onClose
}) {
  const [items, setItems] = (0, import_react27.useState)();
  const [highlightedItem, setHighlightedItem] = (0, import_react27.useState)();
  const registerItem = (0, import_react27.useCallback)(
    (itemRef) => {
      setItems((prev) => prev ? [...prev, itemRef] : [itemRef]);
    },
    [setItems]
  );
  const handleKeyDown = (event) => {
    if (!items) {
      return;
    }
    const key = event.key;
    if (["Escape", "ArrowUp", "ArrowDown", "Tab"].includes(key)) {
      event.preventDefault();
    }
    if (key === "Escape" || key === "Tab") {
      onClose();
    } else if (key === "ArrowUp") {
      setHighlightedItem((prev) => {
        if (!prev) {
          return items[0];
        }
        const index = items.indexOf(prev) - 1;
        return items[index === -1 ? items.length - 1 : index];
      });
    } else if (key === "ArrowDown") {
      setHighlightedItem((prev) => {
        if (!prev) {
          return items[0];
        }
        return items[items.indexOf(prev) + 1];
      });
    }
  };
  const contextValue = (0, import_react27.useMemo)(
    () => ({
      registerItem
    }),
    [registerItem]
  );
  (0, import_react27.useEffect)(() => {
    if (items && !highlightedItem) {
      setHighlightedItem(items[0]);
    }
    if (highlightedItem && highlightedItem.current) {
      highlightedItem.current.focus();
    }
  }, [items, highlightedItem]);
  return /* @__PURE__ */ React29.createElement(DropDownContext.Provider, { value: contextValue }, /* @__PURE__ */ React29.createElement("div", { className: "dropdown", ref: dropDownRef, onKeyDown: handleKeyDown }, children));
}
function DropDown({
  disabled = false,
  buttonLabel,
  buttonAriaLabel,
  buttonClassName,
  buttonIconClassName,
  children,
  stopCloseOnClickSelf
}) {
  const dropDownRef = (0, import_react27.useRef)(null);
  const buttonRef = (0, import_react27.useRef)(null);
  const [showDropDown, setShowDropDown] = (0, import_react27.useState)(false);
  const handleClose = () => {
    setShowDropDown(false);
    if (buttonRef && buttonRef.current) {
      buttonRef.current.focus();
    }
  };
  (0, import_react27.useEffect)(() => {
    const button = buttonRef.current;
    const dropDown = dropDownRef.current;
    if (showDropDown && button !== null && dropDown !== null) {
      const { top, left } = button.getBoundingClientRect();
      dropDown.style.top = `${top + button.offsetHeight + dropDownPadding}px`;
      dropDown.style.left = `${Math.min(
        left,
        window.innerWidth - dropDown.offsetWidth - 20
      )}px`;
    }
  }, [dropDownRef, buttonRef, showDropDown]);
  (0, import_react27.useEffect)(() => {
    const button = buttonRef.current;
    if (button !== null && showDropDown) {
      const handle = (event) => {
        const target = event.target;
        if (stopCloseOnClickSelf) {
          if (dropDownRef.current && dropDownRef.current.contains(target)) {
            return;
          }
        }
        if (!button.contains(target)) {
          setShowDropDown(false);
        }
      };
      document.addEventListener("click", handle);
      return () => {
        document.removeEventListener("click", handle);
      };
    }
  }, [dropDownRef, buttonRef, showDropDown, stopCloseOnClickSelf]);
  (0, import_react27.useEffect)(() => {
    const handleButtonPositionUpdate = () => {
      if (showDropDown) {
        const button = buttonRef.current;
        const dropDown = dropDownRef.current;
        if (button !== null && dropDown !== null) {
          const { top } = button.getBoundingClientRect();
          const newPosition = top + button.offsetHeight + dropDownPadding;
          if (newPosition !== dropDown.getBoundingClientRect().top) {
            dropDown.style.top = `${newPosition}px`;
          }
        }
      }
    };
    document.addEventListener("scroll", handleButtonPositionUpdate);
    return () => {
      document.removeEventListener("scroll", handleButtonPositionUpdate);
    };
  }, [buttonRef, dropDownRef, showDropDown]);
  return /* @__PURE__ */ React29.createElement(React29.Fragment, null, /* @__PURE__ */ React29.createElement(
    "button",
    {
      type: "button",
      disabled,
      "aria-label": buttonAriaLabel || buttonLabel,
      className: buttonClassName,
      onClick: () => setShowDropDown(!showDropDown),
      ref: buttonRef
    },
    buttonIconClassName && /* @__PURE__ */ React29.createElement("span", { className: buttonIconClassName }),
    buttonLabel && /* @__PURE__ */ React29.createElement("span", { className: "text dropdown-button-text" }, buttonLabel),
    /* @__PURE__ */ React29.createElement("i", { className: "chevron-down" })
  ), showDropDown && (0, import_react_dom4.createPortal)(
    /* @__PURE__ */ React29.createElement(DropDownItems, { dropDownRef, onClose: handleClose }, children),
    document.body
  ));
}

// src/components/editor/plugins/LayoutPlugin/LayoutPlugin.tsx
init_cjs_shims();
var import_LexicalComposerContext14 = require("@lexical/react/LexicalComposerContext");
var import_utils11 = require("@lexical/utils");
var import_lexical18 = require("lexical");
var import_react28 = require("react");
var INSERT_LAYOUT_COMMAND = (0, import_lexical18.createCommand)();
var UPDATE_LAYOUT_COMMAND = (0, import_lexical18.createCommand)();
function LayoutPlugin() {
  const [editor] = (0, import_LexicalComposerContext14.useLexicalComposerContext)();
  (0, import_react28.useEffect)(() => {
    if (!editor.hasNodes([LayoutContainerNode, LayoutItemNode])) {
      throw new Error(
        "LayoutPlugin: LayoutContainerNode, or LayoutItemNode not registered on editor"
      );
    }
    const $onEscape = (before) => {
      var _a, _b;
      const selection = (0, import_lexical18.$getSelection)();
      if ((0, import_lexical18.$isRangeSelection)(selection) && selection.isCollapsed() && selection.anchor.offset === 0) {
        const container = (0, import_utils11.$findMatchingParent)(
          selection.anchor.getNode(),
          $isLayoutContainerNode
        );
        if ($isLayoutContainerNode(container)) {
          const parent = container.getParent();
          const child = parent && (before ? parent.getFirstChild() : parent == null ? void 0 : parent.getLastChild());
          const descendant = before ? (_a = container.getFirstDescendant()) == null ? void 0 : _a.getKey() : (_b = container.getLastDescendant()) == null ? void 0 : _b.getKey();
          if (parent !== null && child === container && selection.anchor.key === descendant) {
            if (before) {
              container.insertBefore((0, import_lexical18.$createParagraphNode)());
            } else {
              container.insertAfter((0, import_lexical18.$createParagraphNode)());
            }
          }
        }
      }
      return false;
    };
    return (0, import_utils11.mergeRegister)(
      // When layout is the last child pressing down/right arrow will insert paragraph
      // below it to allow adding more content. It's similar what $insertBlockNode
      // (mainly for decorators), except it'll always be possible to continue adding
      // new content even if trailing paragraph is accidentally deleted
      editor.registerCommand(
        import_lexical18.KEY_ARROW_DOWN_COMMAND,
        () => $onEscape(false),
        import_lexical18.COMMAND_PRIORITY_LOW
      ),
      editor.registerCommand(
        import_lexical18.KEY_ARROW_RIGHT_COMMAND,
        () => $onEscape(false),
        import_lexical18.COMMAND_PRIORITY_LOW
      ),
      // When layout is the first child pressing up/left arrow will insert paragraph
      // above it to allow adding more content. It's similar what $insertBlockNode
      // (mainly for decorators), except it'll always be possible to continue adding
      // new content even if leading paragraph is accidentally deleted
      editor.registerCommand(
        import_lexical18.KEY_ARROW_UP_COMMAND,
        () => $onEscape(true),
        import_lexical18.COMMAND_PRIORITY_LOW
      ),
      editor.registerCommand(
        import_lexical18.KEY_ARROW_LEFT_COMMAND,
        () => $onEscape(true),
        import_lexical18.COMMAND_PRIORITY_LOW
      ),
      editor.registerCommand(
        INSERT_LAYOUT_COMMAND,
        (template) => {
          editor.update(() => {
            const container = $createLayoutContainerNode(template);
            const itemsCount = getItemsCountFromTemplate(template);
            for (let i = 0; i < itemsCount; i++) {
              container.append(
                $createLayoutItemNode().append((0, import_lexical18.$createParagraphNode)())
              );
            }
            (0, import_utils11.$insertNodeToNearestRoot)(container);
            container.selectStart();
          });
          return true;
        },
        import_lexical18.COMMAND_PRIORITY_EDITOR
      ),
      editor.registerCommand(
        UPDATE_LAYOUT_COMMAND,
        ({ template, nodeKey }) => {
          editor.update(() => {
            const container = (0, import_lexical18.$getNodeByKey)(nodeKey);
            if (!$isLayoutContainerNode(container)) {
              return;
            }
            const itemsCount = getItemsCountFromTemplate(template);
            const prevItemsCount = getItemsCountFromTemplate(
              container.getTemplateColumns()
            );
            if (itemsCount > prevItemsCount) {
              for (let i = prevItemsCount; i < itemsCount; i++) {
                container.append(
                  $createLayoutItemNode().append((0, import_lexical18.$createParagraphNode)())
                );
              }
            } else if (itemsCount < prevItemsCount) {
              for (let i = prevItemsCount - 1; i >= itemsCount; i--) {
                const layoutItem = container.getChildAtIndex(i);
                if ($isLayoutItemNode(layoutItem)) {
                  layoutItem.remove();
                }
              }
            }
            container.setTemplateColumns(template);
          });
          return true;
        },
        import_lexical18.COMMAND_PRIORITY_EDITOR
      ),
      // Structure enforcing transformers for each node type. In case nesting structure is not
      // "Container > Item" it'll unwrap nodes and convert it back
      // to regular content.
      editor.registerNodeTransform(LayoutItemNode, (node) => {
        const parent = node.getParent();
        if (!$isLayoutContainerNode(parent)) {
          const children = node.getChildren();
          for (const child of children) {
            node.insertBefore(child);
          }
          node.remove();
        }
      }),
      editor.registerNodeTransform(LayoutContainerNode, (node) => {
        const children = node.getChildren();
        if (!children.every($isLayoutItemNode)) {
          for (const child of children) {
            node.insertBefore(child);
          }
          node.remove();
        }
      })
    );
  }, [editor]);
  return null;
}
function getItemsCountFromTemplate(template) {
  return template.trim().split(/\s+/).length;
}

// src/components/editor/plugins/LayoutPlugin/InsertLayoutDialog.tsx
var LAYOUTS = [
  { label: "2 columns (equal width)", value: "1fr 1fr" },
  { label: "2 columns (25% - 75%)", value: "1fr 3fr" },
  { label: "3 columns (equal width)", value: "1fr 1fr 1fr" },
  { label: "3 columns (25% - 50% - 25%)", value: "1fr 2fr 1fr" },
  { label: "4 columns (equal width)", value: "1fr 1fr 1fr 1fr" }
];
function InsertLayoutDialog({
  activeEditor,
  onClose
}) {
  var _a;
  const [layout, setLayout] = (0, import_react29.useState)(LAYOUTS[0].value);
  const buttonLabel = (_a = LAYOUTS.find((item) => item.value === layout)) == null ? void 0 : _a.label;
  const onClick = () => {
    activeEditor.dispatchCommand(INSERT_LAYOUT_COMMAND, layout);
    onClose();
  };
  return /* @__PURE__ */ React30.createElement(React30.Fragment, null, /* @__PURE__ */ React30.createElement(
    DropDown,
    {
      buttonClassName: "toolbar-item dialog-dropdown",
      buttonLabel
    },
    LAYOUTS.map(({ label, value }) => /* @__PURE__ */ React30.createElement(
      DropDownItem,
      {
        key: value,
        className: "item",
        onClick: () => setLayout(value)
      },
      /* @__PURE__ */ React30.createElement("span", { className: "text" }, label)
    ))
  ), /* @__PURE__ */ React30.createElement(Button, { onClick }, "Insert"));
}

// src/components/editor/plugins/ComponentPickerPlugin/index.tsx
var ComponentPickerOption = class extends import_LexicalTypeaheadMenuPlugin2.MenuOption {
  constructor(title, options) {
    super(title);
    this.title = title;
    this.keywords = options.keywords || [];
    this.icon = options.icon;
    this.keyboardShortcut = options.keyboardShortcut;
    this.onSelect = options.onSelect.bind(this);
  }
};
function ComponentPickerMenuItem({
  index,
  isSelected,
  onClick,
  onMouseEnter,
  option
}) {
  let className = "item";
  if (isSelected) {
    className += " selected";
  }
  return /* @__PURE__ */ React31.createElement(
    "li",
    {
      key: option.key,
      tabIndex: -1,
      className,
      ref: option.setRefElement,
      role: "option",
      "aria-selected": isSelected,
      id: "typeahead-item-" + index,
      onMouseEnter,
      onClick
    },
    option.icon,
    /* @__PURE__ */ React31.createElement("span", { className: "text" }, option.title)
  );
}
function getDynamicOptions(editor, queryString) {
  const options = [];
  if (queryString == null) {
    return options;
  }
  const tableMatch = queryString.match(/^([1-9]\d?)(?:x([1-9]\d?)?)?$/);
  if (tableMatch !== null) {
    const rows = tableMatch[1];
    const colOptions = tableMatch[2] ? [tableMatch[2]] : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(String);
    options.push(
      ...colOptions.map(
        (columns) => new ComponentPickerOption(`${rows}x${columns} Table`, {
          icon: /* @__PURE__ */ React31.createElement("i", { className: "icon table" }),
          keywords: ["table"],
          onSelect: () => editor.dispatchCommand(import_table3.INSERT_TABLE_COMMAND, { columns, rows })
        })
      )
    );
  }
  return options;
}
function getBaseOptions(editor, showModal) {
  return [
    new ComponentPickerOption("Paragraph", {
      icon: /* @__PURE__ */ React31.createElement("i", { className: "icon paragraph" }),
      keywords: ["normal", "paragraph", "p", "text"],
      onSelect: () => editor.update(() => {
        const selection = (0, import_lexical19.$getSelection)();
        if ((0, import_lexical19.$isRangeSelection)(selection)) {
          (0, import_selection2.$setBlocksType)(selection, () => (0, import_lexical19.$createParagraphNode)());
        }
      })
    }),
    ...[1, 2, 3].map(
      (n) => new ComponentPickerOption(`Heading ${n}`, {
        icon: /* @__PURE__ */ React31.createElement("i", { className: `icon h${n}` }),
        keywords: ["heading", "header", `h${n}`],
        onSelect: () => editor.update(() => {
          const selection = (0, import_lexical19.$getSelection)();
          if ((0, import_lexical19.$isRangeSelection)(selection)) {
            (0, import_selection2.$setBlocksType)(selection, () => (0, import_rich_text2.$createHeadingNode)(`h${n}`));
          }
        })
      })
    ),
    new ComponentPickerOption("Table", {
      icon: /* @__PURE__ */ React31.createElement("i", { className: "icon table" }),
      keywords: ["table", "grid", "spreadsheet", "rows", "columns"],
      onSelect: () => showModal("Insert Table", (onClose) => /* @__PURE__ */ React31.createElement(InsertTableDialog, { activeEditor: editor, onClose }))
    }),
    new ComponentPickerOption("Numbered List", {
      icon: /* @__PURE__ */ React31.createElement("i", { className: "icon number" }),
      keywords: ["numbered list", "ordered list", "ol"],
      onSelect: () => editor.dispatchCommand(import_list2.INSERT_ORDERED_LIST_COMMAND, void 0)
    }),
    new ComponentPickerOption("Bulleted List", {
      icon: /* @__PURE__ */ React31.createElement("i", { className: "icon bullet" }),
      keywords: ["bulleted list", "unordered list", "ul"],
      onSelect: () => editor.dispatchCommand(import_list2.INSERT_UNORDERED_LIST_COMMAND, void 0)
    }),
    new ComponentPickerOption("Check List", {
      icon: /* @__PURE__ */ React31.createElement("i", { className: "icon check" }),
      keywords: ["check list", "todo list"],
      onSelect: () => editor.dispatchCommand(import_list2.INSERT_CHECK_LIST_COMMAND, void 0)
    }),
    new ComponentPickerOption("Quote", {
      icon: /* @__PURE__ */ React31.createElement("i", { className: "icon quote" }),
      keywords: ["block quote"],
      onSelect: () => editor.update(() => {
        const selection = (0, import_lexical19.$getSelection)();
        if ((0, import_lexical19.$isRangeSelection)(selection)) {
          (0, import_selection2.$setBlocksType)(selection, () => (0, import_rich_text2.$createQuoteNode)());
        }
      })
    }),
    new ComponentPickerOption("Code", {
      icon: /* @__PURE__ */ React31.createElement("i", { className: "icon code" }),
      keywords: ["javascript", "python", "js", "codeblock"],
      onSelect: () => editor.update(() => {
        const selection = (0, import_lexical19.$getSelection)();
        if ((0, import_lexical19.$isRangeSelection)(selection)) {
          if (selection.isCollapsed()) {
            (0, import_selection2.$setBlocksType)(selection, () => (0, import_code6.$createCodeNode)());
          } else {
            const textContent = selection.getTextContent();
            const codeNode = (0, import_code6.$createCodeNode)();
            selection.insertNodes([codeNode]);
            selection.insertRawText(textContent);
          }
        }
      })
    }),
    new ComponentPickerOption("Divider", {
      icon: /* @__PURE__ */ React31.createElement("i", { className: "icon horizontal-rule" }),
      keywords: ["horizontal rule", "divider", "hr"],
      onSelect: () => editor.dispatchCommand(import_LexicalHorizontalRuleNode2.INSERT_HORIZONTAL_RULE_COMMAND, void 0)
    }),
    ...EmbedConfigs.map(
      (embedConfig) => new ComponentPickerOption(`Embed ${embedConfig.contentName}`, {
        icon: embedConfig.icon,
        keywords: [...embedConfig.keywords, "embed"],
        onSelect: () => editor.dispatchCommand(import_LexicalAutoEmbedPlugin2.INSERT_EMBED_COMMAND, embedConfig.type)
      })
    ),
    new ComponentPickerOption("Image", {
      icon: /* @__PURE__ */ React31.createElement("i", { className: "icon image" }),
      keywords: ["image", "photo", "picture", "file"],
      onSelect: () => showModal("Insert Image", (onClose) => /* @__PURE__ */ React31.createElement(InsertImageDialog, { activeEditor: editor, onClose }))
    }),
    new ComponentPickerOption("Columns Layout", {
      icon: /* @__PURE__ */ React31.createElement("i", { className: "icon columns" }),
      keywords: ["columns", "layout", "grid"],
      onSelect: () => showModal("Insert Columns Layout", (onClose) => /* @__PURE__ */ React31.createElement(InsertLayoutDialog, { activeEditor: editor, onClose }))
    }),
    ...["left", "center", "right", "justify"].map(
      (alignment) => new ComponentPickerOption(`Align ${alignment}`, {
        icon: /* @__PURE__ */ React31.createElement("i", { className: `icon ${alignment}-align` }),
        keywords: ["align", "justify", alignment],
        onSelect: () => editor.dispatchCommand(import_lexical19.FORMAT_ELEMENT_COMMAND, alignment)
      })
    )
  ];
}
function ComponentPickerMenuPlugin() {
  const [editor] = (0, import_LexicalComposerContext15.useLexicalComposerContext)();
  const [modal, showModal] = useModal();
  const [queryString, setQueryString] = (0, import_react30.useState)(null);
  const checkForTriggerMatch = (0, import_LexicalTypeaheadMenuPlugin2.useBasicTypeaheadTriggerMatch)("/", {
    minLength: 0
  });
  const options = (0, import_react30.useMemo)(() => {
    const baseOptions = getBaseOptions(editor, showModal);
    if (!queryString) {
      return baseOptions;
    }
    const regex = new RegExp(queryString, "i");
    return [
      ...getDynamicOptions(editor, queryString),
      ...baseOptions.filter(
        (option) => regex.test(option.title) || option.keywords.some((keyword) => regex.test(keyword))
      )
    ];
  }, [editor, queryString, showModal]);
  const onSelectOption = (0, import_react30.useCallback)(
    (selectedOption, nodeToRemove, closeMenu, matchingString) => {
      editor.update(() => {
        nodeToRemove == null ? void 0 : nodeToRemove.remove();
        selectedOption.onSelect(matchingString);
        closeMenu();
      });
    },
    [editor]
  );
  return /* @__PURE__ */ React31.createElement(React31.Fragment, null, modal, /* @__PURE__ */ React31.createElement(
    import_LexicalTypeaheadMenuPlugin2.LexicalTypeaheadMenuPlugin,
    {
      onQueryChange: setQueryString,
      onSelectOption,
      triggerFn: checkForTriggerMatch,
      options,
      menuRenderFn: (anchorElementRef, { selectedIndex, selectOptionAndCleanUp, setHighlightedIndex }) => anchorElementRef.current && options.length ? ReactDOM3.createPortal(
        /* @__PURE__ */ React31.createElement("div", { className: "typeahead-popover component-picker-menu" }, /* @__PURE__ */ React31.createElement("ul", null, options.map((option, i) => /* @__PURE__ */ React31.createElement(
          ComponentPickerMenuItem,
          {
            index: i,
            isSelected: selectedIndex === i,
            onClick: () => {
              setHighlightedIndex(i);
              selectOptionAndCleanUp(option);
            },
            onMouseEnter: () => {
              setHighlightedIndex(i);
            },
            key: option.key,
            option
          }
        )))),
        anchorElementRef.current
      ) : null
    }
  ));
}

// src/components/editor/plugins/DragDropPastePlugin/index.ts
init_cjs_shims();
var import_LexicalComposerContext16 = require("@lexical/react/LexicalComposerContext");
var import_rich_text3 = require("@lexical/rich-text");
var import_utils12 = require("@lexical/utils");
var import_lexical20 = require("lexical");
var import_react31 = require("react");
var ACCEPTABLE_IMAGE_TYPES = [
  "image/",
  "image/heic",
  "image/heif",
  "image/gif",
  "image/webp"
];
function DragDropPaste() {
  const [editor] = (0, import_LexicalComposerContext16.useLexicalComposerContext)();
  (0, import_react31.useEffect)(() => {
    return editor.registerCommand(
      import_rich_text3.DRAG_DROP_PASTE,
      (files) => {
        (() => __async(this, null, function* () {
          const filesResult = yield (0, import_utils12.mediaFileReader)(
            files,
            [ACCEPTABLE_IMAGE_TYPES].flatMap((x) => x)
          );
          for (const { file, result } of filesResult) {
            if ((0, import_utils12.isMimeType)(file, ACCEPTABLE_IMAGE_TYPES)) {
              editor.dispatchCommand(INSERT_IMAGE_COMMAND, {
                altText: file.name,
                src: result
              });
            }
          }
        }))();
        return true;
      },
      import_lexical20.COMMAND_PRIORITY_LOW
    );
  }, [editor]);
  return null;
}

// src/components/editor/plugins/DraggableBlockPlugin/index.tsx
init_cjs_shims();
var import_LexicalComposerContext17 = require("@lexical/react/LexicalComposerContext");
var import_rich_text4 = require("@lexical/rich-text");
var import_utils13 = require("@lexical/utils");
var import_lexical21 = require("lexical");
var React32 = __toESM(require("react"));
var import_react32 = require("react");
var import_react_dom5 = require("react-dom");

// src/components/editor/utils/guard.ts
init_cjs_shims();
function isHTMLElement(x) {
  return x instanceof HTMLElement;
}

// src/components/editor/utils/point.ts
init_cjs_shims();
var Point = class {
  constructor(x, y) {
    this._x = x;
    this._y = y;
  }
  get x() {
    return this._x;
  }
  get y() {
    return this._y;
  }
  equals({ x, y }) {
    return this.x === x && this.y === y;
  }
  calcDeltaXTo({ x }) {
    return this.x - x;
  }
  calcDeltaYTo({ y }) {
    return this.y - y;
  }
  calcHorizontalDistanceTo(point) {
    return Math.abs(this.calcDeltaXTo(point));
  }
  calcVerticalDistance(point) {
    return Math.abs(this.calcDeltaYTo(point));
  }
  calcDistanceTo(point) {
    return Math.sqrt(
      Math.pow(this.calcDeltaXTo(point), 2) + Math.pow(this.calcDeltaYTo(point), 2)
    );
  }
};
function isPoint(x) {
  return x instanceof Point;
}

// src/components/editor/utils/rect.ts
init_cjs_shims();
var Rect = class _Rect {
  constructor(left, top, right, bottom) {
    const [physicTop, physicBottom] = top <= bottom ? [top, bottom] : [bottom, top];
    const [physicLeft, physicRight] = left <= right ? [left, right] : [right, left];
    this._top = physicTop;
    this._right = physicRight;
    this._left = physicLeft;
    this._bottom = physicBottom;
  }
  get top() {
    return this._top;
  }
  get right() {
    return this._right;
  }
  get bottom() {
    return this._bottom;
  }
  get left() {
    return this._left;
  }
  get width() {
    return Math.abs(this._left - this._right);
  }
  get height() {
    return Math.abs(this._bottom - this._top);
  }
  equals({ top, left, bottom, right }) {
    return top === this._top && bottom === this._bottom && left === this._left && right === this._right;
  }
  contains(target) {
    if (isPoint(target)) {
      const { x, y } = target;
      const isOnTopSide = y < this._top;
      const isOnBottomSide = y > this._bottom;
      const isOnLeftSide = x < this._left;
      const isOnRightSide = x > this._right;
      const result = !isOnTopSide && !isOnBottomSide && !isOnLeftSide && !isOnRightSide;
      return {
        reason: {
          isOnBottomSide,
          isOnLeftSide,
          isOnRightSide,
          isOnTopSide
        },
        result
      };
    } else {
      const { top, left, bottom, right } = target;
      return top >= this._top && top <= this._bottom && bottom >= this._top && bottom <= this._bottom && left >= this._left && left <= this._right && right >= this._left && right <= this._right;
    }
  }
  intersectsWith(rect) {
    const { left: x1, top: y1, width: w1, height: h1 } = rect;
    const { left: x2, top: y2, width: w2, height: h2 } = this;
    const maxX = x1 + w1 >= x2 + w2 ? x1 + w1 : x2 + w2;
    const maxY = y1 + h1 >= y2 + h2 ? y1 + h1 : y2 + h2;
    const minX = x1 <= x2 ? x1 : x2;
    const minY = y1 <= y2 ? y1 : y2;
    return maxX - minX <= w1 + w2 && maxY - minY <= h1 + h2;
  }
  generateNewRect({
    left = this.left,
    top = this.top,
    right = this.right,
    bottom = this.bottom
  }) {
    return new _Rect(left, top, right, bottom);
  }
  static fromLTRB(left, top, right, bottom) {
    return new _Rect(left, top, right, bottom);
  }
  static fromLWTH(left, width, top, height) {
    return new _Rect(left, top, left + width, top + height);
  }
  static fromPoints(startPoint, endPoint) {
    const { y: top, x: left } = startPoint;
    const { y: bottom, x: right } = endPoint;
    return _Rect.fromLTRB(left, top, right, bottom);
  }
  static fromDOM(dom) {
    const { top, width, left, height } = dom.getBoundingClientRect();
    return _Rect.fromLWTH(left, width, top, height);
  }
};

// src/components/editor/plugins/DraggableBlockPlugin/index.tsx
var SPACE = 4;
var TARGET_LINE_HALF_HEIGHT = 2;
var DRAGGABLE_BLOCK_MENU_CLASSNAME = "draggable-block-menu";
var DRAG_DATA_FORMAT = "application/x-lexical-drag-block";
var TEXT_BOX_HORIZONTAL_PADDING = 28;
var Downward = 1;
var Upward = -1;
var Indeterminate = 0;
var prevIndex = Infinity;
function getCurrentIndex(keysLength) {
  if (keysLength === 0) {
    return Infinity;
  }
  if (prevIndex >= 0 && prevIndex < keysLength) {
    return prevIndex;
  }
  return Math.floor(keysLength / 2);
}
function getTopLevelNodeKeys(editor) {
  return editor.getEditorState().read(() => (0, import_lexical21.$getRoot)().getChildrenKeys());
}
function getCollapsedMargins(elem) {
  const getMargin = (element, margin) => element ? parseFloat(window.getComputedStyle(element)[margin]) : 0;
  const { marginTop, marginBottom } = window.getComputedStyle(elem);
  const prevElemSiblingMarginBottom = getMargin(
    elem.previousElementSibling,
    "marginBottom"
  );
  const nextElemSiblingMarginTop = getMargin(
    elem.nextElementSibling,
    "marginTop"
  );
  const collapsedTopMargin = Math.max(
    parseFloat(marginTop),
    prevElemSiblingMarginBottom
  );
  const collapsedBottomMargin = Math.max(
    parseFloat(marginBottom),
    nextElemSiblingMarginTop
  );
  return { marginBottom: collapsedBottomMargin, marginTop: collapsedTopMargin };
}
function getBlockElement(anchorElem, editor, event, useEdgeAsDefault = false) {
  const anchorElementRect = anchorElem.getBoundingClientRect();
  const topLevelNodeKeys = getTopLevelNodeKeys(editor);
  let blockElem = null;
  editor.getEditorState().read(() => {
    if (useEdgeAsDefault) {
      const [firstNode, lastNode] = [
        editor.getElementByKey(topLevelNodeKeys[0]),
        editor.getElementByKey(topLevelNodeKeys[topLevelNodeKeys.length - 1])
      ];
      const [firstNodeRect, lastNodeRect] = [
        firstNode == null ? void 0 : firstNode.getBoundingClientRect(),
        lastNode == null ? void 0 : lastNode.getBoundingClientRect()
      ];
      if (firstNodeRect && lastNodeRect) {
        const firstNodeZoom = (0, import_utils13.calculateZoomLevel)(firstNode);
        const lastNodeZoom = (0, import_utils13.calculateZoomLevel)(lastNode);
        if (event.y / firstNodeZoom < firstNodeRect.top) {
          blockElem = firstNode;
        } else if (event.y / lastNodeZoom > lastNodeRect.bottom) {
          blockElem = lastNode;
        }
        if (blockElem) {
          return;
        }
      }
    }
    let index = getCurrentIndex(topLevelNodeKeys.length);
    let direction = Indeterminate;
    while (index >= 0 && index < topLevelNodeKeys.length) {
      const key = topLevelNodeKeys[index];
      const elem = editor.getElementByKey(key);
      if (elem === null) {
        break;
      }
      const zoom = (0, import_utils13.calculateZoomLevel)(elem);
      const point = new Point(event.x / zoom, event.y / zoom);
      const domRect = Rect.fromDOM(elem);
      const { marginTop, marginBottom } = getCollapsedMargins(elem);
      const rect = domRect.generateNewRect({
        bottom: domRect.bottom + marginBottom,
        left: anchorElementRect.left,
        right: anchorElementRect.right,
        top: domRect.top - marginTop
      });
      const {
        result,
        reason: { isOnTopSide, isOnBottomSide }
      } = rect.contains(point);
      if (result) {
        blockElem = elem;
        prevIndex = index;
        break;
      }
      if (direction === Indeterminate) {
        if (isOnTopSide) {
          direction = Upward;
        } else if (isOnBottomSide) {
          direction = Downward;
        } else {
          direction = Infinity;
        }
      }
      index += direction;
    }
  });
  return blockElem;
}
function isOnMenu(element) {
  return !!element.closest(`.${DRAGGABLE_BLOCK_MENU_CLASSNAME}`);
}
function setMenuPosition(targetElem, floatingElem, anchorElem) {
  if (!targetElem) {
    floatingElem.style.opacity = "0";
    floatingElem.style.transform = "translate(-10000px, -10000px)";
    return;
  }
  const targetRect = targetElem.getBoundingClientRect();
  const targetStyle = window.getComputedStyle(targetElem);
  const floatingElemRect = floatingElem.getBoundingClientRect();
  const anchorElementRect = anchorElem.getBoundingClientRect();
  const top = targetRect.top + (parseInt(targetStyle.lineHeight, 10) - floatingElemRect.height) / 2 - anchorElementRect.top;
  const left = SPACE;
  floatingElem.style.opacity = "1";
  floatingElem.style.transform = `translate(${left}px, ${top}px)`;
}
function setDragImage(dataTransfer, draggableBlockElem) {
  const { transform } = draggableBlockElem.style;
  draggableBlockElem.style.transform = "translateZ(0)";
  dataTransfer.setDragImage(draggableBlockElem, 0, 0);
  setTimeout(() => {
    draggableBlockElem.style.transform = transform;
  });
}
function setTargetLine(targetLineElem, targetBlockElem, mouseY, anchorElem) {
  const { top: targetBlockElemTop, height: targetBlockElemHeight } = targetBlockElem.getBoundingClientRect();
  const { top: anchorTop, width: anchorWidth } = anchorElem.getBoundingClientRect();
  const { marginTop, marginBottom } = getCollapsedMargins(targetBlockElem);
  let lineTop = targetBlockElemTop;
  if (mouseY >= targetBlockElemTop) {
    lineTop += targetBlockElemHeight + marginBottom / 2;
  } else {
    lineTop -= marginTop / 2;
  }
  const top = lineTop - anchorTop - TARGET_LINE_HALF_HEIGHT;
  const left = TEXT_BOX_HORIZONTAL_PADDING - SPACE;
  targetLineElem.style.transform = `translate(${left}px, ${top}px)`;
  targetLineElem.style.width = `${anchorWidth - (TEXT_BOX_HORIZONTAL_PADDING - SPACE) * 2}px`;
  targetLineElem.style.opacity = ".4";
}
function hideTargetLine(targetLineElem) {
  if (targetLineElem) {
    targetLineElem.style.opacity = "0";
    targetLineElem.style.transform = "translate(-10000px, -10000px)";
  }
}
function useDraggableBlockMenu(editor, anchorElem, isEditable) {
  const scrollerElem = anchorElem.parentElement;
  const menuRef = (0, import_react32.useRef)(null);
  const targetLineRef = (0, import_react32.useRef)(null);
  const isDraggingBlockRef = (0, import_react32.useRef)(false);
  const [draggableBlockElem, setDraggableBlockElem] = (0, import_react32.useState)(null);
  (0, import_react32.useEffect)(() => {
    function onMouseMove(event) {
      const target = event.target;
      if (!isHTMLElement(target)) {
        setDraggableBlockElem(null);
        return;
      }
      if (isOnMenu(target)) {
        return;
      }
      const _draggableBlockElem = getBlockElement(anchorElem, editor, event);
      setDraggableBlockElem(_draggableBlockElem);
    }
    function onMouseLeave() {
      setDraggableBlockElem(null);
    }
    scrollerElem == null ? void 0 : scrollerElem.addEventListener("mousemove", onMouseMove);
    scrollerElem == null ? void 0 : scrollerElem.addEventListener("mouseleave", onMouseLeave);
    return () => {
      scrollerElem == null ? void 0 : scrollerElem.removeEventListener("mousemove", onMouseMove);
      scrollerElem == null ? void 0 : scrollerElem.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [scrollerElem, anchorElem, editor]);
  (0, import_react32.useEffect)(() => {
    if (menuRef.current) {
      setMenuPosition(draggableBlockElem, menuRef.current, anchorElem);
    }
  }, [anchorElem, draggableBlockElem]);
  (0, import_react32.useEffect)(() => {
    function onDragover(event) {
      if (!isDraggingBlockRef.current) {
        return false;
      }
      const [isFileTransfer] = (0, import_rich_text4.eventFiles)(event);
      if (isFileTransfer) {
        return false;
      }
      const { pageY, target } = event;
      if (!isHTMLElement(target)) {
        return false;
      }
      const targetBlockElem = getBlockElement(anchorElem, editor, event, true);
      const targetLineElem = targetLineRef.current;
      if (targetBlockElem === null || targetLineElem === null) {
        return false;
      }
      setTargetLine(
        targetLineElem,
        targetBlockElem,
        pageY / (0, import_utils13.calculateZoomLevel)(target),
        anchorElem
      );
      event.preventDefault();
      return true;
    }
    function $onDrop2(event) {
      if (!isDraggingBlockRef.current) {
        return false;
      }
      const [isFileTransfer] = (0, import_rich_text4.eventFiles)(event);
      if (isFileTransfer) {
        return false;
      }
      const { target, dataTransfer, pageY } = event;
      const dragData = (dataTransfer == null ? void 0 : dataTransfer.getData(DRAG_DATA_FORMAT)) || "";
      const draggedNode = (0, import_lexical21.$getNodeByKey)(dragData);
      if (!draggedNode) {
        return false;
      }
      if (!isHTMLElement(target)) {
        return false;
      }
      const targetBlockElem = getBlockElement(anchorElem, editor, event, true);
      if (!targetBlockElem) {
        return false;
      }
      const targetNode = (0, import_lexical21.$getNearestNodeFromDOMNode)(targetBlockElem);
      if (!targetNode) {
        return false;
      }
      if (targetNode === draggedNode) {
        return true;
      }
      const targetBlockElemTop = targetBlockElem.getBoundingClientRect().top;
      if (pageY / (0, import_utils13.calculateZoomLevel)(target) >= targetBlockElemTop) {
        targetNode.insertAfter(draggedNode);
      } else {
        targetNode.insertBefore(draggedNode);
      }
      setDraggableBlockElem(null);
      return true;
    }
    return (0, import_utils13.mergeRegister)(
      editor.registerCommand(
        import_lexical21.DRAGOVER_COMMAND,
        (event) => {
          return onDragover(event);
        },
        import_lexical21.COMMAND_PRIORITY_LOW
      ),
      editor.registerCommand(
        import_lexical21.DROP_COMMAND,
        (event) => {
          return $onDrop2(event);
        },
        import_lexical21.COMMAND_PRIORITY_HIGH
      )
    );
  }, [anchorElem, editor]);
  function onDragStart(event) {
    const dataTransfer = event.dataTransfer;
    if (!dataTransfer || !draggableBlockElem) {
      return;
    }
    setDragImage(dataTransfer, draggableBlockElem);
    let nodeKey = "";
    editor.update(() => {
      const node = (0, import_lexical21.$getNearestNodeFromDOMNode)(draggableBlockElem);
      if (node) {
        nodeKey = node.getKey();
      }
    });
    isDraggingBlockRef.current = true;
    dataTransfer.setData(DRAG_DATA_FORMAT, nodeKey);
  }
  function onDragEnd() {
    isDraggingBlockRef.current = false;
    hideTargetLine(targetLineRef.current);
  }
  return (0, import_react_dom5.createPortal)(
    /* @__PURE__ */ React32.createElement(React32.Fragment, null, /* @__PURE__ */ React32.createElement(
      "div",
      {
        className: "icon draggable-block-menu",
        ref: menuRef,
        draggable: true,
        onDragStart,
        onDragEnd
      },
      /* @__PURE__ */ React32.createElement("div", { className: isEditable ? "icon" : "" })
    ), /* @__PURE__ */ React32.createElement("div", { className: "draggable-block-target-line", ref: targetLineRef })),
    anchorElem
  );
}
function DraggableBlockPlugin({
  anchorElem = document.body
}) {
  const [editor] = (0, import_LexicalComposerContext17.useLexicalComposerContext)();
  return useDraggableBlockMenu(editor, anchorElem, editor._editable);
}

// src/components/editor/plugins/EmojiPickerPlugin/index.tsx
init_cjs_shims();
var import_LexicalComposerContext18 = require("@lexical/react/LexicalComposerContext");
var import_LexicalTypeaheadMenuPlugin3 = require("@lexical/react/LexicalTypeaheadMenuPlugin");
var import_lexical22 = require("lexical");
var React33 = __toESM(require("react"));
var import_react33 = require("react");
var ReactDOM4 = __toESM(require("react-dom"));
var EmojiOption = class extends import_LexicalTypeaheadMenuPlugin3.MenuOption {
  constructor(title, emoji, options) {
    super(title);
    this.title = title;
    this.emoji = emoji;
    this.keywords = options.keywords || [];
  }
};
function EmojiMenuItem({
  index,
  isSelected,
  onClick,
  onMouseEnter,
  option
}) {
  let className = "item";
  if (isSelected) {
    className += " selected";
  }
  return /* @__PURE__ */ React33.createElement(
    "li",
    {
      key: option.key,
      tabIndex: -1,
      className,
      ref: option.setRefElement,
      role: "option",
      "aria-selected": isSelected,
      id: "typeahead-item-" + index,
      onMouseEnter,
      onClick
    },
    /* @__PURE__ */ React33.createElement("span", { className: "text" }, option.emoji, " ", option.title)
  );
}
var MAX_EMOJI_SUGGESTION_COUNT = 10;
function EmojiPickerPlugin() {
  const [editor] = (0, import_LexicalComposerContext18.useLexicalComposerContext)();
  const [queryString, setQueryString] = (0, import_react33.useState)(null);
  const [emojis2, setEmojis] = (0, import_react33.useState)([]);
  (0, import_react33.useEffect)(() => {
    Promise.resolve().then(() => (init_emoji_list(), emoji_list_exports)).then((file) => setEmojis(file.default));
  }, []);
  const emojiOptions = (0, import_react33.useMemo)(
    () => emojis2 != null ? emojis2.map(
      ({ emoji, aliases, tags }) => new EmojiOption(aliases[0], emoji, {
        keywords: [...aliases, ...tags]
      })
    ) : [],
    [emojis2]
  );
  const checkForTriggerMatch = (0, import_LexicalTypeaheadMenuPlugin3.useBasicTypeaheadTriggerMatch)(":", {
    minLength: 0
  });
  const options = (0, import_react33.useMemo)(() => {
    return emojiOptions.filter((option) => {
      return queryString != null ? new RegExp(queryString, "gi").exec(option.title) || option.keywords != null ? option.keywords.some(
        (keyword) => new RegExp(queryString, "gi").exec(keyword)
      ) : false : emojiOptions;
    }).slice(0, MAX_EMOJI_SUGGESTION_COUNT);
  }, [emojiOptions, queryString]);
  const onSelectOption = (0, import_react33.useCallback)(
    (selectedOption, nodeToRemove, closeMenu) => {
      editor.update(() => {
        const selection = (0, import_lexical22.$getSelection)();
        if (!(0, import_lexical22.$isRangeSelection)(selection) || selectedOption == null) {
          return;
        }
        if (nodeToRemove) {
          nodeToRemove.remove();
        }
        selection.insertNodes([(0, import_lexical22.$createTextNode)(selectedOption.emoji)]);
        closeMenu();
      });
    },
    [editor]
  );
  return /* @__PURE__ */ React33.createElement(
    import_LexicalTypeaheadMenuPlugin3.LexicalTypeaheadMenuPlugin,
    {
      onQueryChange: setQueryString,
      onSelectOption,
      triggerFn: checkForTriggerMatch,
      options,
      menuRenderFn: (anchorElementRef, { selectedIndex, selectOptionAndCleanUp, setHighlightedIndex }) => {
        if (anchorElementRef.current == null || options.length === 0) {
          return null;
        }
        return anchorElementRef.current && options.length ? ReactDOM4.createPortal(
          /* @__PURE__ */ React33.createElement("div", { className: "typeahead-popover emoji-menu" }, /* @__PURE__ */ React33.createElement("ul", null, options.map((option, index) => /* @__PURE__ */ React33.createElement(
            EmojiMenuItem,
            {
              key: option.key,
              index,
              isSelected: selectedIndex === index,
              onClick: () => {
                setHighlightedIndex(index);
                selectOptionAndCleanUp(option);
              },
              onMouseEnter: () => {
                setHighlightedIndex(index);
              },
              option
            }
          )))),
          anchorElementRef.current
        ) : null;
      }
    }
  );
}

// src/components/editor/index.tsx
init_EmojisPlugin();

// src/components/editor/plugins/FloatingLinkEditorPlugin/index.tsx
init_cjs_shims();
var import_link2 = require("@lexical/link");
var import_LexicalComposerContext19 = require("@lexical/react/LexicalComposerContext");
var import_utils14 = require("@lexical/utils");
var import_lexical23 = require("lexical");
var import_react34 = require("react");
var React34 = __toESM(require("react"));
var import_react_dom6 = require("react-dom");

// src/components/editor/utils/getSelectedNode.ts
init_cjs_shims();
var import_selection3 = require("@lexical/selection");
function getSelectedNode(selection) {
  const anchor = selection.anchor;
  const focus = selection.focus;
  const anchorNode = selection.anchor.getNode();
  const focusNode = selection.focus.getNode();
  if (anchorNode === focusNode) {
    return anchorNode;
  }
  const isBackward = selection.isBackward();
  if (isBackward) {
    return (0, import_selection3.$isAtNodeEnd)(focus) ? anchorNode : focusNode;
  } else {
    return (0, import_selection3.$isAtNodeEnd)(anchor) ? anchorNode : focusNode;
  }
}

// src/components/editor/utils/setFloatingElemPositionForLinkEditor.ts
init_cjs_shims();
var VERTICAL_GAP = 10;
var HORIZONTAL_OFFSET = 5;
function setFloatingElemPositionForLinkEditor(targetRect, floatingElem, anchorElem, verticalGap = VERTICAL_GAP, horizontalOffset = HORIZONTAL_OFFSET) {
  const scrollerElem = anchorElem.parentElement;
  if (targetRect === null || !scrollerElem) {
    floatingElem.style.opacity = "0";
    floatingElem.style.transform = "translate(-10000px, -10000px)";
    return;
  }
  const floatingElemRect = floatingElem.getBoundingClientRect();
  const anchorElementRect = anchorElem.getBoundingClientRect();
  const editorScrollerRect = scrollerElem.getBoundingClientRect();
  let top = targetRect.top - verticalGap;
  let left = targetRect.left - horizontalOffset;
  if (top < editorScrollerRect.top) {
    top += floatingElemRect.height + targetRect.height + verticalGap * 2;
  }
  if (left + floatingElemRect.width > editorScrollerRect.right) {
    left = editorScrollerRect.right - floatingElemRect.width - horizontalOffset;
  }
  top -= anchorElementRect.top;
  left -= anchorElementRect.left;
  floatingElem.style.opacity = "1";
  floatingElem.style.transform = `translate(${left}px, ${top}px)`;
}

// src/components/editor/plugins/FloatingLinkEditorPlugin/index.tsx
init_url();
function FloatingLinkEditor({
  editor,
  isLink,
  setIsLink,
  anchorElem,
  isLinkEditMode,
  setIsLinkEditMode
}) {
  const editorRef = (0, import_react34.useRef)(null);
  const inputRef = (0, import_react34.useRef)(null);
  const [linkUrl, setLinkUrl] = (0, import_react34.useState)("");
  const [editedLinkUrl, setEditedLinkUrl] = (0, import_react34.useState)("https://");
  const [lastSelection, setLastSelection] = (0, import_react34.useState)(
    null
  );
  const $updateLinkEditor = (0, import_react34.useCallback)(() => {
    var _a, _b;
    const selection = (0, import_lexical23.$getSelection)();
    if ((0, import_lexical23.$isRangeSelection)(selection)) {
      const node = getSelectedNode(selection);
      const linkParent = (0, import_utils14.$findMatchingParent)(node, import_link2.$isLinkNode);
      if (linkParent) {
        setLinkUrl(linkParent.getURL());
      } else if ((0, import_link2.$isLinkNode)(node)) {
        setLinkUrl(node.getURL());
      } else {
        setLinkUrl("");
      }
      if (isLinkEditMode) {
        setEditedLinkUrl(linkUrl);
      }
    }
    const editorElem = editorRef.current;
    const nativeSelection = window.getSelection();
    const activeElement = document.activeElement;
    if (editorElem === null) {
      return;
    }
    const rootElement = editor.getRootElement();
    if (selection !== null && nativeSelection !== null && rootElement !== null && rootElement.contains(nativeSelection.anchorNode) && editor.isEditable()) {
      const domRect = (_b = (_a = nativeSelection.focusNode) == null ? void 0 : _a.parentElement) == null ? void 0 : _b.getBoundingClientRect();
      if (domRect) {
        domRect.y += 40;
        setFloatingElemPositionForLinkEditor(domRect, editorElem, anchorElem);
      }
      setLastSelection(selection);
    } else if (!activeElement || activeElement.className !== "link-input") {
      if (rootElement !== null) {
        setFloatingElemPositionForLinkEditor(null, editorElem, anchorElem);
      }
      setLastSelection(null);
      setIsLinkEditMode(false);
      setLinkUrl("");
    }
    return true;
  }, [anchorElem, editor, setIsLinkEditMode, isLinkEditMode, linkUrl]);
  (0, import_react34.useEffect)(() => {
    const scrollerElem = anchorElem.parentElement;
    const update = () => {
      editor.getEditorState().read(() => {
        $updateLinkEditor();
      });
    };
    window.addEventListener("resize", update);
    if (scrollerElem) {
      scrollerElem.addEventListener("scroll", update);
    }
    return () => {
      window.removeEventListener("resize", update);
      if (scrollerElem) {
        scrollerElem.removeEventListener("scroll", update);
      }
    };
  }, [anchorElem.parentElement, editor, $updateLinkEditor]);
  (0, import_react34.useEffect)(() => {
    return (0, import_utils14.mergeRegister)(
      editor.registerUpdateListener(({ editorState }) => {
        editorState.read(() => {
          $updateLinkEditor();
        });
      }),
      editor.registerCommand(
        import_lexical23.SELECTION_CHANGE_COMMAND,
        () => {
          $updateLinkEditor();
          return true;
        },
        import_lexical23.COMMAND_PRIORITY_LOW
      ),
      editor.registerCommand(
        import_lexical23.KEY_ESCAPE_COMMAND,
        () => {
          if (isLink) {
            setIsLink(false);
            return true;
          }
          return false;
        },
        import_lexical23.COMMAND_PRIORITY_HIGH
      )
    );
  }, [editor, $updateLinkEditor, setIsLink, isLink]);
  (0, import_react34.useEffect)(() => {
    editor.getEditorState().read(() => {
      $updateLinkEditor();
    });
  }, [editor, $updateLinkEditor]);
  (0, import_react34.useEffect)(() => {
    if (isLinkEditMode && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isLinkEditMode, isLink]);
  const monitorInputInteraction = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleLinkSubmission();
    } else if (event.key === "Escape") {
      event.preventDefault();
      setIsLinkEditMode(false);
    }
  };
  const handleLinkSubmission = () => {
    if (lastSelection !== null) {
      if (linkUrl !== "") {
        editor.dispatchCommand(import_link2.TOGGLE_LINK_COMMAND, sanitizeUrl(editedLinkUrl));
        editor.update(() => {
          const selection = (0, import_lexical23.$getSelection)();
          if ((0, import_lexical23.$isRangeSelection)(selection)) {
            const parent = getSelectedNode(selection).getParent();
            if ((0, import_link2.$isAutoLinkNode)(parent)) {
              const linkNode = (0, import_link2.$createLinkNode)(parent.getURL(), {
                rel: parent.__rel,
                target: parent.__target,
                title: parent.__title
              });
              parent.replace(linkNode, true);
            }
          }
        });
      }
      setEditedLinkUrl("https://");
      setIsLinkEditMode(false);
    }
  };
  return /* @__PURE__ */ React34.createElement("div", { ref: editorRef, className: "link-editor" }, !isLink ? null : isLinkEditMode ? /* @__PURE__ */ React34.createElement(React34.Fragment, null, /* @__PURE__ */ React34.createElement(
    "input",
    {
      ref: inputRef,
      className: "link-input",
      value: editedLinkUrl,
      onChange: (event) => {
        setEditedLinkUrl(event.target.value);
      },
      onKeyDown: (event) => {
        monitorInputInteraction(event);
      }
    }
  ), /* @__PURE__ */ React34.createElement("div", null, /* @__PURE__ */ React34.createElement(
    "div",
    {
      className: "link-cancel",
      role: "button",
      tabIndex: 0,
      onMouseDown: (event) => event.preventDefault(),
      onClick: () => {
        setIsLinkEditMode(false);
      }
    }
  ), /* @__PURE__ */ React34.createElement(
    "div",
    {
      className: "link-confirm",
      role: "button",
      tabIndex: 0,
      onMouseDown: (event) => event.preventDefault(),
      onClick: handleLinkSubmission
    }
  ))) : /* @__PURE__ */ React34.createElement("div", { className: "link-view" }, /* @__PURE__ */ React34.createElement(
    "a",
    {
      href: sanitizeUrl(linkUrl),
      target: "_blank",
      rel: "noopener noreferrer"
    },
    linkUrl
  ), /* @__PURE__ */ React34.createElement(
    "div",
    {
      className: "link-edit",
      role: "button",
      tabIndex: 0,
      onMouseDown: (event) => event.preventDefault(),
      onClick: () => {
        setEditedLinkUrl(linkUrl);
        setIsLinkEditMode(true);
      }
    }
  ), /* @__PURE__ */ React34.createElement(
    "div",
    {
      className: "link-trash",
      role: "button",
      tabIndex: 0,
      onMouseDown: (event) => event.preventDefault(),
      onClick: () => {
        editor.dispatchCommand(import_link2.TOGGLE_LINK_COMMAND, null);
      }
    }
  )));
}
function useFloatingLinkEditorToolbar(editor, anchorElem, isLinkEditMode, setIsLinkEditMode) {
  const [activeEditor, setActiveEditor] = (0, import_react34.useState)(editor);
  const [isLink, setIsLink] = (0, import_react34.useState)(false);
  (0, import_react34.useEffect)(() => {
    function $updateToolbar() {
      const selection = (0, import_lexical23.$getSelection)();
      if ((0, import_lexical23.$isRangeSelection)(selection)) {
        const focusNode = getSelectedNode(selection);
        const focusLinkNode = (0, import_utils14.$findMatchingParent)(focusNode, import_link2.$isLinkNode);
        const focusAutoLinkNode = (0, import_utils14.$findMatchingParent)(
          focusNode,
          import_link2.$isAutoLinkNode
        );
        if (!(focusLinkNode || focusAutoLinkNode)) {
          setIsLink(false);
          return;
        }
        const badNode = selection.getNodes().filter((node) => !(0, import_lexical23.$isLineBreakNode)(node)).find((node) => {
          const linkNode = (0, import_utils14.$findMatchingParent)(node, import_link2.$isLinkNode);
          const autoLinkNode = (0, import_utils14.$findMatchingParent)(node, import_link2.$isAutoLinkNode);
          return focusLinkNode && !focusLinkNode.is(linkNode) || linkNode && !linkNode.is(focusLinkNode) || focusAutoLinkNode && !focusAutoLinkNode.is(autoLinkNode) || autoLinkNode && !autoLinkNode.is(focusAutoLinkNode);
        });
        if (!badNode) {
          setIsLink(true);
        } else {
          setIsLink(false);
        }
      }
    }
    return (0, import_utils14.mergeRegister)(
      editor.registerUpdateListener(({ editorState }) => {
        editorState.read(() => {
          $updateToolbar();
        });
      }),
      editor.registerCommand(
        import_lexical23.SELECTION_CHANGE_COMMAND,
        (_payload, newEditor) => {
          $updateToolbar();
          setActiveEditor(newEditor);
          return false;
        },
        import_lexical23.COMMAND_PRIORITY_CRITICAL
      ),
      editor.registerCommand(
        import_lexical23.CLICK_COMMAND,
        (payload) => {
          const selection = (0, import_lexical23.$getSelection)();
          if ((0, import_lexical23.$isRangeSelection)(selection)) {
            const node = getSelectedNode(selection);
            const linkNode = (0, import_utils14.$findMatchingParent)(node, import_link2.$isLinkNode);
            if ((0, import_link2.$isLinkNode)(linkNode) && (payload.metaKey || payload.ctrlKey)) {
              window.open(linkNode.getURL(), "_blank");
              return true;
            }
          }
          return false;
        },
        import_lexical23.COMMAND_PRIORITY_LOW
      )
    );
  }, [editor]);
  return (0, import_react_dom6.createPortal)(
    /* @__PURE__ */ React34.createElement(
      FloatingLinkEditor,
      {
        editor: activeEditor,
        isLink,
        anchorElem,
        setIsLink,
        isLinkEditMode,
        setIsLinkEditMode
      }
    ),
    anchorElem
  );
}
function FloatingLinkEditorPlugin({
  anchorElem = document.body,
  isLinkEditMode,
  setIsLinkEditMode
}) {
  const [editor] = (0, import_LexicalComposerContext19.useLexicalComposerContext)();
  return useFloatingLinkEditorToolbar(
    editor,
    anchorElem,
    isLinkEditMode,
    setIsLinkEditMode
  );
}

// src/components/editor/plugins/FloatingTextFormatToolbarPlugin/index.tsx
init_cjs_shims();
var import_code7 = require("@lexical/code");
var import_link3 = require("@lexical/link");
var import_LexicalComposerContext20 = require("@lexical/react/LexicalComposerContext");
var import_utils15 = require("@lexical/utils");
var import_lexical24 = require("lexical");
var import_react35 = require("react");
var React35 = __toESM(require("react"));
var import_react_dom7 = require("react-dom");

// src/components/editor/utils/getDOMRangeRect.ts
init_cjs_shims();
function getDOMRangeRect(nativeSelection, rootElement) {
  const domRange = nativeSelection.getRangeAt(0);
  let rect;
  if (nativeSelection.anchorNode === rootElement) {
    let inner = rootElement;
    while (inner.firstElementChild != null) {
      inner = inner.firstElementChild;
    }
    rect = inner.getBoundingClientRect();
  } else {
    rect = domRange.getBoundingClientRect();
  }
  return rect;
}

// src/components/editor/utils/setFloatingElemPosition.ts
init_cjs_shims();
var VERTICAL_GAP2 = 10;
var HORIZONTAL_OFFSET2 = 5;
function setFloatingElemPosition(targetRect, floatingElem, anchorElem, isLink = false, verticalGap = VERTICAL_GAP2, horizontalOffset = HORIZONTAL_OFFSET2) {
  const scrollerElem = anchorElem.parentElement;
  if (targetRect === null || !scrollerElem) {
    floatingElem.style.opacity = "0";
    floatingElem.style.transform = "translate(-10000px, -10000px)";
    return;
  }
  const floatingElemRect = floatingElem.getBoundingClientRect();
  const anchorElementRect = anchorElem.getBoundingClientRect();
  const editorScrollerRect = scrollerElem.getBoundingClientRect();
  let top = targetRect.top - floatingElemRect.height - verticalGap;
  let left = targetRect.left - horizontalOffset;
  if (top < editorScrollerRect.top) {
    top += floatingElemRect.height + targetRect.height + verticalGap * (isLink ? 9 : 2);
  }
  if (left + floatingElemRect.width > editorScrollerRect.right) {
    left = editorScrollerRect.right - floatingElemRect.width - horizontalOffset;
  }
  top -= anchorElementRect.top;
  left -= anchorElementRect.left;
  floatingElem.style.opacity = "1";
  floatingElem.style.transform = `translate(${left}px, ${top}px)`;
}

// src/components/editor/plugins/FloatingTextFormatToolbarPlugin/index.tsx
function TextFormatFloatingToolbar({
  editor,
  anchorElem,
  isLink,
  isBold,
  isItalic,
  isUnderline,
  isCode,
  isStrikethrough,
  isSubscript,
  isSuperscript,
  setIsLinkEditMode
}) {
  const popupCharStylesEditorRef = (0, import_react35.useRef)(null);
  const insertLink = (0, import_react35.useCallback)(() => {
    if (!isLink) {
      setIsLinkEditMode(true);
      editor.dispatchCommand(import_link3.TOGGLE_LINK_COMMAND, "https://");
    } else {
      setIsLinkEditMode(false);
      editor.dispatchCommand(import_link3.TOGGLE_LINK_COMMAND, null);
    }
  }, [editor, isLink, setIsLinkEditMode]);
  function mouseMoveListener(e) {
    if ((popupCharStylesEditorRef == null ? void 0 : popupCharStylesEditorRef.current) && (e.buttons === 1 || e.buttons === 3)) {
      if (popupCharStylesEditorRef.current.style.pointerEvents !== "none") {
        const x = e.clientX;
        const y = e.clientY;
        const elementUnderMouse = document.elementFromPoint(x, y);
        if (!popupCharStylesEditorRef.current.contains(elementUnderMouse)) {
          popupCharStylesEditorRef.current.style.pointerEvents = "none";
        }
      }
    }
  }
  function mouseUpListener(e) {
    if (popupCharStylesEditorRef == null ? void 0 : popupCharStylesEditorRef.current) {
      if (popupCharStylesEditorRef.current.style.pointerEvents !== "auto") {
        popupCharStylesEditorRef.current.style.pointerEvents = "auto";
      }
    }
  }
  (0, import_react35.useEffect)(() => {
    if (popupCharStylesEditorRef == null ? void 0 : popupCharStylesEditorRef.current) {
      document.addEventListener("mousemove", mouseMoveListener);
      document.addEventListener("mouseup", mouseUpListener);
      return () => {
        document.removeEventListener("mousemove", mouseMoveListener);
        document.removeEventListener("mouseup", mouseUpListener);
      };
    }
  }, [popupCharStylesEditorRef]);
  const $updateTextFormatFloatingToolbar = (0, import_react35.useCallback)(() => {
    const selection = (0, import_lexical24.$getSelection)();
    const popupCharStylesEditorElem = popupCharStylesEditorRef.current;
    const nativeSelection = window.getSelection();
    if (popupCharStylesEditorElem === null) {
      return;
    }
    const rootElement = editor.getRootElement();
    if (selection !== null && nativeSelection !== null && !nativeSelection.isCollapsed && rootElement !== null && rootElement.contains(nativeSelection.anchorNode)) {
      const rangeRect = getDOMRangeRect(nativeSelection, rootElement);
      setFloatingElemPosition(
        rangeRect,
        popupCharStylesEditorElem,
        anchorElem,
        isLink
      );
    }
  }, [editor, anchorElem, isLink]);
  (0, import_react35.useEffect)(() => {
    const scrollerElem = anchorElem.parentElement;
    const update = () => {
      editor.getEditorState().read(() => {
        $updateTextFormatFloatingToolbar();
      });
    };
    window.addEventListener("resize", update);
    if (scrollerElem) {
      scrollerElem.addEventListener("scroll", update);
    }
    return () => {
      window.removeEventListener("resize", update);
      if (scrollerElem) {
        scrollerElem.removeEventListener("scroll", update);
      }
    };
  }, [editor, $updateTextFormatFloatingToolbar, anchorElem]);
  (0, import_react35.useEffect)(() => {
    editor.getEditorState().read(() => {
      $updateTextFormatFloatingToolbar();
    });
    return (0, import_utils15.mergeRegister)(
      editor.registerUpdateListener(({ editorState }) => {
        editorState.read(() => {
          $updateTextFormatFloatingToolbar();
        });
      }),
      editor.registerCommand(
        import_lexical24.SELECTION_CHANGE_COMMAND,
        () => {
          $updateTextFormatFloatingToolbar();
          return false;
        },
        import_lexical24.COMMAND_PRIORITY_LOW
      )
    );
  }, [editor, $updateTextFormatFloatingToolbar]);
  return /* @__PURE__ */ React35.createElement("div", { ref: popupCharStylesEditorRef, className: "floating-text-format-popup" }, editor.isEditable() && /* @__PURE__ */ React35.createElement(React35.Fragment, null, /* @__PURE__ */ React35.createElement(
    "button",
    {
      type: "button",
      onClick: () => {
        editor.dispatchCommand(import_lexical24.FORMAT_TEXT_COMMAND, "bold");
      },
      className: "popup-item spaced " + (isBold ? "active" : ""),
      "aria-label": "Format text as bold"
    },
    /* @__PURE__ */ React35.createElement("i", { className: "format bold" })
  ), /* @__PURE__ */ React35.createElement(
    "button",
    {
      type: "button",
      onClick: () => {
        editor.dispatchCommand(import_lexical24.FORMAT_TEXT_COMMAND, "italic");
      },
      className: "popup-item spaced " + (isItalic ? "active" : ""),
      "aria-label": "Format text as italics"
    },
    /* @__PURE__ */ React35.createElement("i", { className: "format italic" })
  ), /* @__PURE__ */ React35.createElement(
    "button",
    {
      type: "button",
      onClick: () => {
        editor.dispatchCommand(import_lexical24.FORMAT_TEXT_COMMAND, "underline");
      },
      className: "popup-item spaced " + (isUnderline ? "active" : ""),
      "aria-label": "Format text to underlined"
    },
    /* @__PURE__ */ React35.createElement("i", { className: "format underline" })
  ), /* @__PURE__ */ React35.createElement(
    "button",
    {
      type: "button",
      onClick: () => {
        editor.dispatchCommand(import_lexical24.FORMAT_TEXT_COMMAND, "strikethrough");
      },
      className: "popup-item spaced " + (isStrikethrough ? "active" : ""),
      "aria-label": "Format text with a strikethrough"
    },
    /* @__PURE__ */ React35.createElement("i", { className: "format strikethrough" })
  ), /* @__PURE__ */ React35.createElement(
    "button",
    {
      type: "button",
      onClick: () => {
        editor.dispatchCommand(import_lexical24.FORMAT_TEXT_COMMAND, "subscript");
      },
      className: "popup-item spaced " + (isSubscript ? "active" : ""),
      title: "Subscript",
      "aria-label": "Format Subscript"
    },
    /* @__PURE__ */ React35.createElement("i", { className: "format subscript" })
  ), /* @__PURE__ */ React35.createElement(
    "button",
    {
      type: "button",
      onClick: () => {
        editor.dispatchCommand(import_lexical24.FORMAT_TEXT_COMMAND, "superscript");
      },
      className: "popup-item spaced " + (isSuperscript ? "active" : ""),
      title: "Superscript",
      "aria-label": "Format Superscript"
    },
    /* @__PURE__ */ React35.createElement("i", { className: "format superscript" })
  ), /* @__PURE__ */ React35.createElement(
    "button",
    {
      type: "button",
      onClick: () => {
        editor.dispatchCommand(import_lexical24.FORMAT_TEXT_COMMAND, "code");
      },
      className: "popup-item spaced " + (isCode ? "active" : ""),
      "aria-label": "Insert code block"
    },
    /* @__PURE__ */ React35.createElement("i", { className: "format code" })
  ), /* @__PURE__ */ React35.createElement(
    "button",
    {
      type: "button",
      onClick: insertLink,
      className: "popup-item spaced " + (isLink ? "active" : ""),
      "aria-label": "Insert link"
    },
    /* @__PURE__ */ React35.createElement("i", { className: "format link" })
  )));
}
function useFloatingTextFormatToolbar(editor, anchorElem, setIsLinkEditMode) {
  const [isText, setIsText] = (0, import_react35.useState)(false);
  const [isLink, setIsLink] = (0, import_react35.useState)(false);
  const [isBold, setIsBold] = (0, import_react35.useState)(false);
  const [isItalic, setIsItalic] = (0, import_react35.useState)(false);
  const [isUnderline, setIsUnderline] = (0, import_react35.useState)(false);
  const [isStrikethrough, setIsStrikethrough] = (0, import_react35.useState)(false);
  const [isSubscript, setIsSubscript] = (0, import_react35.useState)(false);
  const [isSuperscript, setIsSuperscript] = (0, import_react35.useState)(false);
  const [isCode, setIsCode] = (0, import_react35.useState)(false);
  const updatePopup = (0, import_react35.useCallback)(() => {
    editor.getEditorState().read(() => {
      if (editor.isComposing()) {
        return;
      }
      const selection = (0, import_lexical24.$getSelection)();
      const nativeSelection = window.getSelection();
      const rootElement = editor.getRootElement();
      if (nativeSelection !== null && (!(0, import_lexical24.$isRangeSelection)(selection) || rootElement === null || !rootElement.contains(nativeSelection.anchorNode))) {
        setIsText(false);
        return;
      }
      if (!(0, import_lexical24.$isRangeSelection)(selection)) {
        return;
      }
      const node = getSelectedNode(selection);
      setIsBold(selection.hasFormat("bold"));
      setIsItalic(selection.hasFormat("italic"));
      setIsUnderline(selection.hasFormat("underline"));
      setIsStrikethrough(selection.hasFormat("strikethrough"));
      setIsSubscript(selection.hasFormat("subscript"));
      setIsSuperscript(selection.hasFormat("superscript"));
      setIsCode(selection.hasFormat("code"));
      const parent = node.getParent();
      if ((0, import_link3.$isLinkNode)(parent) || (0, import_link3.$isLinkNode)(node)) {
        setIsLink(true);
      } else {
        setIsLink(false);
      }
      if (!(0, import_code7.$isCodeHighlightNode)(selection.anchor.getNode()) && selection.getTextContent() !== "") {
        setIsText((0, import_lexical24.$isTextNode)(node) || (0, import_lexical24.$isParagraphNode)(node));
      } else {
        setIsText(false);
      }
      const rawTextContent = selection.getTextContent().replace(/\n/g, "");
      if (!selection.isCollapsed() && rawTextContent === "") {
        setIsText(false);
        return;
      }
    });
  }, [editor]);
  (0, import_react35.useEffect)(() => {
    document.addEventListener("selectionchange", updatePopup);
    return () => {
      document.removeEventListener("selectionchange", updatePopup);
    };
  }, [updatePopup]);
  (0, import_react35.useEffect)(() => {
    return (0, import_utils15.mergeRegister)(
      editor.registerUpdateListener(() => {
        updatePopup();
      }),
      editor.registerRootListener(() => {
        if (editor.getRootElement() === null) {
          setIsText(false);
        }
      })
    );
  }, [editor, updatePopup]);
  if (!isText) {
    return null;
  }
  return (0, import_react_dom7.createPortal)(
    /* @__PURE__ */ React35.createElement(
      TextFormatFloatingToolbar,
      {
        editor,
        anchorElem,
        isLink,
        isBold,
        isItalic,
        isStrikethrough,
        isSubscript,
        isSuperscript,
        isUnderline,
        isCode,
        setIsLinkEditMode
      }
    ),
    anchorElem
  );
}
function FloatingTextFormatToolbarPlugin({
  anchorElem = document.body,
  setIsLinkEditMode
}) {
  const [editor] = (0, import_LexicalComposerContext20.useLexicalComposerContext)();
  return useFloatingTextFormatToolbar(editor, anchorElem, setIsLinkEditMode);
}

// src/components/editor/index.tsx
init_KeywordsPlugin();
init_LinkPlugin();

// src/components/editor/plugins/ListMaxIndentLevelPlugin/index.ts
init_cjs_shims();
var import_list3 = require("@lexical/list");
var import_LexicalComposerContext21 = require("@lexical/react/LexicalComposerContext");
var import_lexical25 = require("lexical");
var import_react36 = require("react");
function getElementNodesInSelection(selection) {
  const nodesInSelection = selection.getNodes();
  if (nodesInSelection.length === 0) {
    return /* @__PURE__ */ new Set([
      selection.anchor.getNode().getParentOrThrow(),
      selection.focus.getNode().getParentOrThrow()
    ]);
  }
  return new Set(
    nodesInSelection.map((n) => (0, import_lexical25.$isElementNode)(n) ? n : n.getParentOrThrow())
  );
}
function $shouldPreventIndent(maxDepth) {
  const selection = (0, import_lexical25.$getSelection)();
  if (!(0, import_lexical25.$isRangeSelection)(selection)) {
    return false;
  }
  const elementNodesInSelection = getElementNodesInSelection(selection);
  let totalDepth = 0;
  for (const elementNode of elementNodesInSelection) {
    if ((0, import_list3.$isListNode)(elementNode)) {
      totalDepth = Math.max((0, import_list3.$getListDepth)(elementNode) + 1, totalDepth);
    } else if ((0, import_list3.$isListItemNode)(elementNode)) {
      const parent = elementNode.getParent();
      if (!(0, import_list3.$isListNode)(parent)) {
        throw new Error(
          "ListMaxIndentLevelPlugin: A ListItemNode must have a ListNode for a parent."
        );
      }
      totalDepth = Math.max((0, import_list3.$getListDepth)(parent) + 1, totalDepth);
    }
  }
  return totalDepth > maxDepth;
}
function ListMaxIndentLevelPlugin({
  maxDepth = 7
}) {
  const [editor] = (0, import_LexicalComposerContext21.useLexicalComposerContext)();
  (0, import_react36.useEffect)(() => {
    return editor.registerCommand(
      import_lexical25.INDENT_CONTENT_COMMAND,
      () => $shouldPreventIndent(maxDepth),
      import_lexical25.COMMAND_PRIORITY_CRITICAL
    );
  }, [editor, maxDepth]);
  return null;
}

// src/components/editor/index.tsx
init_MentionsPlugin();

// src/components/editor/plugins/TabFocusPlugin/index.tsx
init_cjs_shims();
var import_LexicalComposerContext22 = require("@lexical/react/LexicalComposerContext");
var import_lexical26 = require("lexical");
var import_react37 = require("react");
var COMMAND_PRIORITY_LOW9 = 1;
var TAB_TO_FOCUS_INTERVAL = 100;
var lastTabKeyDownTimestamp = 0;
var hasRegisteredKeyDownListener = false;
function registerKeyTimeStampTracker() {
  window.addEventListener(
    "keydown",
    (event) => {
      if (event.key === "Tab") {
        lastTabKeyDownTimestamp = event.timeStamp;
      }
    },
    true
  );
}
function TabFocusPlugin() {
  const [editor] = (0, import_LexicalComposerContext22.useLexicalComposerContext)();
  (0, import_react37.useEffect)(() => {
    if (!hasRegisteredKeyDownListener) {
      registerKeyTimeStampTracker();
      hasRegisteredKeyDownListener = true;
    }
    return editor.registerCommand(
      import_lexical26.FOCUS_COMMAND,
      (event) => {
        const selection = (0, import_lexical26.$getSelection)();
        if ((0, import_lexical26.$isRangeSelection)(selection)) {
          if (lastTabKeyDownTimestamp + TAB_TO_FOCUS_INTERVAL > event.timeStamp) {
            (0, import_lexical26.$setSelection)(selection.clone());
          }
        }
        return false;
      },
      COMMAND_PRIORITY_LOW9
    );
  }, [editor]);
  return null;
}

// src/components/editor/plugins/TableActionMenuPlugin/index.tsx
init_cjs_shims();
var import_LexicalComposerContext23 = require("@lexical/react/LexicalComposerContext");
var import_useLexicalEditable = __toESM(require("@lexical/react/useLexicalEditable"));
var import_table4 = require("@lexical/table");
var import_lexical27 = require("lexical");
var React37 = __toESM(require("react"));
var import_react39 = require("react");
var import_react_dom8 = require("react-dom");

// src/components/editor/ui/ColorPicker.tsx
init_cjs_shims();
var import_utils16 = require("@lexical/utils");
var import_react38 = require("react");
var React36 = __toESM(require("react"));
var skipAddingToHistoryStack = false;
var basicColors = [
  "#d0021b",
  "#f5a623",
  "#f8e71c",
  "#8b572a",
  "#7ed321",
  "#417505",
  "#bd10e0",
  "#9013fe",
  "#4a90e2",
  "#50e3c2",
  "#b8e986",
  "#000000",
  "#4a4a4a",
  "#9b9b9b",
  "#ffffff"
];
var WIDTH = 214;
var HEIGHT = 150;
function ColorPicker({
  color,
  onChange
}) {
  const [selfColor, setSelfColor] = (0, import_react38.useState)(transformColor("hex", color));
  const [inputColor, setInputColor] = (0, import_react38.useState)(color);
  const innerDivRef = (0, import_react38.useRef)(null);
  const saturationPosition = (0, import_react38.useMemo)(
    () => ({
      x: selfColor.hsv.s / 100 * WIDTH,
      y: (100 - selfColor.hsv.v) / 100 * HEIGHT
    }),
    [selfColor.hsv.s, selfColor.hsv.v]
  );
  const huePosition = (0, import_react38.useMemo)(
    () => ({
      x: selfColor.hsv.h / 360 * WIDTH
    }),
    [selfColor.hsv]
  );
  const onSetHex = (hex) => {
    setInputColor(hex);
    if (/^#[0-9A-Fa-f]{6}$/i.test(hex)) {
      const newColor = transformColor("hex", hex);
      setSelfColor(newColor);
    }
  };
  const onMoveSaturation = ({ x, y }) => {
    const newHsv = __spreadProps(__spreadValues({}, selfColor.hsv), {
      s: x / WIDTH * 100,
      v: 100 - y / HEIGHT * 100
    });
    const newColor = transformColor("hsv", newHsv);
    setSelfColor(newColor);
    setInputColor(newColor.hex);
  };
  const onMoveHue = ({ x }) => {
    const newHsv = __spreadProps(__spreadValues({}, selfColor.hsv), { h: x / WIDTH * 360 });
    const newColor = transformColor("hsv", newHsv);
    setSelfColor(newColor);
    setInputColor(newColor.hex);
  };
  (0, import_react38.useEffect)(() => {
    if (innerDivRef.current !== null && onChange) {
      onChange(selfColor.hex, skipAddingToHistoryStack);
      setInputColor(selfColor.hex);
    }
  }, [selfColor, onChange]);
  (0, import_react38.useEffect)(() => {
    if (color === void 0) {
      return;
    }
    const newColor = transformColor("hex", color);
    setSelfColor(newColor);
    setInputColor(newColor.hex);
  }, [color]);
  return /* @__PURE__ */ React36.createElement(
    "div",
    {
      className: "color-picker-wrapper",
      style: { width: WIDTH },
      ref: innerDivRef
    },
    /* @__PURE__ */ React36.createElement(TextInput, { label: "Hex", onChange: onSetHex, value: inputColor }),
    /* @__PURE__ */ React36.createElement("div", { className: "color-picker-basic-color" }, basicColors.map((basicColor) => /* @__PURE__ */ React36.createElement(
      "button",
      {
        className: basicColor === selfColor.hex ? " active" : "",
        key: basicColor,
        style: { backgroundColor: basicColor },
        onClick: () => {
          setInputColor(basicColor);
          setSelfColor(transformColor("hex", basicColor));
        }
      }
    ))),
    /* @__PURE__ */ React36.createElement(
      MoveWrapper,
      {
        className: "color-picker-saturation",
        style: { backgroundColor: `hsl(${selfColor.hsv.h}, 100%, 50%)` },
        onChange: onMoveSaturation
      },
      /* @__PURE__ */ React36.createElement(
        "div",
        {
          className: "color-picker-saturation_cursor",
          style: {
            backgroundColor: selfColor.hex,
            left: saturationPosition.x,
            top: saturationPosition.y
          }
        }
      )
    ),
    /* @__PURE__ */ React36.createElement(MoveWrapper, { className: "color-picker-hue", onChange: onMoveHue }, /* @__PURE__ */ React36.createElement(
      "div",
      {
        className: "color-picker-hue_cursor",
        style: {
          backgroundColor: `hsl(${selfColor.hsv.h}, 100%, 50%)`,
          left: huePosition.x
        }
      }
    )),
    /* @__PURE__ */ React36.createElement(
      "div",
      {
        className: "color-picker-color",
        style: { backgroundColor: selfColor.hex }
      }
    )
  );
}
function MoveWrapper({ className, style, onChange, children }) {
  const divRef = (0, import_react38.useRef)(null);
  const draggedRef = (0, import_react38.useRef)(false);
  const move = (e) => {
    if (divRef.current) {
      const { current: div } = divRef;
      const { width, height, left, top } = div.getBoundingClientRect();
      const zoom = (0, import_utils16.calculateZoomLevel)(div);
      const x = clamp2(e.clientX / zoom - left, width, 0);
      const y = clamp2(e.clientY / zoom - top, height, 0);
      onChange({ x, y });
    }
  };
  const onMouseDown = (e) => {
    if (e.button !== 0) {
      return;
    }
    move(e);
    const onMouseMove = (_e) => {
      draggedRef.current = true;
      skipAddingToHistoryStack = true;
      move(_e);
    };
    const onMouseUp = (_e) => {
      if (draggedRef.current) {
        skipAddingToHistoryStack = false;
      }
      document.removeEventListener("mousemove", onMouseMove, false);
      document.removeEventListener("mouseup", onMouseUp, false);
      move(_e);
      draggedRef.current = false;
    };
    document.addEventListener("mousemove", onMouseMove, false);
    document.addEventListener("mouseup", onMouseUp, false);
  };
  return /* @__PURE__ */ React36.createElement(
    "div",
    {
      ref: divRef,
      className,
      style,
      onMouseDown
    },
    children
  );
}
function clamp2(value, max, min) {
  return value > max ? max : value < min ? min : value;
}
function toHex(value) {
  if (!value.startsWith("#")) {
    const ctx = document.createElement("canvas").getContext("2d");
    if (!ctx) {
      throw new Error("2d context not supported or canvas already initialized");
    }
    ctx.fillStyle = value;
    return ctx.fillStyle;
  } else if (value.length === 4 || value.length === 5) {
    value = value.split("").map((v, i) => i ? v + v : "#").join("");
    return value;
  } else if (value.length === 7 || value.length === 9) {
    return value;
  }
  return "#000000";
}
function hex2rgb(hex) {
  const rbgArr = (hex.replace(
    /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
    (m, r, g, b) => "#" + r + r + g + g + b + b
  ).substring(1).match(/.{2}/g) || []).map((x) => parseInt(x, 16));
  return {
    b: rbgArr[2],
    g: rbgArr[1],
    r: rbgArr[0]
  };
}
function rgb2hsv({ r, g, b }) {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const d = max - Math.min(r, g, b);
  const h = d ? (max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? 2 + (b - r) / d : 4 + (r - g) / d) * 60 : 0;
  const s = max ? d / max * 100 : 0;
  const v = max * 100;
  return { h, s, v };
}
function hsv2rgb({ h, s, v }) {
  s /= 100;
  v /= 100;
  const i = ~~(h / 60);
  const f = h / 60 - i;
  const p = v * (1 - s);
  const q = v * (1 - s * f);
  const t = v * (1 - s * (1 - f));
  const index = i % 6;
  const r = Math.round([v, q, p, p, t, v][index] * 255);
  const g = Math.round([t, v, v, q, p, p][index] * 255);
  const b = Math.round([p, p, t, v, v, q][index] * 255);
  return { b, g, r };
}
function rgb2hex({ b, g, r }) {
  return "#" + [r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("");
}
function transformColor(format, color) {
  let hex = toHex("#121212");
  let rgb = hex2rgb(hex);
  let hsv = rgb2hsv(rgb);
  if (format === "hex") {
    const value = color;
    hex = toHex(value);
    rgb = hex2rgb(hex);
    hsv = rgb2hsv(rgb);
  } else if (format === "rgb") {
    const value = color;
    rgb = value;
    hex = rgb2hex(rgb);
    hsv = rgb2hsv(rgb);
  } else if (format === "hsv") {
    const value = color;
    hsv = value;
    rgb = hsv2rgb(hsv);
    hex = rgb2hex(rgb);
  }
  return { hex, hsv, rgb };
}

// src/components/editor/plugins/TableActionMenuPlugin/index.tsx
function computeSelectionCount(selection) {
  const selectionShape = selection.getShape();
  return {
    columns: selectionShape.toX - selectionShape.fromX + 1,
    rows: selectionShape.toY - selectionShape.fromY + 1
  };
}
function isTableSelectionRectangular(selection) {
  const nodes = selection.getNodes();
  const currentRows = [];
  let currentRow = null;
  let expectedColumns = null;
  let currentColumns = 0;
  for (let i = 0; i < nodes.length; i++) {
    const node = nodes[i];
    if ((0, import_table4.$isTableCellNode)(node)) {
      const row = node.getParentOrThrow();
      invariant(
        (0, import_table4.$isTableRowNode)(row),
        "Expected CellNode to have a RowNode parent"
      );
      if (currentRow !== row) {
        if (expectedColumns !== null && currentColumns !== expectedColumns) {
          return false;
        }
        if (currentRow !== null) {
          expectedColumns = currentColumns;
        }
        currentRow = row;
        currentColumns = 0;
      }
      const colSpan = node.__colSpan;
      for (let j = 0; j < colSpan; j++) {
        if (currentRows[currentColumns + j] === void 0) {
          currentRows[currentColumns + j] = 0;
        }
        currentRows[currentColumns + j] += node.__rowSpan;
      }
      currentColumns += colSpan;
    }
  }
  return (expectedColumns === null || currentColumns === expectedColumns) && currentRows.every((v) => v === currentRows[0]);
}
function $canUnmerge() {
  const selection = (0, import_lexical27.$getSelection)();
  if ((0, import_lexical27.$isRangeSelection)(selection) && !selection.isCollapsed() || (0, import_table4.$isTableSelection)(selection) && !selection.anchor.is(selection.focus) || !(0, import_lexical27.$isRangeSelection)(selection) && !(0, import_table4.$isTableSelection)(selection)) {
    return false;
  }
  const [cell] = (0, import_table4.$getNodeTriplet)(selection.anchor);
  return cell.__colSpan > 1 || cell.__rowSpan > 1;
}
function $cellContainsEmptyParagraph(cell) {
  if (cell.getChildrenSize() !== 1) {
    return false;
  }
  const firstChild = cell.getFirstChildOrThrow();
  if (!(0, import_lexical27.$isParagraphNode)(firstChild) || !firstChild.isEmpty()) {
    return false;
  }
  return true;
}
function $selectLastDescendant(node) {
  const lastDescendant = node.getLastDescendant();
  if ((0, import_lexical27.$isTextNode)(lastDescendant)) {
    lastDescendant.select();
  } else if ((0, import_lexical27.$isElementNode)(lastDescendant)) {
    lastDescendant.selectEnd();
  } else if (lastDescendant !== null) {
    lastDescendant.selectNext();
  }
}
function currentCellBackgroundColor(editor) {
  return editor.getEditorState().read(() => {
    const selection = (0, import_lexical27.$getSelection)();
    if ((0, import_lexical27.$isRangeSelection)(selection) || (0, import_table4.$isTableSelection)(selection)) {
      const [cell] = (0, import_table4.$getNodeTriplet)(selection.anchor);
      if ((0, import_table4.$isTableCellNode)(cell)) {
        return cell.getBackgroundColor();
      }
    }
    return null;
  });
}
function TableActionMenu({
  onClose,
  tableCellNode: _tableCellNode,
  setIsMenuOpen,
  contextRef,
  cellMerge,
  showColorPickerModal
}) {
  const [editor] = (0, import_LexicalComposerContext23.useLexicalComposerContext)();
  const dropDownRef = (0, import_react39.useRef)(null);
  const [tableCellNode, updateTableCellNode] = (0, import_react39.useState)(_tableCellNode);
  const [selectionCounts, updateSelectionCounts] = (0, import_react39.useState)({
    columns: 1,
    rows: 1
  });
  const [canMergeCells, setCanMergeCells] = (0, import_react39.useState)(false);
  const [canUnmergeCell, setCanUnmergeCell] = (0, import_react39.useState)(false);
  const [backgroundColor, setBackgroundColor] = (0, import_react39.useState)(
    () => currentCellBackgroundColor(editor) || ""
  );
  (0, import_react39.useEffect)(() => {
    return editor.registerMutationListener(import_table4.TableCellNode, (nodeMutations) => {
      const nodeUpdated = nodeMutations.get(tableCellNode.getKey()) === "updated";
      if (nodeUpdated) {
        editor.getEditorState().read(() => {
          updateTableCellNode(tableCellNode.getLatest());
        });
        setBackgroundColor(currentCellBackgroundColor(editor) || "");
      }
    });
  }, [editor, tableCellNode]);
  (0, import_react39.useEffect)(() => {
    editor.getEditorState().read(() => {
      const selection = (0, import_lexical27.$getSelection)();
      if ((0, import_table4.$isTableSelection)(selection)) {
        const currentSelectionCounts = computeSelectionCount(selection);
        updateSelectionCounts(computeSelectionCount(selection));
        setCanMergeCells(
          isTableSelectionRectangular(selection) && (currentSelectionCounts.columns > 1 || currentSelectionCounts.rows > 1)
        );
      }
      setCanUnmergeCell($canUnmerge());
    });
  }, [editor]);
  (0, import_react39.useEffect)(() => {
    const menuButtonElement = contextRef.current;
    const dropDownElement = dropDownRef.current;
    const rootElement = editor.getRootElement();
    if (menuButtonElement != null && dropDownElement != null && rootElement != null) {
      const rootEleRect = rootElement.getBoundingClientRect();
      const menuButtonRect = menuButtonElement.getBoundingClientRect();
      dropDownElement.style.opacity = "1";
      const dropDownElementRect = dropDownElement.getBoundingClientRect();
      const margin = 5;
      let leftPosition = menuButtonRect.right + margin;
      if (leftPosition + dropDownElementRect.width > window.innerWidth || leftPosition + dropDownElementRect.width > rootEleRect.right) {
        const position = menuButtonRect.left - dropDownElementRect.width - margin;
        leftPosition = (position < 0 ? margin : position) + window.pageXOffset;
      }
      dropDownElement.style.left = `${leftPosition + window.pageXOffset}px`;
      let topPosition = menuButtonRect.top;
      if (topPosition + dropDownElementRect.height > window.innerHeight) {
        const position = menuButtonRect.bottom - dropDownElementRect.height;
        topPosition = (position < 0 ? margin : position) + window.pageYOffset;
      }
      dropDownElement.style.top = `${topPosition + +window.pageYOffset}px`;
    }
  }, [contextRef, dropDownRef, editor]);
  (0, import_react39.useEffect)(() => {
    function handleClickOutside(event) {
      if (dropDownRef.current != null && contextRef.current != null && !dropDownRef.current.contains(event.target) && !contextRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    }
    window.addEventListener("click", handleClickOutside);
    return () => window.removeEventListener("click", handleClickOutside);
  }, [setIsMenuOpen, contextRef]);
  const clearTableSelection = (0, import_react39.useCallback)(() => {
    editor.update(() => {
      if (tableCellNode.isAttached()) {
        const tableNode = (0, import_table4.$getTableNodeFromLexicalNodeOrThrow)(tableCellNode);
        const tableElement = editor.getElementByKey(
          tableNode.getKey()
        );
        if (!tableElement) {
          throw new Error("Expected to find tableElement in DOM");
        }
        const tableSelection = (0, import_table4.getTableObserverFromTableElement)(tableElement);
        if (tableSelection !== null) {
          tableSelection.clearHighlight();
        }
        tableNode.markDirty();
        updateTableCellNode(tableCellNode.getLatest());
      }
      const rootNode = (0, import_lexical27.$getRoot)();
      rootNode.selectStart();
    });
  }, [editor, tableCellNode]);
  const mergeTableCellsAtSelection = () => {
    editor.update(() => {
      const selection = (0, import_lexical27.$getSelection)();
      if ((0, import_table4.$isTableSelection)(selection)) {
        const { columns, rows } = computeSelectionCount(selection);
        const nodes = selection.getNodes();
        let firstCell = null;
        for (let i = 0; i < nodes.length; i++) {
          const node = nodes[i];
          if ((0, import_table4.$isTableCellNode)(node)) {
            if (firstCell === null) {
              node.setColSpan(columns).setRowSpan(rows);
              firstCell = node;
              const isEmpty = $cellContainsEmptyParagraph(node);
              let firstChild;
              if (isEmpty && (0, import_lexical27.$isParagraphNode)(firstChild = node.getFirstChild())) {
                firstChild.remove();
              }
            } else if ((0, import_table4.$isTableCellNode)(firstCell)) {
              const isEmpty = $cellContainsEmptyParagraph(node);
              if (!isEmpty) {
                firstCell.append(...node.getChildren());
              }
              node.remove();
            }
          }
        }
        if (firstCell !== null) {
          if (firstCell.getChildrenSize() === 0) {
            firstCell.append((0, import_lexical27.$createParagraphNode)());
          }
          $selectLastDescendant(firstCell);
        }
        onClose();
      }
    });
  };
  const unmergeTableCellsAtSelection = () => {
    editor.update(() => {
      (0, import_table4.$unmergeCell)();
    });
  };
  const insertTableRowAtSelection = (0, import_react39.useCallback)(
    (shouldInsertAfter) => {
      editor.update(() => {
        (0, import_table4.$insertTableRow__EXPERIMENTAL)(shouldInsertAfter);
        onClose();
      });
    },
    [editor, onClose]
  );
  const insertTableColumnAtSelection = (0, import_react39.useCallback)(
    (shouldInsertAfter) => {
      editor.update(() => {
        for (let i = 0; i < selectionCounts.columns; i++) {
          (0, import_table4.$insertTableColumn__EXPERIMENTAL)(shouldInsertAfter);
        }
        onClose();
      });
    },
    [editor, onClose, selectionCounts.columns]
  );
  const deleteTableRowAtSelection = (0, import_react39.useCallback)(() => {
    editor.update(() => {
      (0, import_table4.$deleteTableRow__EXPERIMENTAL)();
      onClose();
    });
  }, [editor, onClose]);
  const deleteTableAtSelection = (0, import_react39.useCallback)(() => {
    editor.update(() => {
      const tableNode = (0, import_table4.$getTableNodeFromLexicalNodeOrThrow)(tableCellNode);
      tableNode.remove();
      clearTableSelection();
      onClose();
    });
  }, [editor, tableCellNode, clearTableSelection, onClose]);
  const deleteTableColumnAtSelection = (0, import_react39.useCallback)(() => {
    editor.update(() => {
      (0, import_table4.$deleteTableColumn__EXPERIMENTAL)();
      onClose();
    });
  }, [editor, onClose]);
  const toggleTableRowIsHeader = (0, import_react39.useCallback)(() => {
    editor.update(() => {
      const tableNode = (0, import_table4.$getTableNodeFromLexicalNodeOrThrow)(tableCellNode);
      const tableRowIndex = (0, import_table4.$getTableRowIndexFromTableCellNode)(tableCellNode);
      const tableRows = tableNode.getChildren();
      if (tableRowIndex >= tableRows.length || tableRowIndex < 0) {
        throw new Error("Expected table cell to be inside of table row.");
      }
      const tableRow = tableRows[tableRowIndex];
      if (!(0, import_table4.$isTableRowNode)(tableRow)) {
        throw new Error("Expected table row");
      }
      tableRow.getChildren().forEach((tableCell) => {
        if (!(0, import_table4.$isTableCellNode)(tableCell)) {
          throw new Error("Expected table cell");
        }
        tableCell.toggleHeaderStyle(import_table4.TableCellHeaderStates.ROW);
      });
      clearTableSelection();
      onClose();
    });
  }, [editor, tableCellNode, clearTableSelection, onClose]);
  const toggleTableColumnIsHeader = (0, import_react39.useCallback)(() => {
    editor.update(() => {
      const tableNode = (0, import_table4.$getTableNodeFromLexicalNodeOrThrow)(tableCellNode);
      const tableColumnIndex = (0, import_table4.$getTableColumnIndexFromTableCellNode)(tableCellNode);
      const tableRows = tableNode.getChildren();
      const maxRowsLength = Math.max(
        ...tableRows.map((row) => row.getChildren().length)
      );
      if (tableColumnIndex >= maxRowsLength || tableColumnIndex < 0) {
        throw new Error("Expected table cell to be inside of table row.");
      }
      for (let r = 0; r < tableRows.length; r++) {
        const tableRow = tableRows[r];
        if (!(0, import_table4.$isTableRowNode)(tableRow)) {
          throw new Error("Expected table row");
        }
        const tableCells = tableRow.getChildren();
        if (tableColumnIndex >= tableCells.length) {
          continue;
        }
        const tableCell = tableCells[tableColumnIndex];
        if (!(0, import_table4.$isTableCellNode)(tableCell)) {
          throw new Error("Expected table cell");
        }
        tableCell.toggleHeaderStyle(import_table4.TableCellHeaderStates.COLUMN);
      }
      clearTableSelection();
      onClose();
    });
  }, [editor, tableCellNode, clearTableSelection, onClose]);
  const handleCellBackgroundColor = (0, import_react39.useCallback)(
    (value) => {
      editor.update(() => {
        const selection = (0, import_lexical27.$getSelection)();
        if ((0, import_lexical27.$isRangeSelection)(selection) || (0, import_table4.$isTableSelection)(selection)) {
          const [cell] = (0, import_table4.$getNodeTriplet)(selection.anchor);
          if ((0, import_table4.$isTableCellNode)(cell)) {
            cell.setBackgroundColor(value);
          }
          if ((0, import_table4.$isTableSelection)(selection)) {
            const nodes = selection.getNodes();
            for (let i = 0; i < nodes.length; i++) {
              const node = nodes[i];
              if ((0, import_table4.$isTableCellNode)(node)) {
                node.setBackgroundColor(value);
              }
            }
          }
        }
      });
    },
    [editor]
  );
  let mergeCellButton = null;
  if (cellMerge) {
    if (canMergeCells) {
      mergeCellButton = /* @__PURE__ */ React37.createElement(
        "button",
        {
          type: "button",
          className: "item",
          onClick: () => mergeTableCellsAtSelection(),
          "data-test-id": "table-merge-cells"
        },
        "Merge cells"
      );
    } else if (canUnmergeCell) {
      mergeCellButton = /* @__PURE__ */ React37.createElement(
        "button",
        {
          type: "button",
          className: "item",
          onClick: () => unmergeTableCellsAtSelection(),
          "data-test-id": "table-unmerge-cells"
        },
        "Unmerge cells"
      );
    }
  }
  return (0, import_react_dom8.createPortal)(
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    /* @__PURE__ */ React37.createElement(
      "div",
      {
        className: "dropdown",
        ref: dropDownRef,
        onClick: (e) => {
          e.stopPropagation();
        }
      },
      mergeCellButton,
      /* @__PURE__ */ React37.createElement(
        "button",
        {
          type: "button",
          className: "item",
          onClick: () => showColorPickerModal("Cell background color", () => /* @__PURE__ */ React37.createElement(
            ColorPicker,
            {
              color: backgroundColor,
              onChange: handleCellBackgroundColor
            }
          )),
          "data-test-id": "table-background-color"
        },
        /* @__PURE__ */ React37.createElement("span", { className: "text" }, "Background color")
      ),
      /* @__PURE__ */ React37.createElement("hr", null),
      /* @__PURE__ */ React37.createElement(
        "button",
        {
          type: "button",
          className: "item",
          onClick: () => insertTableRowAtSelection(false),
          "data-test-id": "table-insert-row-above"
        },
        /* @__PURE__ */ React37.createElement("span", { className: "text" }, "Insert", " ", selectionCounts.rows === 1 ? "row" : `${selectionCounts.rows} rows`, " ", "above")
      ),
      /* @__PURE__ */ React37.createElement(
        "button",
        {
          type: "button",
          className: "item",
          onClick: () => insertTableRowAtSelection(true),
          "data-test-id": "table-insert-row-below"
        },
        /* @__PURE__ */ React37.createElement("span", { className: "text" }, "Insert", " ", selectionCounts.rows === 1 ? "row" : `${selectionCounts.rows} rows`, " ", "below")
      ),
      /* @__PURE__ */ React37.createElement("hr", null),
      /* @__PURE__ */ React37.createElement(
        "button",
        {
          type: "button",
          className: "item",
          onClick: () => insertTableColumnAtSelection(false),
          "data-test-id": "table-insert-column-before"
        },
        /* @__PURE__ */ React37.createElement("span", { className: "text" }, "Insert", " ", selectionCounts.columns === 1 ? "column" : `${selectionCounts.columns} columns`, " ", "left")
      ),
      /* @__PURE__ */ React37.createElement(
        "button",
        {
          type: "button",
          className: "item",
          onClick: () => insertTableColumnAtSelection(true),
          "data-test-id": "table-insert-column-after"
        },
        /* @__PURE__ */ React37.createElement("span", { className: "text" }, "Insert", " ", selectionCounts.columns === 1 ? "column" : `${selectionCounts.columns} columns`, " ", "right")
      ),
      /* @__PURE__ */ React37.createElement("hr", null),
      /* @__PURE__ */ React37.createElement(
        "button",
        {
          type: "button",
          className: "item",
          onClick: () => deleteTableColumnAtSelection(),
          "data-test-id": "table-delete-columns"
        },
        /* @__PURE__ */ React37.createElement("span", { className: "text" }, "Delete column")
      ),
      /* @__PURE__ */ React37.createElement(
        "button",
        {
          type: "button",
          className: "item",
          onClick: () => deleteTableRowAtSelection(),
          "data-test-id": "table-delete-rows"
        },
        /* @__PURE__ */ React37.createElement("span", { className: "text" }, "Delete row")
      ),
      /* @__PURE__ */ React37.createElement(
        "button",
        {
          type: "button",
          className: "item",
          onClick: () => deleteTableAtSelection(),
          "data-test-id": "table-delete"
        },
        /* @__PURE__ */ React37.createElement("span", { className: "text" }, "Delete table")
      ),
      /* @__PURE__ */ React37.createElement("hr", null),
      /* @__PURE__ */ React37.createElement(
        "button",
        {
          type: "button",
          className: "item",
          onClick: () => toggleTableRowIsHeader()
        },
        /* @__PURE__ */ React37.createElement("span", { className: "text" }, (tableCellNode.__headerState & import_table4.TableCellHeaderStates.ROW) === import_table4.TableCellHeaderStates.ROW ? "Remove" : "Add", " ", "row header")
      ),
      /* @__PURE__ */ React37.createElement(
        "button",
        {
          type: "button",
          className: "item",
          onClick: () => toggleTableColumnIsHeader(),
          "data-test-id": "table-column-header"
        },
        /* @__PURE__ */ React37.createElement("span", { className: "text" }, (tableCellNode.__headerState & import_table4.TableCellHeaderStates.COLUMN) === import_table4.TableCellHeaderStates.COLUMN ? "Remove" : "Add", " ", "column header")
      )
    ),
    document.body
  );
}
function TableCellActionMenuContainer({
  anchorElem,
  cellMerge
}) {
  const [editor] = (0, import_LexicalComposerContext23.useLexicalComposerContext)();
  const menuButtonRef = (0, import_react39.useRef)(null);
  const menuRootRef = (0, import_react39.useRef)(null);
  const [isMenuOpen, setIsMenuOpen] = (0, import_react39.useState)(false);
  const [tableCellNode, setTableMenuCellNode] = (0, import_react39.useState)(
    null
  );
  const [colorPickerModal, showColorPickerModal] = useModal();
  const $moveMenu = (0, import_react39.useCallback)(() => {
    const menu = menuButtonRef.current;
    const selection = (0, import_lexical27.$getSelection)();
    const nativeSelection = window.getSelection();
    const activeElement = document.activeElement;
    if (selection == null || menu == null) {
      setTableMenuCellNode(null);
      return;
    }
    const rootElement = editor.getRootElement();
    if ((0, import_lexical27.$isRangeSelection)(selection) && rootElement !== null && nativeSelection !== null && rootElement.contains(nativeSelection.anchorNode)) {
      const tableCellNodeFromSelection = (0, import_table4.$getTableCellNodeFromLexicalNode)(
        selection.anchor.getNode()
      );
      if (tableCellNodeFromSelection == null) {
        setTableMenuCellNode(null);
        return;
      }
      const tableCellParentNodeDOM = editor.getElementByKey(
        tableCellNodeFromSelection.getKey()
      );
      if (tableCellParentNodeDOM == null) {
        setTableMenuCellNode(null);
        return;
      }
      setTableMenuCellNode(tableCellNodeFromSelection);
    } else if (!activeElement) {
      setTableMenuCellNode(null);
    }
  }, [editor]);
  (0, import_react39.useEffect)(() => {
    return editor.registerUpdateListener(() => {
      editor.getEditorState().read(() => {
        $moveMenu();
      });
    });
  });
  (0, import_react39.useEffect)(() => {
    const menuButtonDOM = menuButtonRef.current;
    if (menuButtonDOM != null && tableCellNode != null) {
      const tableCellNodeDOM = editor.getElementByKey(tableCellNode.getKey());
      if (tableCellNodeDOM != null) {
        const tableCellRect = tableCellNodeDOM.getBoundingClientRect();
        const menuRect = menuButtonDOM.getBoundingClientRect();
        const anchorRect = anchorElem.getBoundingClientRect();
        const top = tableCellRect.top - anchorRect.top + 4;
        const left = tableCellRect.right - menuRect.width - 10 - anchorRect.left;
        menuButtonDOM.style.opacity = "1";
        menuButtonDOM.style.transform = `translate(${left}px, ${top}px)`;
      } else {
        menuButtonDOM.style.opacity = "0";
        menuButtonDOM.style.transform = "translate(-10000px, -10000px)";
      }
    }
  }, [menuButtonRef, tableCellNode, editor, anchorElem]);
  const prevTableCellDOM = (0, import_react39.useRef)(tableCellNode);
  (0, import_react39.useEffect)(() => {
    if (prevTableCellDOM.current !== tableCellNode) {
      setIsMenuOpen(false);
    }
    prevTableCellDOM.current = tableCellNode;
  }, [prevTableCellDOM, tableCellNode]);
  return /* @__PURE__ */ React37.createElement("div", { className: "table-cell-action-button-container", ref: menuButtonRef }, tableCellNode != null && /* @__PURE__ */ React37.createElement(React37.Fragment, null, /* @__PURE__ */ React37.createElement(
    "button",
    {
      type: "button",
      className: "table-cell-action-button chevron-down",
      onClick: (e) => {
        e.stopPropagation();
        setIsMenuOpen(!isMenuOpen);
      },
      ref: menuRootRef
    },
    /* @__PURE__ */ React37.createElement("i", { className: "chevron-down" })
  ), colorPickerModal, isMenuOpen && /* @__PURE__ */ React37.createElement(
    TableActionMenu,
    {
      contextRef: menuRootRef,
      setIsMenuOpen,
      onClose: () => setIsMenuOpen(false),
      tableCellNode,
      cellMerge,
      showColorPickerModal
    }
  )));
}
function TableActionMenuPlugin({
  anchorElem = document.body,
  cellMerge = false
}) {
  const isEditable = (0, import_useLexicalEditable.default)();
  return (0, import_react_dom8.createPortal)(
    isEditable ? /* @__PURE__ */ React37.createElement(
      TableCellActionMenuContainer,
      {
        anchorElem,
        cellMerge
      }
    ) : null,
    anchorElem
  );
}

// src/components/editor/plugins/TableCellResizer/index.tsx
init_cjs_shims();
var import_LexicalComposerContext24 = require("@lexical/react/LexicalComposerContext");
var import_useLexicalEditable2 = __toESM(require("@lexical/react/useLexicalEditable"));
var import_table5 = require("@lexical/table");
var import_utils17 = require("@lexical/utils");
var import_lexical28 = require("lexical");
var React38 = __toESM(require("react"));
var import_react40 = require("react");
var import_react_dom9 = require("react-dom");
var MIN_ROW_HEIGHT = 33;
var MIN_COLUMN_WIDTH = 50;
function TableCellResizer({ editor }) {
  const targetRef = (0, import_react40.useRef)(null);
  const resizerRef = (0, import_react40.useRef)(null);
  const tableRectRef = (0, import_react40.useRef)(null);
  const mouseStartPosRef = (0, import_react40.useRef)(null);
  const [mouseCurrentPos, updateMouseCurrentPos] = (0, import_react40.useState)(null);
  const [activeCell, updateActiveCell] = (0, import_react40.useState)(null);
  const [isMouseDown, updateIsMouseDown] = (0, import_react40.useState)(false);
  const [draggingDirection, updateDraggingDirection] = (0, import_react40.useState)(null);
  const resetState = (0, import_react40.useCallback)(() => {
    updateActiveCell(null);
    targetRef.current = null;
    updateDraggingDirection(null);
    mouseStartPosRef.current = null;
    tableRectRef.current = null;
  }, []);
  const isMouseDownOnEvent = (event) => {
    return (event.buttons & 1) === 1;
  };
  (0, import_react40.useEffect)(() => {
    const onMouseMove = (event) => {
      setTimeout(() => {
        const target = event.target;
        if (draggingDirection) {
          updateMouseCurrentPos({
            x: event.clientX,
            y: event.clientY
          });
          return;
        }
        updateIsMouseDown(isMouseDownOnEvent(event));
        if (resizerRef.current && resizerRef.current.contains(target)) {
          return;
        }
        if (targetRef.current !== target) {
          targetRef.current = target;
          const cell = (0, import_table5.getDOMCellFromTarget)(target);
          if (cell && activeCell !== cell) {
            editor.update(() => {
              const tableCellNode = (0, import_lexical28.$getNearestNodeFromDOMNode)(cell.elem);
              if (!tableCellNode) {
                throw new Error("TableCellResizer: Table cell node not found.");
              }
              const tableNode = (0, import_table5.$getTableNodeFromLexicalNodeOrThrow)(tableCellNode);
              const tableElement = editor.getElementByKey(tableNode.getKey());
              if (!tableElement) {
                throw new Error("TableCellResizer: Table element not found.");
              }
              targetRef.current = target;
              tableRectRef.current = tableElement.getBoundingClientRect();
              updateActiveCell(cell);
            });
          } else if (cell == null) {
            resetState();
          }
        }
      }, 0);
    };
    const onMouseDown = (event) => {
      setTimeout(() => {
        updateIsMouseDown(true);
      }, 0);
    };
    const onMouseUp = (event) => {
      setTimeout(() => {
        updateIsMouseDown(false);
      }, 0);
    };
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
    };
  }, [activeCell, draggingDirection, editor, resetState]);
  const isHeightChanging = (direction) => {
    if (direction === "bottom") {
      return true;
    }
    return false;
  };
  const updateRowHeight = (0, import_react40.useCallback)(
    (heightChange) => {
      if (!activeCell) {
        throw new Error("TableCellResizer: Expected active cell.");
      }
      editor.update(
        () => {
          const tableCellNode = (0, import_lexical28.$getNearestNodeFromDOMNode)(activeCell.elem);
          if (!(0, import_table5.$isTableCellNode)(tableCellNode)) {
            throw new Error("TableCellResizer: Table cell node not found.");
          }
          const tableNode = (0, import_table5.$getTableNodeFromLexicalNodeOrThrow)(tableCellNode);
          const tableRowIndex = (0, import_table5.$getTableRowIndexFromTableCellNode)(tableCellNode);
          const tableRows = tableNode.getChildren();
          if (tableRowIndex >= tableRows.length || tableRowIndex < 0) {
            throw new Error("Expected table cell to be inside of table row.");
          }
          const tableRow = tableRows[tableRowIndex];
          if (!(0, import_table5.$isTableRowNode)(tableRow)) {
            throw new Error("Expected table row");
          }
          let height = tableRow.getHeight();
          if (height === void 0) {
            const rowCells = tableRow.getChildren();
            height = Math.min(
              ...rowCells.map(
                (cell) => {
                  var _a;
                  return (_a = getCellNodeHeight(cell, editor)) != null ? _a : Infinity;
                }
              )
            );
          }
          const newHeight = Math.max(height + heightChange, MIN_ROW_HEIGHT);
          tableRow.setHeight(newHeight);
        },
        { tag: "skip-scroll-into-view" }
      );
    },
    [activeCell, editor]
  );
  const getCellNodeWidth = (cell, activeEditor) => {
    const width = cell.getWidth();
    if (width !== void 0) {
      return width;
    }
    const domCellNode = activeEditor.getElementByKey(cell.getKey());
    if (domCellNode == null) {
      return void 0;
    }
    const computedStyle = getComputedStyle(domCellNode);
    return domCellNode.clientWidth - parseFloat(computedStyle.paddingLeft) - parseFloat(computedStyle.paddingRight);
  };
  const getCellNodeHeight = (cell, activeEditor) => {
    const domCellNode = activeEditor.getElementByKey(cell.getKey());
    return domCellNode == null ? void 0 : domCellNode.clientHeight;
  };
  const getCellColumnIndex = (tableCellNode, tableMap) => {
    for (let row = 0; row < tableMap.length; row++) {
      for (let column = 0; column < tableMap[row].length; column++) {
        if (tableMap[row][column].cell === tableCellNode) {
          return column;
        }
      }
    }
  };
  const updateColumnWidth = (0, import_react40.useCallback)(
    (widthChange) => {
      if (!activeCell) {
        throw new Error("TableCellResizer: Expected active cell.");
      }
      editor.update(
        () => {
          const tableCellNode = (0, import_lexical28.$getNearestNodeFromDOMNode)(activeCell.elem);
          if (!(0, import_table5.$isTableCellNode)(tableCellNode)) {
            throw new Error("TableCellResizer: Table cell node not found.");
          }
          const tableNode = (0, import_table5.$getTableNodeFromLexicalNodeOrThrow)(tableCellNode);
          const [tableMap] = (0, import_table5.$computeTableMapSkipCellCheck)(
            tableNode,
            null,
            null
          );
          const columnIndex = getCellColumnIndex(tableCellNode, tableMap);
          if (columnIndex === void 0) {
            throw new Error("TableCellResizer: Table column not found.");
          }
          for (let row = 0; row < tableMap.length; row++) {
            const cell = tableMap[row][columnIndex];
            if (cell.startRow === row && (columnIndex === tableMap[row].length - 1 || tableMap[row][columnIndex].cell !== tableMap[row][columnIndex + 1].cell)) {
              const width = getCellNodeWidth(cell.cell, editor);
              if (width === void 0) {
                continue;
              }
              const newWidth = Math.max(width + widthChange, MIN_COLUMN_WIDTH);
              cell.cell.setWidth(newWidth);
            }
          }
        },
        { tag: "skip-scroll-into-view" }
      );
    },
    [activeCell, editor]
  );
  const mouseUpHandler = (0, import_react40.useCallback)(
    (direction) => {
      const handler = (event) => {
        event.preventDefault();
        event.stopPropagation();
        if (!activeCell) {
          throw new Error("TableCellResizer: Expected active cell.");
        }
        if (mouseStartPosRef.current) {
          const { x, y } = mouseStartPosRef.current;
          if (activeCell === null) {
            return;
          }
          const zoom = (0, import_utils17.calculateZoomLevel)(event.target);
          if (isHeightChanging(direction)) {
            const heightChange = (event.clientY - y) / zoom;
            updateRowHeight(heightChange);
          } else {
            const widthChange = (event.clientX - x) / zoom;
            updateColumnWidth(widthChange);
          }
          resetState();
          document.removeEventListener("mouseup", handler);
        }
      };
      return handler;
    },
    [activeCell, resetState, updateColumnWidth, updateRowHeight]
  );
  const toggleResize = (0, import_react40.useCallback)(
    (direction) => (event) => {
      event.preventDefault();
      event.stopPropagation();
      if (!activeCell) {
        throw new Error("TableCellResizer: Expected active cell.");
      }
      mouseStartPosRef.current = {
        x: event.clientX,
        y: event.clientY
      };
      updateMouseCurrentPos(mouseStartPosRef.current);
      updateDraggingDirection(direction);
      document.addEventListener("mouseup", mouseUpHandler(direction));
    },
    [activeCell, mouseUpHandler]
  );
  const getResizers = (0, import_react40.useCallback)(() => {
    if (activeCell) {
      const { height, width, top, left } = activeCell.elem.getBoundingClientRect();
      const zoom = (0, import_utils17.calculateZoomLevel)(activeCell.elem);
      const zoneWidth = 10;
      const styles = {
        bottom: {
          backgroundColor: "none",
          cursor: "row-resize",
          height: `${zoneWidth}px`,
          left: `${window.pageXOffset + left}px`,
          top: `${window.pageYOffset + top + height - zoneWidth / 2}px`,
          width: `${width}px`
        },
        right: {
          backgroundColor: "none",
          cursor: "col-resize",
          height: `${height}px`,
          left: `${window.pageXOffset + left + width - zoneWidth / 2}px`,
          top: `${window.pageYOffset + top}px`,
          width: `${zoneWidth}px`
        }
      };
      const tableRect = tableRectRef.current;
      if (draggingDirection && mouseCurrentPos && tableRect) {
        if (isHeightChanging(draggingDirection)) {
          styles[draggingDirection].left = `${window.pageXOffset + tableRect.left}px`;
          styles[draggingDirection].top = `${window.pageYOffset + mouseCurrentPos.y / zoom}px`;
          styles[draggingDirection].height = "3px";
          styles[draggingDirection].width = `${tableRect.width}px`;
        } else {
          styles[draggingDirection].top = `${window.pageYOffset + tableRect.top}px`;
          styles[draggingDirection].left = `${window.pageXOffset + mouseCurrentPos.x / zoom}px`;
          styles[draggingDirection].width = "3px";
          styles[draggingDirection].height = `${tableRect.height}px`;
        }
        styles[draggingDirection].backgroundColor = "#adf";
      }
      return styles;
    }
    return {
      bottom: null,
      left: null,
      right: null,
      top: null
    };
  }, [activeCell, draggingDirection, mouseCurrentPos]);
  const resizerStyles = getResizers();
  return /* @__PURE__ */ React38.createElement("div", { ref: resizerRef }, activeCell != null && !isMouseDown && /* @__PURE__ */ React38.createElement(React38.Fragment, null, /* @__PURE__ */ React38.createElement(
    "div",
    {
      className: "TableCellResizer__resizer TableCellResizer__ui",
      style: resizerStyles.right || void 0,
      onMouseDown: toggleResize("right")
    }
  ), /* @__PURE__ */ React38.createElement(
    "div",
    {
      className: "TableCellResizer__resizer TableCellResizer__ui",
      style: resizerStyles.bottom || void 0,
      onMouseDown: toggleResize("bottom")
    }
  )));
}
function TableCellResizerPlugin() {
  const [editor] = (0, import_LexicalComposerContext24.useLexicalComposerContext)();
  const isEditable = (0, import_useLexicalEditable2.default)();
  return (0, import_react40.useMemo)(
    () => isEditable ? (0, import_react_dom9.createPortal)(/* @__PURE__ */ React38.createElement(TableCellResizer, { editor }), document.body) : null,
    [editor, isEditable]
  );
}

// src/components/editor/plugins/ToolbarPlugin/index.tsx
init_cjs_shims();
var import_code8 = require("@lexical/code");
var import_link4 = require("@lexical/link");
var import_list4 = require("@lexical/list");
var import_LexicalAutoEmbedPlugin3 = require("@lexical/react/LexicalAutoEmbedPlugin");
var import_LexicalComposerContext25 = require("@lexical/react/LexicalComposerContext");
var import_LexicalDecoratorBlockNode2 = require("@lexical/react/LexicalDecoratorBlockNode");
var import_LexicalHorizontalRuleNode3 = require("@lexical/react/LexicalHorizontalRuleNode");
var import_rich_text5 = require("@lexical/rich-text");
var import_selection5 = require("@lexical/selection");
var import_table6 = require("@lexical/table");
var import_utils18 = require("@lexical/utils");
var import_lexical30 = require("lexical");
var import_react41 = require("react");
var React41 = __toESM(require("react"));

// src/components/editor/shared/environment.ts
init_cjs_shims();
var documentMode = CAN_USE_DOM && "documentMode" in document ? document.documentMode : null;
var IS_APPLE = CAN_USE_DOM && /Mac|iPod|iPhone|iPad/.test(navigator.platform);
var IS_FIREFOX = CAN_USE_DOM && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent);
var CAN_USE_BEFORE_INPUT = CAN_USE_DOM && "InputEvent" in window && !documentMode ? "getTargetRanges" in new window.InputEvent("input") : false;
var IS_SAFARI = CAN_USE_DOM && /Version\/[\d.]+.*Safari/.test(navigator.userAgent);
var IS_IOS = CAN_USE_DOM && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
var IS_ANDROID = CAN_USE_DOM && /Android/.test(navigator.userAgent);
var IS_CHROME = CAN_USE_DOM && /^(?=.*Chrome).*/i.test(navigator.userAgent);
var IS_APPLE_WEBKIT = CAN_USE_DOM && /AppleWebKit\/[\d.]+/.test(navigator.userAgent) && !IS_CHROME;

// src/components/editor/ui/DropdownColorPicker.tsx
init_cjs_shims();
var React39 = __toESM(require("react"));
function DropdownColorPicker(_a) {
  var _b = _a, {
    disabled = false,
    stopCloseOnClickSelf = true,
    color,
    onChange
  } = _b, rest = __objRest(_b, [
    "disabled",
    "stopCloseOnClickSelf",
    "color",
    "onChange"
  ]);
  return /* @__PURE__ */ React39.createElement(
    DropDown,
    __spreadProps(__spreadValues({}, rest), {
      disabled,
      stopCloseOnClickSelf
    }),
    /* @__PURE__ */ React39.createElement(ColorPicker, { color, onChange })
  );
}

// src/components/editor/plugins/ToolbarPlugin/index.tsx
init_url();

// src/components/editor/plugins/ToolbarPlugin/fontSize.tsx
init_cjs_shims();
var import_selection4 = require("@lexical/selection");
var import_lexical29 = require("lexical");
var React40 = __toESM(require("react"));
var MIN_ALLOWED_FONT_SIZE = 8;
var MAX_ALLOWED_FONT_SIZE = 72;
var DEFAULT_FONT_SIZE = 15;
function FontSize({
  selectionFontSize,
  disabled,
  editor
}) {
  const [inputValue, setInputValue] = React40.useState(selectionFontSize);
  const [inputChangeFlag, setInputChangeFlag] = React40.useState(false);
  const calculateNextFontSize = (currentFontSize, updateType) => {
    if (!updateType) {
      return currentFontSize;
    }
    let updatedFontSize = currentFontSize;
    switch (updateType) {
      case 2 /* decrement */:
        switch (true) {
          case currentFontSize > MAX_ALLOWED_FONT_SIZE:
            updatedFontSize = MAX_ALLOWED_FONT_SIZE;
            break;
          case currentFontSize >= 48:
            updatedFontSize -= 12;
            break;
          case currentFontSize >= 24:
            updatedFontSize -= 4;
            break;
          case currentFontSize >= 14:
            updatedFontSize -= 2;
            break;
          case currentFontSize >= 9:
            updatedFontSize -= 1;
            break;
          default:
            updatedFontSize = MIN_ALLOWED_FONT_SIZE;
            break;
        }
        break;
      case 1 /* increment */:
        switch (true) {
          case currentFontSize < MIN_ALLOWED_FONT_SIZE:
            updatedFontSize = MIN_ALLOWED_FONT_SIZE;
            break;
          case currentFontSize < 12:
            updatedFontSize += 1;
            break;
          case currentFontSize < 20:
            updatedFontSize += 2;
            break;
          case currentFontSize < 36:
            updatedFontSize += 4;
            break;
          case currentFontSize <= 60:
            updatedFontSize += 12;
            break;
          default:
            updatedFontSize = MAX_ALLOWED_FONT_SIZE;
            break;
        }
        break;
      default:
        break;
    }
    return updatedFontSize;
  };
  const updateFontSizeInSelection = React40.useCallback(
    (newFontSize, updateType) => {
      const getNextFontSize = (prevFontSize) => {
        if (!prevFontSize) {
          prevFontSize = `${DEFAULT_FONT_SIZE}px`;
        }
        prevFontSize = prevFontSize.slice(0, -2);
        const nextFontSize = calculateNextFontSize(
          Number(prevFontSize),
          updateType
        );
        return `${nextFontSize}px`;
      };
      editor.update(() => {
        if (editor.isEditable()) {
          const selection = (0, import_lexical29.$getSelection)();
          if (selection !== null) {
            (0, import_selection4.$patchStyleText)(selection, {
              "font-size": newFontSize || getNextFontSize
            });
          }
        }
      });
    },
    [editor]
  );
  const handleKeyPress = (e) => {
    const inputValueNumber = Number(inputValue);
    if (["e", "E", "+", "-"].includes(e.key) || isNaN(inputValueNumber)) {
      e.preventDefault();
      setInputValue("");
      return;
    }
    setInputChangeFlag(true);
    if (e.key === "Enter" || e.key === "Tab" || e.key === "Escape") {
      e.preventDefault();
      updateFontSizeByInputValue(inputValueNumber);
    }
  };
  const handleInputBlur = () => {
    if (inputValue !== "" && inputChangeFlag) {
      const inputValueNumber = Number(inputValue);
      updateFontSizeByInputValue(inputValueNumber);
    }
  };
  const handleButtonClick = (updateType) => {
    if (inputValue !== "") {
      const nextFontSize = calculateNextFontSize(
        Number(inputValue),
        updateType
      );
      updateFontSizeInSelection(String(nextFontSize) + "px", null);
    } else {
      updateFontSizeInSelection(null, updateType);
    }
  };
  const updateFontSizeByInputValue = (inputValueNumber) => {
    let updatedFontSize = inputValueNumber;
    if (inputValueNumber > MAX_ALLOWED_FONT_SIZE) {
      updatedFontSize = MAX_ALLOWED_FONT_SIZE;
    } else if (inputValueNumber < MIN_ALLOWED_FONT_SIZE) {
      updatedFontSize = MIN_ALLOWED_FONT_SIZE;
    }
    setInputValue(String(updatedFontSize));
    updateFontSizeInSelection(String(updatedFontSize) + "px", null);
    setInputChangeFlag(false);
  };
  React40.useEffect(() => {
    setInputValue(selectionFontSize);
  }, [selectionFontSize]);
  return /* @__PURE__ */ React40.createElement(React40.Fragment, null, /* @__PURE__ */ React40.createElement(
    "button",
    {
      type: "button",
      disabled: disabled || selectionFontSize !== "" && Number(inputValue) <= MIN_ALLOWED_FONT_SIZE,
      onClick: () => handleButtonClick(2 /* decrement */),
      className: "toolbar-item font-decrement"
    },
    /* @__PURE__ */ React40.createElement("i", { className: "format minus-icon" })
  ), /* @__PURE__ */ React40.createElement(
    "input",
    {
      type: "number",
      value: inputValue,
      disabled,
      className: "toolbar-item font-size-input",
      min: MIN_ALLOWED_FONT_SIZE,
      max: MAX_ALLOWED_FONT_SIZE,
      onChange: (e) => setInputValue(e.target.value),
      onKeyDown: handleKeyPress,
      onBlur: handleInputBlur
    }
  ), /* @__PURE__ */ React40.createElement(
    "button",
    {
      type: "button",
      disabled: disabled || selectionFontSize !== "" && Number(inputValue) >= MAX_ALLOWED_FONT_SIZE,
      onClick: () => handleButtonClick(1 /* increment */),
      className: "toolbar-item font-increment"
    },
    /* @__PURE__ */ React40.createElement("i", { className: "format add-icon" })
  ));
}

// src/components/editor/plugins/ToolbarPlugin/index.tsx
var blockTypeToBlockName = {
  bullet: "Bulleted List",
  check: "Check List",
  code: "Code Block",
  h1: "Heading 1",
  h2: "Heading 2",
  h3: "Heading 3",
  h4: "Heading 4",
  h5: "Heading 5",
  h6: "Heading 6",
  number: "Numbered List",
  paragraph: "Normal",
  quote: "Quote"
};
function getCodeLanguageOptions() {
  const options = [];
  for (const [lang, friendlyName] of Object.entries(
    import_code8.CODE_LANGUAGE_FRIENDLY_NAME_MAP
  )) {
    options.push([lang, friendlyName]);
  }
  return options;
}
var CODE_LANGUAGE_OPTIONS = getCodeLanguageOptions();
var FONT_FAMILY_OPTIONS = [
  ["Arial", "Arial"],
  ["Courier New", "Courier New"],
  ["Georgia", "Georgia"],
  ["Times New Roman", "Times New Roman"],
  ["Trebuchet MS", "Trebuchet MS"],
  ["Verdana", "Verdana"]
];
var FONT_SIZE_OPTIONS = [
  ["10px", "10px"],
  ["11px", "11px"],
  ["12px", "12px"],
  ["13px", "13px"],
  ["14px", "14px"],
  ["15px", "15px"],
  ["16px", "16px"],
  ["17px", "17px"],
  ["18px", "18px"],
  ["19px", "19px"],
  ["20px", "20px"]
];
var ELEMENT_FORMAT_OPTIONS = {
  center: {
    icon: "center-align",
    iconRTL: "center-align",
    name: "Center Align"
  },
  end: {
    icon: "right-align",
    iconRTL: "left-align",
    name: "End Align"
  },
  justify: {
    icon: "justify-align",
    iconRTL: "justify-align",
    name: "Justify Align"
  },
  left: {
    icon: "left-align",
    iconRTL: "left-align",
    name: "Left Align"
  },
  right: {
    icon: "right-align",
    iconRTL: "right-align",
    name: "Right Align"
  },
  start: {
    icon: "left-align",
    iconRTL: "right-align",
    name: "Start Align"
  }
};
function dropDownActiveClass(active) {
  if (active) {
    return "active dropdown-item-active";
  } else {
    return "";
  }
}
function BlockFormatDropDown({
  editor,
  blockType,
  rootType,
  disabled = false
}) {
  const formatParagraph = () => {
    editor.update(() => {
      const selection = (0, import_lexical30.$getSelection)();
      if ((0, import_lexical30.$isRangeSelection)(selection)) {
        (0, import_selection5.$setBlocksType)(selection, () => (0, import_lexical30.$createParagraphNode)());
      }
    });
  };
  const formatHeading = (headingSize) => {
    if (blockType !== headingSize) {
      editor.update(() => {
        const selection = (0, import_lexical30.$getSelection)();
        (0, import_selection5.$setBlocksType)(selection, () => (0, import_rich_text5.$createHeadingNode)(headingSize));
      });
    }
  };
  const formatBulletList = () => {
    if (blockType !== "bullet") {
      editor.dispatchCommand(import_list4.INSERT_UNORDERED_LIST_COMMAND, void 0);
    } else {
      formatParagraph();
    }
  };
  const formatCheckList = () => {
    if (blockType !== "check") {
      editor.dispatchCommand(import_list4.INSERT_CHECK_LIST_COMMAND, void 0);
    } else {
      formatParagraph();
    }
  };
  const formatNumberedList = () => {
    if (blockType !== "number") {
      editor.dispatchCommand(import_list4.INSERT_ORDERED_LIST_COMMAND, void 0);
    } else {
      formatParagraph();
    }
  };
  const formatQuote = () => {
    if (blockType !== "quote") {
      editor.update(() => {
        const selection = (0, import_lexical30.$getSelection)();
        (0, import_selection5.$setBlocksType)(selection, () => (0, import_rich_text5.$createQuoteNode)());
      });
    }
  };
  const formatCode = () => {
    if (blockType !== "code") {
      editor.update(() => {
        let selection = (0, import_lexical30.$getSelection)();
        if (selection !== null) {
          if (selection.isCollapsed()) {
            (0, import_selection5.$setBlocksType)(selection, () => (0, import_code8.$createCodeNode)());
          } else {
            const textContent = selection.getTextContent();
            const codeNode = (0, import_code8.$createCodeNode)();
            selection.insertNodes([codeNode]);
            selection = (0, import_lexical30.$getSelection)();
            if ((0, import_lexical30.$isRangeSelection)(selection)) {
              selection.insertRawText(textContent);
            }
          }
        }
      });
    }
  };
  return /* @__PURE__ */ React41.createElement(
    DropDown,
    {
      disabled,
      buttonClassName: "toolbar-item block-controls",
      buttonIconClassName: "icon block-type " + blockType,
      buttonLabel: blockTypeToBlockName[blockType],
      buttonAriaLabel: "Formatting options for text style"
    },
    /* @__PURE__ */ React41.createElement(
      DropDownItem,
      {
        className: "item " + dropDownActiveClass(blockType === "paragraph"),
        onClick: formatParagraph
      },
      /* @__PURE__ */ React41.createElement("i", { className: "icon paragraph" }),
      /* @__PURE__ */ React41.createElement("span", { className: "text" }, "Normal")
    ),
    /* @__PURE__ */ React41.createElement(
      DropDownItem,
      {
        className: "item " + dropDownActiveClass(blockType === "h1"),
        onClick: () => formatHeading("h1")
      },
      /* @__PURE__ */ React41.createElement("i", { className: "icon h1" }),
      /* @__PURE__ */ React41.createElement("span", { className: "text" }, "Heading 1")
    ),
    /* @__PURE__ */ React41.createElement(
      DropDownItem,
      {
        className: "item " + dropDownActiveClass(blockType === "h2"),
        onClick: () => formatHeading("h2")
      },
      /* @__PURE__ */ React41.createElement("i", { className: "icon h2" }),
      /* @__PURE__ */ React41.createElement("span", { className: "text" }, "Heading 2")
    ),
    /* @__PURE__ */ React41.createElement(
      DropDownItem,
      {
        className: "item " + dropDownActiveClass(blockType === "h3"),
        onClick: () => formatHeading("h3")
      },
      /* @__PURE__ */ React41.createElement("i", { className: "icon h3" }),
      /* @__PURE__ */ React41.createElement("span", { className: "text" }, "Heading 3")
    ),
    /* @__PURE__ */ React41.createElement(
      DropDownItem,
      {
        className: "item " + dropDownActiveClass(blockType === "bullet"),
        onClick: formatBulletList
      },
      /* @__PURE__ */ React41.createElement("i", { className: "icon bullet-list" }),
      /* @__PURE__ */ React41.createElement("span", { className: "text" }, "Bullet List")
    ),
    /* @__PURE__ */ React41.createElement(
      DropDownItem,
      {
        className: "item " + dropDownActiveClass(blockType === "number"),
        onClick: formatNumberedList
      },
      /* @__PURE__ */ React41.createElement("i", { className: "icon numbered-list" }),
      /* @__PURE__ */ React41.createElement("span", { className: "text" }, "Numbered List")
    ),
    /* @__PURE__ */ React41.createElement(
      DropDownItem,
      {
        className: "item " + dropDownActiveClass(blockType === "check"),
        onClick: formatCheckList
      },
      /* @__PURE__ */ React41.createElement("i", { className: "icon check-list" }),
      /* @__PURE__ */ React41.createElement("span", { className: "text" }, "Check List")
    ),
    /* @__PURE__ */ React41.createElement(
      DropDownItem,
      {
        className: "item " + dropDownActiveClass(blockType === "quote"),
        onClick: formatQuote
      },
      /* @__PURE__ */ React41.createElement("i", { className: "icon quote" }),
      /* @__PURE__ */ React41.createElement("span", { className: "text" }, "Quote")
    ),
    /* @__PURE__ */ React41.createElement(
      DropDownItem,
      {
        className: "item " + dropDownActiveClass(blockType === "code"),
        onClick: formatCode
      },
      /* @__PURE__ */ React41.createElement("i", { className: "icon code" }),
      /* @__PURE__ */ React41.createElement("span", { className: "text" }, "Code Block")
    )
  );
}
function Divider() {
  return /* @__PURE__ */ React41.createElement("div", { className: "divider" });
}
function FontDropDown({
  editor,
  value,
  style,
  disabled = false
}) {
  const handleClick = (0, import_react41.useCallback)(
    (option) => {
      editor.update(() => {
        const selection = (0, import_lexical30.$getSelection)();
        if (selection !== null) {
          (0, import_selection5.$patchStyleText)(selection, {
            [style]: option
          });
        }
      });
    },
    [editor, style]
  );
  const buttonAriaLabel = style === "font-family" ? "Formatting options for font family" : "Formatting options for font size";
  return /* @__PURE__ */ React41.createElement(
    DropDown,
    {
      disabled,
      buttonClassName: "toolbar-item " + style,
      buttonLabel: value,
      buttonIconClassName: style === "font-family" ? "icon block-type font-family" : "",
      buttonAriaLabel
    },
    (style === "font-family" ? FONT_FAMILY_OPTIONS : FONT_SIZE_OPTIONS).map(
      ([option, text]) => /* @__PURE__ */ React41.createElement(
        DropDownItem,
        {
          className: `item ${dropDownActiveClass(value === option)} ${style === "font-size" ? "fontsize-item" : ""}`,
          onClick: () => handleClick(option),
          key: option
        },
        /* @__PURE__ */ React41.createElement("span", { className: "text" }, text)
      )
    )
  );
}
function ElementFormatDropdown({
  editor,
  value,
  isRTL,
  disabled = false
}) {
  const formatOption = ELEMENT_FORMAT_OPTIONS[value || "left"];
  return /* @__PURE__ */ React41.createElement(
    DropDown,
    {
      disabled,
      buttonLabel: formatOption.name,
      buttonIconClassName: `icon ${isRTL ? formatOption.iconRTL : formatOption.icon}`,
      buttonClassName: "toolbar-item spaced alignment",
      buttonAriaLabel: "Formatting options for text alignment"
    },
    /* @__PURE__ */ React41.createElement(
      DropDownItem,
      {
        onClick: () => {
          editor.dispatchCommand(import_lexical30.FORMAT_ELEMENT_COMMAND, "left");
        },
        className: "item"
      },
      /* @__PURE__ */ React41.createElement("i", { className: "icon left-align" }),
      /* @__PURE__ */ React41.createElement("span", { className: "text" }, "Left Align")
    ),
    /* @__PURE__ */ React41.createElement(
      DropDownItem,
      {
        onClick: () => {
          editor.dispatchCommand(import_lexical30.FORMAT_ELEMENT_COMMAND, "center");
        },
        className: "item"
      },
      /* @__PURE__ */ React41.createElement("i", { className: "icon center-align" }),
      /* @__PURE__ */ React41.createElement("span", { className: "text" }, "Center Align")
    ),
    /* @__PURE__ */ React41.createElement(
      DropDownItem,
      {
        onClick: () => {
          editor.dispatchCommand(import_lexical30.FORMAT_ELEMENT_COMMAND, "right");
        },
        className: "item"
      },
      /* @__PURE__ */ React41.createElement("i", { className: "icon right-align" }),
      /* @__PURE__ */ React41.createElement("span", { className: "text" }, "Right Align")
    ),
    /* @__PURE__ */ React41.createElement(
      DropDownItem,
      {
        onClick: () => {
          editor.dispatchCommand(import_lexical30.FORMAT_ELEMENT_COMMAND, "justify");
        },
        className: "item"
      },
      /* @__PURE__ */ React41.createElement("i", { className: "icon justify-align" }),
      /* @__PURE__ */ React41.createElement("span", { className: "text" }, "Justify Align")
    ),
    /* @__PURE__ */ React41.createElement(
      DropDownItem,
      {
        onClick: () => {
          editor.dispatchCommand(import_lexical30.FORMAT_ELEMENT_COMMAND, "start");
        },
        className: "item"
      },
      /* @__PURE__ */ React41.createElement(
        "i",
        {
          className: `icon ${isRTL ? ELEMENT_FORMAT_OPTIONS.start.iconRTL : ELEMENT_FORMAT_OPTIONS.start.icon}`
        }
      ),
      /* @__PURE__ */ React41.createElement("span", { className: "text" }, "Start Align")
    ),
    /* @__PURE__ */ React41.createElement(
      DropDownItem,
      {
        onClick: () => {
          editor.dispatchCommand(import_lexical30.FORMAT_ELEMENT_COMMAND, "end");
        },
        className: "item"
      },
      /* @__PURE__ */ React41.createElement(
        "i",
        {
          className: `icon ${isRTL ? ELEMENT_FORMAT_OPTIONS.end.iconRTL : ELEMENT_FORMAT_OPTIONS.end.icon}`
        }
      ),
      /* @__PURE__ */ React41.createElement("span", { className: "text" }, "End Align")
    ),
    /* @__PURE__ */ React41.createElement(Divider, null),
    /* @__PURE__ */ React41.createElement(
      DropDownItem,
      {
        onClick: () => {
          editor.dispatchCommand(import_lexical30.OUTDENT_CONTENT_COMMAND, void 0);
        },
        className: "item"
      },
      /* @__PURE__ */ React41.createElement("i", { className: "icon " + (isRTL ? "indent" : "outdent") }),
      /* @__PURE__ */ React41.createElement("span", { className: "text" }, "Outdent")
    ),
    /* @__PURE__ */ React41.createElement(
      DropDownItem,
      {
        onClick: () => {
          editor.dispatchCommand(import_lexical30.INDENT_CONTENT_COMMAND, void 0);
        },
        className: "item"
      },
      /* @__PURE__ */ React41.createElement("i", { className: "icon " + (isRTL ? "outdent" : "indent") }),
      /* @__PURE__ */ React41.createElement("span", { className: "text" }, "Indent")
    )
  );
}
function ToolbarPlugin({
  setIsLinkEditMode
}) {
  const [editor] = (0, import_LexicalComposerContext25.useLexicalComposerContext)();
  const [activeEditor, setActiveEditor] = (0, import_react41.useState)(editor);
  const [blockType, setBlockType] = (0, import_react41.useState)("paragraph");
  const [rootType, setRootType] = (0, import_react41.useState)("root");
  const [selectedElementKey, setSelectedElementKey] = (0, import_react41.useState)(
    null
  );
  const [fontSize, setFontSize] = (0, import_react41.useState)("15px");
  const [fontColor, setFontColor] = (0, import_react41.useState)("#000");
  const [bgColor, setBgColor] = (0, import_react41.useState)("#fff");
  const [fontFamily, setFontFamily] = (0, import_react41.useState)("Arial");
  const [elementFormat, setElementFormat] = (0, import_react41.useState)("left");
  const [isLink, setIsLink] = (0, import_react41.useState)(false);
  const [isBold, setIsBold] = (0, import_react41.useState)(false);
  const [isItalic, setIsItalic] = (0, import_react41.useState)(false);
  const [isUnderline, setIsUnderline] = (0, import_react41.useState)(false);
  const [isStrikethrough, setIsStrikethrough] = (0, import_react41.useState)(false);
  const [isSubscript, setIsSubscript] = (0, import_react41.useState)(false);
  const [isSuperscript, setIsSuperscript] = (0, import_react41.useState)(false);
  const [isCode, setIsCode] = (0, import_react41.useState)(false);
  const [canUndo, setCanUndo] = (0, import_react41.useState)(false);
  const [canRedo, setCanRedo] = (0, import_react41.useState)(false);
  const [modal, showModal] = useModal();
  const [isRTL, setIsRTL] = (0, import_react41.useState)(false);
  const [codeLanguage, setCodeLanguage] = (0, import_react41.useState)("");
  const [isEditable, setIsEditable] = (0, import_react41.useState)(() => editor.isEditable());
  const $updateToolbar = (0, import_react41.useCallback)(() => {
    const selection = (0, import_lexical30.$getSelection)();
    if ((0, import_lexical30.$isRangeSelection)(selection)) {
      const anchorNode = selection.anchor.getNode();
      let element = anchorNode.getKey() === "root" ? anchorNode : (0, import_utils18.$findMatchingParent)(anchorNode, (e) => {
        const parent2 = e.getParent();
        return parent2 !== null && (0, import_lexical30.$isRootOrShadowRoot)(parent2);
      });
      if (element === null) {
        element = anchorNode.getTopLevelElementOrThrow();
      }
      const elementKey = element.getKey();
      const elementDOM = activeEditor.getElementByKey(elementKey);
      setIsBold(selection.hasFormat("bold"));
      setIsItalic(selection.hasFormat("italic"));
      setIsUnderline(selection.hasFormat("underline"));
      setIsStrikethrough(selection.hasFormat("strikethrough"));
      setIsSubscript(selection.hasFormat("subscript"));
      setIsSuperscript(selection.hasFormat("superscript"));
      setIsCode(selection.hasFormat("code"));
      setIsRTL((0, import_selection5.$isParentElementRTL)(selection));
      const node = getSelectedNode(selection);
      const parent = node.getParent();
      if ((0, import_link4.$isLinkNode)(parent) || (0, import_link4.$isLinkNode)(node)) {
        setIsLink(true);
      } else {
        setIsLink(false);
      }
      const tableNode = (0, import_utils18.$findMatchingParent)(node, import_table6.$isTableNode);
      if ((0, import_table6.$isTableNode)(tableNode)) {
        setRootType("table");
      } else {
        setRootType("root");
      }
      if (elementDOM !== null) {
        setSelectedElementKey(elementKey);
        if ((0, import_list4.$isListNode)(element)) {
          const parentList = (0, import_utils18.$getNearestNodeOfType)(
            anchorNode,
            import_list4.ListNode
          );
          const type = parentList ? parentList.getListType() : element.getListType();
          setBlockType(type);
        } else {
          const type = (0, import_rich_text5.$isHeadingNode)(element) ? element.getTag() : element.getType();
          if (type in blockTypeToBlockName) {
            setBlockType(type);
          }
          if ((0, import_code8.$isCodeNode)(element)) {
            const language = element.getLanguage();
            setCodeLanguage(
              language ? import_code8.CODE_LANGUAGE_MAP[language] || language : ""
            );
            return;
          }
        }
      }
      setFontColor(
        (0, import_selection5.$getSelectionStyleValueForProperty)(selection, "color", "#000")
      );
      setBgColor(
        (0, import_selection5.$getSelectionStyleValueForProperty)(
          selection,
          "background-color",
          "#fff"
        )
      );
      setFontFamily(
        (0, import_selection5.$getSelectionStyleValueForProperty)(selection, "font-family", "Arial")
      );
      let matchingParent;
      if ((0, import_link4.$isLinkNode)(parent)) {
        matchingParent = (0, import_utils18.$findMatchingParent)(
          node,
          (parentNode) => (0, import_lexical30.$isElementNode)(parentNode) && !parentNode.isInline()
        );
      }
      setElementFormat(
        (0, import_lexical30.$isElementNode)(matchingParent) ? matchingParent.getFormatType() : (0, import_lexical30.$isElementNode)(node) ? node.getFormatType() : (parent == null ? void 0 : parent.getFormatType()) || "left"
      );
    }
    if ((0, import_lexical30.$isRangeSelection)(selection) || (0, import_table6.$isTableSelection)(selection)) {
      setFontSize(
        (0, import_selection5.$getSelectionStyleValueForProperty)(selection, "font-size", "15px")
      );
    }
  }, [activeEditor]);
  (0, import_react41.useEffect)(() => {
    return editor.registerCommand(
      import_lexical30.SELECTION_CHANGE_COMMAND,
      (_payload, newEditor) => {
        $updateToolbar();
        setActiveEditor(newEditor);
        return false;
      },
      import_lexical30.COMMAND_PRIORITY_CRITICAL
    );
  }, [editor, $updateToolbar]);
  (0, import_react41.useEffect)(() => {
    return (0, import_utils18.mergeRegister)(
      editor.registerEditableListener((editable) => {
        setIsEditable(editable);
      }),
      activeEditor.registerUpdateListener(({ editorState }) => {
        editorState.read(() => {
          $updateToolbar();
        });
      }),
      activeEditor.registerCommand(
        import_lexical30.CAN_UNDO_COMMAND,
        (payload) => {
          setCanUndo(payload);
          return false;
        },
        import_lexical30.COMMAND_PRIORITY_CRITICAL
      ),
      activeEditor.registerCommand(
        import_lexical30.CAN_REDO_COMMAND,
        (payload) => {
          setCanRedo(payload);
          return false;
        },
        import_lexical30.COMMAND_PRIORITY_CRITICAL
      )
    );
  }, [$updateToolbar, activeEditor, editor]);
  (0, import_react41.useEffect)(() => {
    return activeEditor.registerCommand(
      import_lexical30.KEY_MODIFIER_COMMAND,
      (payload) => {
        const event = payload;
        const { code, ctrlKey, metaKey } = event;
        if (code === "KeyK" && (ctrlKey || metaKey)) {
          event.preventDefault();
          let url;
          if (!isLink) {
            setIsLinkEditMode(true);
            url = sanitizeUrl("https://");
          } else {
            setIsLinkEditMode(false);
            url = null;
          }
          return activeEditor.dispatchCommand(import_link4.TOGGLE_LINK_COMMAND, url);
        }
        return false;
      },
      import_lexical30.COMMAND_PRIORITY_NORMAL
    );
  }, [activeEditor, isLink, setIsLinkEditMode]);
  const applyStyleText = (0, import_react41.useCallback)(
    (styles, skipHistoryStack) => {
      activeEditor.update(
        () => {
          const selection = (0, import_lexical30.$getSelection)();
          if (selection !== null) {
            (0, import_selection5.$patchStyleText)(selection, styles);
          }
        },
        skipHistoryStack ? { tag: "historic" } : {}
      );
    },
    [activeEditor]
  );
  const clearFormatting = (0, import_react41.useCallback)(() => {
    activeEditor.update(() => {
      const selection = (0, import_lexical30.$getSelection)();
      if ((0, import_lexical30.$isRangeSelection)(selection) || (0, import_table6.$isTableSelection)(selection)) {
        const anchor = selection.anchor;
        const focus = selection.focus;
        const nodes = selection.getNodes();
        const extractedNodes = selection.extract();
        if (anchor.key === focus.key && anchor.offset === focus.offset) {
          return;
        }
        nodes.forEach((node, idx) => {
          if ((0, import_lexical30.$isTextNode)(node)) {
            let textNode = node;
            if (idx === 0 && anchor.offset !== 0) {
              textNode = textNode.splitText(anchor.offset)[1] || textNode;
            }
            if (idx === nodes.length - 1) {
              textNode = textNode.splitText(focus.offset)[0] || textNode;
            }
            const extractedTextNode = extractedNodes[0];
            if (nodes.length === 1 && (0, import_lexical30.$isTextNode)(extractedTextNode)) {
              textNode = extractedTextNode;
            }
            if (textNode.__style !== "") {
              textNode.setStyle("");
            }
            if (textNode.__format !== 0) {
              textNode.setFormat(0);
              (0, import_utils18.$getNearestBlockElementAncestorOrThrow)(textNode).setFormat("");
            }
            node = textNode;
          } else if ((0, import_rich_text5.$isHeadingNode)(node) || (0, import_rich_text5.$isQuoteNode)(node)) {
            node.replace((0, import_lexical30.$createParagraphNode)(), true);
          } else if ((0, import_LexicalDecoratorBlockNode2.$isDecoratorBlockNode)(node)) {
            node.setFormat("");
          }
        });
      }
    });
  }, [activeEditor]);
  const onFontColorSelect = (0, import_react41.useCallback)(
    (value, skipHistoryStack) => {
      applyStyleText({ color: value }, skipHistoryStack);
    },
    [applyStyleText]
  );
  const onBgColorSelect = (0, import_react41.useCallback)(
    (value, skipHistoryStack) => {
      applyStyleText({ "background-color": value }, skipHistoryStack);
    },
    [applyStyleText]
  );
  const insertLink = (0, import_react41.useCallback)(() => {
    if (!isLink) {
      setIsLinkEditMode(true);
      editor.dispatchCommand(import_link4.TOGGLE_LINK_COMMAND, sanitizeUrl("https://"));
    } else {
      setIsLinkEditMode(false);
      editor.dispatchCommand(import_link4.TOGGLE_LINK_COMMAND, null);
    }
  }, [editor, isLink, setIsLinkEditMode]);
  const onCodeLanguageSelect = (0, import_react41.useCallback)(
    (value) => {
      activeEditor.update(() => {
        if (selectedElementKey !== null) {
          const node = (0, import_lexical30.$getNodeByKey)(selectedElementKey);
          if ((0, import_code8.$isCodeNode)(node)) {
            node.setLanguage(value);
          }
        }
      });
    },
    [activeEditor, selectedElementKey]
  );
  const insertGifOnClick = (payload) => {
    activeEditor.dispatchCommand(INSERT_IMAGE_COMMAND, payload);
  };
  return /* @__PURE__ */ React41.createElement("div", { className: "toolbar" }, /* @__PURE__ */ React41.createElement(
    "button",
    {
      disabled: !canUndo || !isEditable,
      onClick: () => {
        activeEditor.dispatchCommand(import_lexical30.UNDO_COMMAND, void 0);
      },
      title: IS_APPLE ? "Undo (\u2318Z)" : "Undo (Ctrl+Z)",
      type: "button",
      className: "toolbar-item spaced",
      "aria-label": "Undo"
    },
    /* @__PURE__ */ React41.createElement("i", { className: "format undo" })
  ), /* @__PURE__ */ React41.createElement(
    "button",
    {
      disabled: !canRedo || !isEditable,
      onClick: () => {
        activeEditor.dispatchCommand(import_lexical30.REDO_COMMAND, void 0);
      },
      title: IS_APPLE ? "Redo (\u2318Y)" : "Redo (Ctrl+Y)",
      type: "button",
      className: "toolbar-item",
      "aria-label": "Redo"
    },
    /* @__PURE__ */ React41.createElement("i", { className: "format redo" })
  ), /* @__PURE__ */ React41.createElement(Divider, null), blockType in blockTypeToBlockName && activeEditor === editor && /* @__PURE__ */ React41.createElement(React41.Fragment, null, /* @__PURE__ */ React41.createElement(
    BlockFormatDropDown,
    {
      disabled: !isEditable,
      blockType,
      rootType,
      editor
    }
  ), /* @__PURE__ */ React41.createElement(Divider, null)), blockType === "code" ? /* @__PURE__ */ React41.createElement(
    DropDown,
    {
      disabled: !isEditable,
      buttonClassName: "toolbar-item code-language",
      buttonLabel: (0, import_code8.getLanguageFriendlyName)(codeLanguage),
      buttonAriaLabel: "Select language"
    },
    CODE_LANGUAGE_OPTIONS.map(([value, name]) => {
      return /* @__PURE__ */ React41.createElement(
        DropDownItem,
        {
          className: `item ${dropDownActiveClass(
            value === codeLanguage
          )}`,
          onClick: () => onCodeLanguageSelect(value),
          key: value
        },
        /* @__PURE__ */ React41.createElement("span", { className: "text" }, name)
      );
    })
  ) : /* @__PURE__ */ React41.createElement(React41.Fragment, null, /* @__PURE__ */ React41.createElement(
    FontDropDown,
    {
      disabled: !isEditable,
      style: "font-family",
      value: fontFamily,
      editor
    }
  ), /* @__PURE__ */ React41.createElement(Divider, null), /* @__PURE__ */ React41.createElement(
    FontSize,
    {
      selectionFontSize: fontSize.slice(0, -2),
      editor,
      disabled: !isEditable
    }
  ), /* @__PURE__ */ React41.createElement(Divider, null), /* @__PURE__ */ React41.createElement(
    "button",
    {
      disabled: !isEditable,
      onClick: () => {
        activeEditor.dispatchCommand(import_lexical30.FORMAT_TEXT_COMMAND, "bold");
      },
      className: "toolbar-item spaced " + (isBold ? "active" : ""),
      title: IS_APPLE ? "Bold (\u2318B)" : "Bold (Ctrl+B)",
      type: "button",
      "aria-label": `Format text as bold. Shortcut: ${IS_APPLE ? "\u2318B" : "Ctrl+B"}`
    },
    /* @__PURE__ */ React41.createElement("i", { className: "format bold" })
  ), /* @__PURE__ */ React41.createElement(
    "button",
    {
      disabled: !isEditable,
      onClick: () => {
        activeEditor.dispatchCommand(import_lexical30.FORMAT_TEXT_COMMAND, "italic");
      },
      className: "toolbar-item spaced " + (isItalic ? "active" : ""),
      title: IS_APPLE ? "Italic (\u2318I)" : "Italic (Ctrl+I)",
      type: "button",
      "aria-label": `Format text as italics. Shortcut: ${IS_APPLE ? "\u2318I" : "Ctrl+I"}`
    },
    /* @__PURE__ */ React41.createElement("i", { className: "format italic" })
  ), /* @__PURE__ */ React41.createElement(
    "button",
    {
      disabled: !isEditable,
      onClick: () => {
        activeEditor.dispatchCommand(import_lexical30.FORMAT_TEXT_COMMAND, "underline");
      },
      className: "toolbar-item spaced " + (isUnderline ? "active" : ""),
      title: IS_APPLE ? "Underline (\u2318U)" : "Underline (Ctrl+U)",
      type: "button",
      "aria-label": `Format text to underlined. Shortcut: ${IS_APPLE ? "\u2318U" : "Ctrl+U"}`
    },
    /* @__PURE__ */ React41.createElement("i", { className: "format underline" })
  ), /* @__PURE__ */ React41.createElement(
    "button",
    {
      disabled: !isEditable,
      onClick: () => {
        activeEditor.dispatchCommand(import_lexical30.FORMAT_TEXT_COMMAND, "code");
      },
      className: "toolbar-item spaced " + (isCode ? "active" : ""),
      title: "Insert code block",
      type: "button",
      "aria-label": "Insert code block"
    },
    /* @__PURE__ */ React41.createElement("i", { className: "format code" })
  ), /* @__PURE__ */ React41.createElement(
    "button",
    {
      disabled: !isEditable,
      onClick: insertLink,
      className: "toolbar-item spaced " + (isLink ? "active" : ""),
      "aria-label": "Insert link",
      title: "Insert link",
      type: "button"
    },
    /* @__PURE__ */ React41.createElement("i", { className: "format link" })
  ), /* @__PURE__ */ React41.createElement(
    DropdownColorPicker,
    {
      disabled: !isEditable,
      buttonClassName: "toolbar-item color-picker",
      buttonAriaLabel: "Formatting text color",
      buttonIconClassName: "icon font-color",
      color: fontColor,
      onChange: onFontColorSelect,
      title: "text color"
    }
  ), /* @__PURE__ */ React41.createElement(
    DropdownColorPicker,
    {
      disabled: !isEditable,
      buttonClassName: "toolbar-item color-picker",
      buttonAriaLabel: "Formatting background color",
      buttonIconClassName: "icon bg-color",
      color: bgColor,
      onChange: onBgColorSelect,
      title: "bg color"
    }
  ), /* @__PURE__ */ React41.createElement(
    DropDown,
    {
      disabled: !isEditable,
      buttonClassName: "toolbar-item spaced",
      buttonLabel: "",
      buttonAriaLabel: "Formatting options for additional text styles",
      buttonIconClassName: "icon dropdown-more"
    },
    /* @__PURE__ */ React41.createElement(
      DropDownItem,
      {
        onClick: () => {
          activeEditor.dispatchCommand(
            import_lexical30.FORMAT_TEXT_COMMAND,
            "strikethrough"
          );
        },
        className: "item " + dropDownActiveClass(isStrikethrough),
        title: "Strikethrough",
        "aria-label": "Format text with a strikethrough"
      },
      /* @__PURE__ */ React41.createElement("i", { className: "icon strikethrough" }),
      /* @__PURE__ */ React41.createElement("span", { className: "text" }, "Strikethrough")
    ),
    /* @__PURE__ */ React41.createElement(
      DropDownItem,
      {
        onClick: () => {
          activeEditor.dispatchCommand(import_lexical30.FORMAT_TEXT_COMMAND, "subscript");
        },
        className: "item " + dropDownActiveClass(isSubscript),
        title: "Subscript",
        "aria-label": "Format text with a subscript"
      },
      /* @__PURE__ */ React41.createElement("i", { className: "icon subscript" }),
      /* @__PURE__ */ React41.createElement("span", { className: "text" }, "Subscript")
    ),
    /* @__PURE__ */ React41.createElement(
      DropDownItem,
      {
        onClick: () => {
          activeEditor.dispatchCommand(
            import_lexical30.FORMAT_TEXT_COMMAND,
            "superscript"
          );
        },
        className: "item " + dropDownActiveClass(isSuperscript),
        title: "Superscript",
        "aria-label": "Format text with a superscript"
      },
      /* @__PURE__ */ React41.createElement("i", { className: "icon superscript" }),
      /* @__PURE__ */ React41.createElement("span", { className: "text" }, "Superscript")
    ),
    /* @__PURE__ */ React41.createElement(
      DropDownItem,
      {
        onClick: clearFormatting,
        className: "item",
        title: "Clear text formatting",
        "aria-label": "Clear all text formatting"
      },
      /* @__PURE__ */ React41.createElement("i", { className: "icon clear" }),
      /* @__PURE__ */ React41.createElement("span", { className: "text" }, "Clear Formatting")
    )
  ), /* @__PURE__ */ React41.createElement(Divider, null), /* @__PURE__ */ React41.createElement(
    DropDown,
    {
      disabled: !isEditable,
      buttonClassName: "toolbar-item spaced",
      buttonLabel: "Insert",
      buttonAriaLabel: "Insert specialized editor node",
      buttonIconClassName: "icon plus"
    },
    /* @__PURE__ */ React41.createElement(
      DropDownItem,
      {
        onClick: () => {
          activeEditor.dispatchCommand(
            import_LexicalHorizontalRuleNode3.INSERT_HORIZONTAL_RULE_COMMAND,
            void 0
          );
        },
        className: "item"
      },
      /* @__PURE__ */ React41.createElement("i", { className: "icon horizontal-rule" }),
      /* @__PURE__ */ React41.createElement("span", { className: "text" }, "Horizontal Rule")
    ),
    /* @__PURE__ */ React41.createElement(
      DropDownItem,
      {
        onClick: () => {
          showModal("Insert Image", (onClose) => /* @__PURE__ */ React41.createElement(
            InsertImageDialog,
            {
              activeEditor,
              onClose
            }
          ));
        },
        className: "item"
      },
      /* @__PURE__ */ React41.createElement("i", { className: "icon image" }),
      /* @__PURE__ */ React41.createElement("span", { className: "text" }, "Image")
    ),
    /* @__PURE__ */ React41.createElement(
      DropDownItem,
      {
        onClick: () => {
          showModal("Insert Table", (onClose) => /* @__PURE__ */ React41.createElement(
            InsertTableDialog,
            {
              activeEditor,
              onClose
            }
          ));
        },
        className: "item"
      },
      /* @__PURE__ */ React41.createElement("i", { className: "icon table" }),
      /* @__PURE__ */ React41.createElement("span", { className: "text" }, "Table")
    ),
    EmbedConfigs.map((embedConfig) => /* @__PURE__ */ React41.createElement(
      DropDownItem,
      {
        key: embedConfig.type,
        onClick: () => {
          activeEditor.dispatchCommand(
            import_LexicalAutoEmbedPlugin3.INSERT_EMBED_COMMAND,
            embedConfig.type
          );
        },
        className: "item"
      },
      embedConfig.icon,
      /* @__PURE__ */ React41.createElement("span", { className: "text" }, embedConfig.contentName)
    ))
  )), /* @__PURE__ */ React41.createElement(Divider, null), /* @__PURE__ */ React41.createElement(
    ElementFormatDropdown,
    {
      disabled: !isEditable,
      value: elementFormat,
      editor,
      isRTL
    }
  ), modal);
}

// src/components/editor/index.tsx
init_ContentEditable2();
init_Placeholder2();

// src/components/editor/plugins/HtmlPlugin/index.tsx
init_cjs_shims();
var import_react42 = require("react");
var import_LexicalOnChangePlugin = require("@lexical/react/LexicalOnChangePlugin");
var import_LexicalComposerContext26 = require("@lexical/react/LexicalComposerContext");
var import_html = require("@lexical/html");
var import_lexical31 = require("lexical");
var HtmlPlugin = ({ initialHtml, onHtmlChanged }) => {
  const [editor] = (0, import_LexicalComposerContext26.useLexicalComposerContext)();
  const [isFirstRender, setIsFirstRender] = (0, import_react42.useState)(true);
  (0, import_react42.useEffect)(() => {
    if (!initialHtml || !isFirstRender) return;
    setIsFirstRender(false);
    editor.update(() => {
      const parser = new DOMParser();
      const dom = parser.parseFromString(initialHtml, "text/html");
      const nodes = (0, import_html.$generateNodesFromDOM)(editor, dom);
      (0, import_lexical31.$insertNodes)(nodes);
    });
  }, []);
  return /* @__PURE__ */ React.createElement(
    import_LexicalOnChangePlugin.OnChangePlugin,
    {
      onChange: (editorState) => {
        editorState.read(() => {
          onHtmlChanged((0, import_html.$generateHtmlFromNodes)(editor));
        });
      }
    }
  );
};
var HtmlPlugin_default = HtmlPlugin;

// src/htmlContext.tsx
init_cjs_shims();
var import_react43 = __toESM(require("react"));
var HtmlContext = (0, import_react43.createContext)(void 0);
var useHtmlContext = () => {
  const context = (0, import_react43.useContext)(HtmlContext);
  if (!context) {
    throw new Error("useHtmlContext must be used within a HtmlProvider");
  }
  return context;
};
var HtmlProvider = ({ children }) => {
  const [htmlString, setHtmlString] = (0, import_react43.useState)("");
  return /* @__PURE__ */ import_react43.default.createElement(HtmlContext.Provider, { value: { htmlString, setHtmlString } }, children);
};

// src/components/editor/index.tsx
function Editor() {
  const { historyState } = useSharedHistoryContext();
  const isEditable = (0, import_useLexicalEditable3.useLexicalEditable)();
  const text = "Enter some rich text...";
  const placeholder = /* @__PURE__ */ React43.createElement(Placeholder, null, text);
  const [floatingAnchorElem, setFloatingAnchorElem] = (0, import_react44.useState)(null);
  const [isSmallWidthViewport, setIsSmallWidthViewport] = (0, import_react44.useState)(false);
  const [isLinkEditMode, setIsLinkEditMode] = (0, import_react44.useState)(false);
  const { setHtmlString } = useHtmlContext();
  const onRef = (_floatingAnchorElem) => {
    if (_floatingAnchorElem !== null) {
      setFloatingAnchorElem(_floatingAnchorElem);
    }
  };
  (0, import_react44.useEffect)(() => {
    const updateViewPortWidth = () => {
      const isNextSmallWidthViewport = CAN_USE_DOM && window.matchMedia("(max-width: 1025px)").matches;
      if (isNextSmallWidthViewport !== isSmallWidthViewport) {
        setIsSmallWidthViewport(isNextSmallWidthViewport);
      }
    };
    updateViewPortWidth();
    window.addEventListener("resize", updateViewPortWidth);
    return () => {
      window.removeEventListener("resize", updateViewPortWidth);
    };
  }, [isSmallWidthViewport]);
  return /* @__PURE__ */ React43.createElement("div", { className: "text-xs shadow-sm bg-slate-50 border border-slate-300 text-slate-900 sm:text-sm rounded-lg focus:ring-primary/50 focus:border-primary/50 block w-full dark:bg-slate-700 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-primary/50 dark:focus:border-primary/50" }, /* @__PURE__ */ React43.createElement(ToolbarPlugin, { setIsLinkEditMode }), /* @__PURE__ */ React43.createElement("div", { className: "editor-container" }, /* @__PURE__ */ React43.createElement(DragDropPaste, null), /* @__PURE__ */ React43.createElement(import_LexicalAutoFocusPlugin2.AutoFocusPlugin, null), /* @__PURE__ */ React43.createElement(import_LexicalClearEditorPlugin.ClearEditorPlugin, null), /* @__PURE__ */ React43.createElement(ComponentPickerMenuPlugin, null), /* @__PURE__ */ React43.createElement(EmojiPickerPlugin, null), /* @__PURE__ */ React43.createElement(AutoEmbedPlugin, null), /* @__PURE__ */ React43.createElement(NewMentionsPlugin, null), /* @__PURE__ */ React43.createElement(EmojisPlugin, null), /* @__PURE__ */ React43.createElement(import_LexicalHashtagPlugin2.HashtagPlugin, null), /* @__PURE__ */ React43.createElement(KeywordsPlugin, null), /* @__PURE__ */ React43.createElement(LexicalAutoLinkPlugin, null), /* @__PURE__ */ React43.createElement(import_LexicalHistoryPlugin3.HistoryPlugin, { externalHistoryState: historyState }), /* @__PURE__ */ React43.createElement("div", { className: "editor-scroller" }, /* @__PURE__ */ React43.createElement(
    import_LexicalRichTextPlugin2.RichTextPlugin,
    {
      contentEditable: /* @__PURE__ */ React43.createElement("div", { className: "editor", ref: onRef }, /* @__PURE__ */ React43.createElement(LexicalContentEditable, null)),
      placeholder,
      ErrorBoundary: import_LexicalErrorBoundary2.default
    }
  ), /* @__PURE__ */ React43.createElement(
    HtmlPlugin_default,
    {
      onHtmlChanged: (html) => {
        setHtmlString(html);
      },
      initialHtml: ""
    }
  )), /* @__PURE__ */ React43.createElement(CodeHighlightPlugin, null), /* @__PURE__ */ React43.createElement(import_LexicalListPlugin.ListPlugin, null), /* @__PURE__ */ React43.createElement(import_LexicalCheckListPlugin.CheckListPlugin, null), /* @__PURE__ */ React43.createElement(ListMaxIndentLevelPlugin, { maxDepth: 7 }), /* @__PURE__ */ React43.createElement(
    import_LexicalTablePlugin.TablePlugin,
    {
      hasCellMerge: false,
      hasCellBackgroundColor: false
    }
  ), /* @__PURE__ */ React43.createElement(TableCellResizerPlugin, null), /* @__PURE__ */ React43.createElement(ImagesPlugin, null), /* @__PURE__ */ React43.createElement(LinkPlugin, null), /* @__PURE__ */ React43.createElement(YouTubePlugin, null), /* @__PURE__ */ React43.createElement(import_LexicalClickableLinkPlugin.ClickableLinkPlugin, { disabled: isEditable }), /* @__PURE__ */ React43.createElement(import_LexicalHorizontalRulePlugin.HorizontalRulePlugin, null), /* @__PURE__ */ React43.createElement(TabFocusPlugin, null), /* @__PURE__ */ React43.createElement(import_LexicalTabIndentationPlugin.TabIndentationPlugin, null), /* @__PURE__ */ React43.createElement(LayoutPlugin, null), floatingAnchorElem && !isSmallWidthViewport && /* @__PURE__ */ React43.createElement(React43.Fragment, null, /* @__PURE__ */ React43.createElement(DraggableBlockPlugin, { anchorElem: floatingAnchorElem }), /* @__PURE__ */ React43.createElement(CodeActionMenuPlugin, { anchorElem: floatingAnchorElem }), /* @__PURE__ */ React43.createElement(
    FloatingLinkEditorPlugin,
    {
      anchorElem: floatingAnchorElem,
      isLinkEditMode,
      setIsLinkEditMode
    }
  ), /* @__PURE__ */ React43.createElement(
    TableActionMenuPlugin,
    {
      anchorElem: floatingAnchorElem,
      cellMerge: true
    }
  ), /* @__PURE__ */ React43.createElement(
    FloatingTextFormatToolbarPlugin,
    {
      anchorElem: floatingAnchorElem,
      setIsLinkEditMode
    }
  ))), /* @__PURE__ */ React43.createElement(
    ActionsPlugin,
    {
      isRichText: true,
      shouldPreserveNewLinesInMarkdown: true
    }
  ));
}

// src/components/index.tsx
var import_html2 = require("@lexical/html");
var import_lexical32 = require("lexical");
var LexicalEditorComponent = ({
  initialHtml
}) => {
  const initialConfig = {
    namespace: "Lexical Rich editor",
    nodes: [...PlaygroundNodes_default],
    onError: (error) => {
      throw error;
    },
    theme: PlaygroundEditorTheme_default,
    editorState: (editor) => {
      if (initialHtml && CAN_USE_DOM) {
        editor.update(() => {
          const parser = new DOMParser();
          const dom = parser.parseFromString(initialHtml, "text/html");
          const nodes = (0, import_html2.$generateNodesFromDOM)(editor, dom);
          const root = (0, import_lexical32.$getRoot)();
          root.clear();
          root.append(...nodes);
        });
      }
      return editor;
    }
  };
  return /* @__PURE__ */ import_react45.default.createElement(FlashMessageContext, null, /* @__PURE__ */ import_react45.default.createElement(import_LexicalComposer.LexicalComposer, { initialConfig }, /* @__PURE__ */ import_react45.default.createElement(SharedHistoryContext, null, /* @__PURE__ */ import_react45.default.createElement(TableContext, null, /* @__PURE__ */ import_react45.default.createElement(SharedAutocompleteContext, null, /* @__PURE__ */ import_react45.default.createElement(Editor, null))))));
};
var components_default = LexicalEditorComponent;
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  HtmlProvider,
  LexicalEditorComponent,
  useHtmlContext
});
