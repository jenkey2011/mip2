/**
 * @file mip1-polyfill MIP2 兼容 MIP1 的方式之一
 * @author sekiyika(pengxing@baidu.com)
 */

import 'script-loader!esljs';

import util from '../util';
import hash from '../util/hash';
import viewer from '../viewer';
import viewport from '../viewport';
import templates from '../util/templates';
import registerElement from './element';
import customElement from './customElement';
import performance from '../performance';
import fixedElement from '../fixed-element';
import Resources from '../resources';
import naboo from './naboo';
import cssLoader from '../util/dom/css-loader';
import eventAction from '../util/event-action';

 // 将 jquery 配置为远程的，需要时才引入
window.require.config({
    paths: {
        'searchbox/openjs/aio': '//m.baidu.com/static/searchbox/openjs/aio.js?v=201606',
        'jquery': '//mipcache.bdstatic.com/static/v1/deps/jquery'
    }
});

window.define('util', () => util);
window.define('viewer', () => viewer);
window.define('viewport', () => viewport);
window.define('templates', () => templates);
window.define('customElement', () => customElement);
window.define('performance', () => performance);
window.define('utils/customStorage', () => util.customStorage);
window.define('fetch-jsonp', () => window.fetchJsonp);
window.define('fixed-element', () => fixedElement);
window.define('zepto', () => window.$);
window.define('hash', () => hash);
window.define('dom/event', () => util.event);
window.define('mip', () => window.MIP);
window.define('naboo', () => naboo);
window.define('dom/css-loader', () => cssLoader);
window.define('dom/css', () => util.css);
window.define('dom/dom', () => util.dom);
window.define('dom/rect', () => util.rect);
window.define('utils/event-action', () => eventAction);
window.define('utils/event-emitter', () => util.EventEmitter);
window.define('utils/fn', () => util.fn);
window.define('utils/platform', () => util.platform);
window.define('utils/gesture', () => util.Gesture);

export default function install(mip) {
    Object.assign(mip, {

        /**
         * register mip1 element
         *
         * @deprecated
         * @param {string} name element tag name
         * @param {string} customClass class
         * @param {string} css css
         */
        registerMipElement(name, customClass, css) {
            if (templates.isTemplateClass(customClass)) {
                templates.register(name, customClass);
            }
            else {
                registerElement(name, customClass, css);
            }
        }

    });
}

