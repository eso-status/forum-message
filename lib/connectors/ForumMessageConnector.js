"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = require("axios");
var ForumMessageElement_1 = require("../classes/ForumMessageElement");
/**
 * Connector used to get data from https://forums.elderscrollsonline.com/ and https://forums.elderscrollsonline.com/en/categories/pts
 */
var ForumMessageConnector = /** @class */ (function () {
    function ForumMessageConnector() {
    }
    /**
     * Methode used to get the list of raw element from remote website
     *
     * @public
     * @static
     *
     * @return Promise<RawEsoStatus[]> List of raw element from remote website
     */
    ForumMessageConnector.getRemoteContent = function () {
        return __awaiter(this, void 0, void 0, function () {
            var list, remoteContent;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        list = [];
                        return [4 /*yield*/, ForumMessageConnector.getRemoteContentByUrl(ForumMessageConnector.urls[0])];
                    case 1:
                        remoteContent = _a.sent();
                        list.push.apply(list, remoteContent);
                        return [4 /*yield*/, ForumMessageConnector.getRemoteContentByUrl(ForumMessageConnector.urls[1])];
                    case 2:
                        remoteContent = _a.sent();
                        list.push.apply(list, remoteContent);
                        return [2 /*return*/, ForumMessageConnector.removeDuplicate(list)];
                }
            });
        });
    };
    /**
     * Methode used to get the list of raw element from remote specific url
     *
     * @public
     * @static
     *
     * @param url string Url to use to get list of raw element from remote specific url
     * @return Promise<RawEsoStatus[]> List of raw element from remote specific url
     */
    ForumMessageConnector.getRemoteContentByUrl = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var rawRemoteContent, rawWarningMessage, rawAlertMessage, mergedRawMessage, rawMessageSplit, sortedRawMessageList;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, ForumMessageConnector.getRawRemoteContent(url)];
                    case 1:
                        rawRemoteContent = _a.sent();
                        rawWarningMessage = ForumMessageConnector.getRawWarningMessage(rawRemoteContent);
                        rawAlertMessage = ForumMessageConnector.getRawAlertMessage(rawRemoteContent);
                        mergedRawMessage = ForumMessageConnector.mergeRawMessage(rawWarningMessage, rawAlertMessage);
                        rawMessageSplit = ForumMessageConnector.splitRawMessage(mergedRawMessage);
                        sortedRawMessageList = ForumMessageConnector.sortRawMessageList(rawMessageSplit);
                        return [2 /*return*/, sortedRawMessageList.map(function (item) { return ({
                                sources: [url],
                                raw: [item],
                                slugs: [],
                            }); })];
                }
            });
        });
    };
    /**
     * Methode used to get raw content from remote specific url
     *
     * @public
     * @static
     *
     * @param url string Url to use to get list of raw element from remote specific url
     * @return Promise<string> Raw content from remote specific url
     */
    ForumMessageConnector.getRawRemoteContent = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.get(url)];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, (response === null || response === void 0 ? void 0 : response.status) === 200 && !(!(response === null || response === void 0 ? void 0 : response.data)) ? String(response === null || response === void 0 ? void 0 : response.data) : ''];
                }
            });
        });
    };
    /**
     * Methode used to get raw warning message from raw content
     *
     * @public
     * @static
     *
     * @param rawRemoteContent string Raw content from remote specific url
     * @return string Raw warning message from raw content
     */
    ForumMessageConnector.getRawWarningMessage = function (rawRemoteContent) {
        return rawRemoteContent.split('<div class="DismissMessage WarningMessage">')
            .filter(function (item, index) { return index !== 0; })
            .map(function (item) {
            var resultRemoveAfter = item.split('</div>');
            if (resultRemoveAfter.length >= 2) {
                return resultRemoveAfter[0];
            }
            return '';
        })
            .join('<br />');
    };
    /**
     * Methode used to get raw alert message from raw content
     *
     * @public
     * @static
     *
     * @param rawRemoteContent string Raw content from remote specific url
     * @return string Raw alert message from raw content
     */
    ForumMessageConnector.getRawAlertMessage = function (rawRemoteContent) {
        return rawRemoteContent.split('<div class="DismissMessage AlertMessage">')
            .filter(function (item, index) { return index !== 0; })
            .map(function (item) {
            var resultRemoveAfter = item.split('</div>');
            if (resultRemoveAfter.length >= 2) {
                return resultRemoveAfter[0];
            }
            return '';
        })
            .join('<br />');
    };
    /**
     * Methode used to get merge off all message
     *
     * @public
     * @static
     *
     * @param rawMessages string[] All message
     * @return string Merge off all message
     */
    ForumMessageConnector.mergeRawMessage = function () {
        var rawMessages = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            rawMessages[_i] = arguments[_i];
        }
        return rawMessages.join('<br />');
    };
    /**
     * Methode used to split raw content
     *
     * @public
     * @static
     *
     * @param mergedRawMessage string All message merged
     * @return string[] Split raw content
     */
    ForumMessageConnector.splitRawMessage = function (mergedRawMessage) {
        var list = [];
        mergedRawMessage.split('<br />').forEach(function (item) {
            list.push.apply(list, item.split('<br>'));
        });
        return list;
    };
    /**
     * Methode used to sort raw content list
     *
     * @public
     * @static
     *
     * @param rawMessageSplit string Split raw content
     * @return string[] Sort raw content list
     */
    ForumMessageConnector.sortRawMessageList = function (rawMessageSplit) {
        return rawMessageSplit
            .filter(function (item) { return item !== ''
            && !item.includes('Maintenance for the week')
            && !item.includes('No maintenance'); })
            .map(function (item) {
            var line = item;
            line = line.replace('\n', '');
            return line;
        })
            .filter(function (item) { return item !== '' && item !== ' '; });
    };
    /**
     * Methode used to remove duplicate of raw content
     *
     * @public
     * @static
     *
     * @param remoteContent RawEsoStatus[] List of raw element from remote website
     * @return RawEsoStatus[] Raw content list without duplicate
     */
    ForumMessageConnector.removeDuplicate = function (remoteContent) {
        var list = [];
        remoteContent.forEach(function (item) {
            if (list[item.raw[0]] === undefined) {
                list[item.raw[0]] = item;
            }
            else {
                list[item.raw[0]].sources.push(item.sources[0]);
            }
        });
        return Object.values(list);
    };
    /**
     * Methode used to get slug for raw content list
     *
     * @public
     * @static
     *
     * @param remoteContent RawEsoStatus[] Raw content list without duplicate
     * @return RawEsoStatus[] Raw content list with slug list
     */
    ForumMessageConnector.getRawContentWithSlug = function (remoteContent) {
        return remoteContent.map(function (item) { return ({
            sources: item.sources,
            raw: item.raw,
            slugs: ForumMessageElement_1.default.getSlug(item.raw[0]),
        }); });
    };
    /**
     * Methode used to split list by slug
     *
     * @public
     * @static
     *
     * @param slugOfRawContent RawEsoStatus[] Raw content list with slug list
     * @return RawEsoStatus[] Raw content list foreach slug
     */
    ForumMessageConnector.splitRawContentBySlug = function (slugOfRawContent) {
        var list = [];
        slugOfRawContent.forEach(function (item) {
            var _a;
            (_a = item.slugs) === null || _a === void 0 ? void 0 : _a.forEach(function (slug) {
                list.push({
                    sources: item.sources,
                    raw: item.raw,
                    slugs: [slug],
                });
            });
        });
        return list;
    };
    /**
     * Methode used to get raw date for raw content list
     *
     * @public
     * @static
     *
     * @param rawContentBySlug RawEsoStatus[] Raw content list foreach slug
     * @return RawEsoStatus[] Raw content list with raw date
     */
    ForumMessageConnector.getRawContentWithRawDate = function (rawContentBySlug) {
        return rawContentBySlug.map(function (item) { return ({
            sources: item.sources,
            raw: item.raw,
            slugs: item.slugs,
            rawDate: ForumMessageElement_1.default.getRawDate(item.raw[0]),
        }); });
    };
    /**
     * Methode used to get data for each raw element
     *
     * @public
     * @static
     *
     * @param rawContentWithRawDate RawEsoStatus[] Raw content list with raw date
     * @return RawEsoStatus[] Raw content list with data
     */
    ForumMessageConnector.getData = function (rawContentWithRawDate) {
        return rawContentWithRawDate.map(function (item) {
            var _a;
            return ({
                sources: item.sources,
                raw: item.raw,
                slugs: item.slugs,
                rawDate: item.rawDate,
                dates: ForumMessageElement_1.default.getDate((_a = item.rawDate) !== null && _a !== void 0 ? _a : ''),
                type: ForumMessageElement_1.default.getType(item.slugs ? item.slugs[0] : 'undefined'),
                support: ForumMessageElement_1.default.getSupport(item.slugs ? item.slugs[0] : 'undefined'),
                zone: ForumMessageElement_1.default.getZone(item.slugs ? item.slugs[0] : 'undefined'),
                status: ForumMessageElement_1.default.getStatus(item.raw[0]),
            });
        });
    };
    /**
     * Methode used to get data sort by status
     *
     * @public
     * @static
     *
     * @param data RawEsoStatus[] Raw content list with data
     * @return RawEsoStatus[] Data sorted by status
     */
    ForumMessageConnector.sortData = function (data) {
        return data.filter(function (item) {
            if (data.filter(function (i) { return JSON.stringify(i.slugs) === JSON.stringify(item.slugs); }).length !== 1) {
                if (item.raw.includes('will be taken offline for maintenance') && data.filter(function (i) { return JSON.stringify(i.slugs) === JSON.stringify(item.slugs) && i.raw.includes('is currently unavailable'); }).length !== 0) {
                    return false;
                }
                if (item.raw.includes('[IN PROGRESS]') && data.filter(function (i) { return JSON.stringify(i.slugs) === JSON.stringify(item.slugs) && i.raw.includes('[COMPLETE]'); }).length !== 0) {
                    return false;
                }
                if (item.status === 'planned' && data.filter(function (i) { return JSON.stringify(i.slugs) === JSON.stringify(item.slugs) && i.raw.includes('[IN PROGRESS]'); }).length !== 0) {
                    return false;
                }
                if (item.raw.includes('resolved at this time') && data.filter(function (i) { return JSON.stringify(i.slugs) === JSON.stringify(item.slugs) && i.raw.includes('[IN PROGRESS]'); }).length !== 0) {
                    return false;
                }
            }
            if (item.raw.includes('<a')) {
                return false;
            }
            return true;
        });
    };
    /**
     * URLs to get remote content
     *
     * @public
     * @static
     *
     * @return string[] URLs to get remote content
     */
    ForumMessageConnector.urls = [
        'https://forums.elderscrollsonline.com/',
        'https://forums.elderscrollsonline.com/en/categories/pts',
    ];
    return ForumMessageConnector;
}());
exports.default = ForumMessageConnector;
