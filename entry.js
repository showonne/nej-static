const base_platform_js = require('nej-commonjs/base/platform'); 
const index = require('nej-commonjs/index')
const base_chain_js = require('nej-commonjs/base/chain'); 
const base_config_js = require('nej-commonjs/base/config'); 
const base_constant_js = require('nej-commonjs/base/constant'); 
const base_element_js = require('nej-commonjs/base/element'); 
const base_event_js = require('nej-commonjs/base/event'); 
const base_global_js = require('nej-commonjs/base/global'); 
const base_klass_js = require('nej-commonjs/base/klass'); 
const base_util_js = require('nej-commonjs/base/util'); 
const util_event_js = require('nej-commonjs/util/event'); 
const util_ajax_dwr_js = require('nej-commonjs/util/ajax/dwr'); 
const util_ajax_jsonp_js = require('nej-commonjs/util/ajax/jsonp'); 
const util_ajax_message_js = require('nej-commonjs/util/ajax/message'); 
const util_ajax_rest_js = require('nej-commonjs/util/ajax/rest'); 
const util_ajax_tag_js = require('nej-commonjs/util/ajax/tag'); 
const util_ajax_xdr_js = require('nej-commonjs/util/ajax/xdr'); 
const util_animation_animation_js = require('nej-commonjs/util/animation/animation'); 
const util_animation_bezier_js = require('nej-commonjs/util/animation/bezier'); 
const util_animation_bounce_js = require('nej-commonjs/util/animation/bounce'); 
const util_animation_decelerate_js = require('nej-commonjs/util/animation/decelerate'); 
const util_animation_easein_js = require('nej-commonjs/util/animation/easein'); 
const util_animation_easeinout_js = require('nej-commonjs/util/animation/easeinout'); 
const util_animation_easeout_js = require('nej-commonjs/util/animation/easeout'); 
const util_animation_linear_js = require('nej-commonjs/util/animation/linear'); 
const util_audio_audio_js = require('nej-commonjs/util/audio/audio'); 
const util_cache_abstract_js = require('nej-commonjs/util/cache/abstract'); 
const util_cache_cache_js = require('nej-commonjs/util/cache/cache'); 
const util_cache_cache_list_base_js = require('nej-commonjs/util/cache/cache.list.base'); 
const util_cache_cache_list_js = require('nej-commonjs/util/cache/cache.list'); 
const util_cache_cache_share_js = require('nej-commonjs/util/cache/cache.share'); 
const util_cache_cookie_js = require('nej-commonjs/util/cache/cookie'); 
const util_cache_database_js = require('nej-commonjs/util/cache/database'); 
const util_cache_list_js = require('nej-commonjs/util/cache/list'); 
const util_cache_manager_js = require('nej-commonjs/util/cache/manager'); 
const util_cache_share_js = require('nej-commonjs/util/cache/share'); 
const util_cache_storage_js = require('nej-commonjs/util/cache/storage'); 
const util_calendar_calendar_js = require('nej-commonjs/util/calendar/calendar'); 
const util_chain_NodeList_js = require('nej-commonjs/util/chain/NodeList'); 
const util_chain_chainable_js = require('nej-commonjs/util/chain/chainable'); 
const util_chart_chart_js = require('nej-commonjs/util/chart/chart'); 
const util_clipboard_clipboard_js = require('nej-commonjs/util/clipboard/clipboard'); 
const util_clipper_clipper_js = require('nej-commonjs/util/clipper/clipper'); 
const util_clock_clock_js = require('nej-commonjs/util/clock/clock'); 
const util_color_color_js = require('nej-commonjs/util/color/color'); 
const util_counter_counter_js = require('nej-commonjs/util/counter/counter'); 
const util_cursor_cursor_js = require('nej-commonjs/util/cursor/cursor'); 
const util_cycler_cycler_js = require('nej-commonjs/util/cycler/cycler'); 
const util_dispatcher_dispatcher_2_js = require('nej-commonjs/util/dispatcher/dispatcher.2'); 
const util_dispatcher_dispatcher_js = require('nej-commonjs/util/dispatcher/dispatcher'); 
const util_dispatcher_module_base_js = require('nej-commonjs/util/dispatcher/module.base'); 
const util_dispatcher_module_js = require('nej-commonjs/util/dispatcher/module'); 
const util_dispatcher_regularModule_js = require('nej-commonjs/util/dispatcher/regularModule'); 
const util_dispatcher_test_js = require('nej-commonjs/util/dispatcher/test'); 
const util_dragger_dragger_js = require('nej-commonjs/util/dragger/dragger'); 
const util_dragger_simple_js = require('nej-commonjs/util/dragger/simple'); 
const util_editor_area_js = require('nej-commonjs/util/editor/area'); 
const util_editor_command_js = require('nej-commonjs/util/editor/command'); 
const util_editor_editor_js = require('nej-commonjs/util/editor/editor'); 
const util_editor_text_js = require('nej-commonjs/util/editor/text'); 
const util_editor_toolbar_js = require('nej-commonjs/util/editor/toolbar'); 
const util_effect_api_js = require('nej-commonjs/util/effect/api'); 
const util_effect_effect_api_js = require('nej-commonjs/util/effect/effect.api'); 
const util_effect_effect_js = require('nej-commonjs/util/effect/effect'); 
const util_encode_base64_js = require('nej-commonjs/util/encode/base64'); 
const util_encode_crc32_js = require('nej-commonjs/util/encode/crc32'); 
const util_encode_json_js = require('nej-commonjs/util/encode/json'); 
const util_encode_md5_js = require('nej-commonjs/util/encode/md5'); 
const util_encode_sha_md5_js = require('nej-commonjs/util/encode/sha.md5'); 
const util_es_array_js = require('nej-commonjs/util/es/array'); 
const util_event_event_js = require('nej-commonjs/util/event/event'); 
const util_file_paste_js = require('nej-commonjs/util/file/paste'); 
const util_file_save_js = require('nej-commonjs/util/file/save'); 
const util_file_select_js = require('nej-commonjs/util/file/select'); 
const util_flash_flash_js = require('nej-commonjs/util/flash/flash'); 
const util_focus_focus_js = require('nej-commonjs/util/focus/focus'); 
const util_form_form_js = require('nej-commonjs/util/form/form'); 
const util_helper_select_js = require('nej-commonjs/util/helper/select'); 
const util_highlight_touch_js = require('nej-commonjs/util/highlight/touch'); 
const util_history_history_js = require('nej-commonjs/util/history/history'); 
const util_history_history_override_js = require('nej-commonjs/util/history/history.override'); 
const util_history_manager_js = require('nej-commonjs/util/history/manager'); 
const util_hover_hover_js = require('nej-commonjs/util/hover/hover'); 
const util_lazy_image_js = require('nej-commonjs/util/lazy/image'); 
const util_lazy_loading_js = require('nej-commonjs/util/lazy/loading'); 
const util_lightbox_lightbox_js = require('nej-commonjs/util/lightbox/lightbox'); 
const util_list_holder_js = require('nej-commonjs/util/list/holder'); 
const util_list_module_js = require('nej-commonjs/util/list/module'); 
const util_list_module_pager_js = require('nej-commonjs/util/list/module.pager'); 
const util_list_module_waterfall_js = require('nej-commonjs/util/list/module.waterfall'); 
const util_list_page_js = require('nej-commonjs/util/list/page'); 
const util_list_waterfall_js = require('nej-commonjs/util/list/waterfall'); 
const util_media_audio_js = require('nej-commonjs/util/media/audio'); 
const util_media_flash_js = require('nej-commonjs/util/media/flash'); 
const util_media_media_js = require('nej-commonjs/util/media/media'); 
const util_media_playlist_js = require('nej-commonjs/util/media/playlist'); 
const util_page_base_js = require('nej-commonjs/util/page/base'); 
const util_page_page_base_js = require('nej-commonjs/util/page/page.base'); 
const util_page_page_js = require('nej-commonjs/util/page/page'); 
const util_page_page_simple_js = require('nej-commonjs/util/page/page.simple'); 
const util_page_simple_js = require('nej-commonjs/util/page/simple'); 
const util_placeholder_placeholder_js = require('nej-commonjs/util/placeholder/placeholder'); 
const util_query_nes_js = require('nej-commonjs/util/query/nes'); 
const util_query_query_js = require('nej-commonjs/util/query/query'); 
const util_range_range_js = require('nej-commonjs/util/range/range'); 
const util_region_region_zh_js = require('nej-commonjs/util/region/region.zh'); 
const util_region_zh_js = require('nej-commonjs/util/region/zh'); 
const util_resize_resize_js = require('nej-commonjs/util/resize/resize'); 
const util_scroll_scroll_simple_js = require('nej-commonjs/util/scroll/scroll.simple'); 
const util_scroll_simple_js = require('nej-commonjs/util/scroll/simple'); 
const util_scroll_smart_js = require('nej-commonjs/util/scroll/smart'); 
const util_selector_cascade_js = require('nej-commonjs/util/selector/cascade'); 
const util_selector_range_js = require('nej-commonjs/util/selector/range'); 
const util_selector_selector_js = require('nej-commonjs/util/selector/selector'); 
const util_selector_selector_range_js = require('nej-commonjs/util/selector/selector.range'); 
const util_slider_simple_js = require('nej-commonjs/util/slider/simple'); 
const util_slider_slider_js = require('nej-commonjs/util/slider/slider'); 
const util_slider_slider_simple_js = require('nej-commonjs/util/slider/slider.simple'); 
const util_slider_slider_x_js = require('nej-commonjs/util/slider/slider.x'); 
const util_slider_slider_xy_js = require('nej-commonjs/util/slider/slider.xy'); 
const util_slider_slider_y_js = require('nej-commonjs/util/slider/slider.y'); 
const util_slider_x_js = require('nej-commonjs/util/slider/x'); 
const util_slider_xy_js = require('nej-commonjs/util/slider/xy'); 
const util_slider_y_js = require('nej-commonjs/util/slider/y'); 
const util_sort_horizontal_js = require('nej-commonjs/util/sort/horizontal'); 
const util_sort_sortable_js = require('nej-commonjs/util/sort/sortable'); 
const util_sort_vertical_js = require('nej-commonjs/util/sort/vertical'); 
const util_suggest_at_js = require('nej-commonjs/util/suggest/at'); 
const util_suggest_suggest_js = require('nej-commonjs/util/suggest/suggest'); 
const util_tab_tab_js = require('nej-commonjs/util/tab/tab'); 
const util_tab_tab_view_js = require('nej-commonjs/util/tab/tab.view'); 
const util_tab_view_js = require('nej-commonjs/util/tab/view'); 
const util_template_jst_js = require('nej-commonjs/util/template/jst'); 
const util_template_tpl_js = require('nej-commonjs/util/template/tpl'); 
const util_template_trimpath_js = require('nej-commonjs/util/template/trimpath'); 
const util_timer_animation_js = require('nej-commonjs/util/timer/animation'); 
const util_timer_interval_js = require('nej-commonjs/util/timer/interval'); 
const util_toggle_toggle_js = require('nej-commonjs/util/toggle/toggle'); 
const util_ajax_loader_html_js = require('nej-commonjs/util/ajax/loader/html'); 
const util_ajax_loader_loader_js = require('nej-commonjs/util/ajax/loader/loader'); 
const util_ajax_loader_script_js = require('nej-commonjs/util/ajax/loader/script'); 
const util_ajax_loader_style_js = require('nej-commonjs/util/ajax/loader/style'); 
const util_ajax_loader_text_js = require('nej-commonjs/util/ajax/loader/text'); 
const util_ajax_proxy_flash_js = require('nej-commonjs/util/ajax/proxy/flash'); 
const util_ajax_proxy_frame_js = require('nej-commonjs/util/ajax/proxy/frame'); 
const util_ajax_proxy_proxy_js = require('nej-commonjs/util/ajax/proxy/proxy'); 
const util_ajax_proxy_upload_js = require('nej-commonjs/util/ajax/proxy/upload'); 
const util_ajax_proxy_xhr_js = require('nej-commonjs/util/ajax/proxy/xhr'); 
const util_data_portrait_portrait_js = require('nej-commonjs/util/data/portrait/portrait'); 
const util_data_region_zh_js = require('nej-commonjs/util/data/region/zh'); 
const util_dispatcher_dsp_group_js = require('nej-commonjs/util/dispatcher/dsp/group'); 
const util_dispatcher_dsp_node_js = require('nej-commonjs/util/dispatcher/dsp/node'); 
const util_dispatcher_dsp_single_js = require('nej-commonjs/util/dispatcher/dsp/single'); 
const util_dispatcher_dsp_util_js = require('nej-commonjs/util/dispatcher/dsp/util'); 
const util_editor_command_backcolor_js = require('nej-commonjs/util/editor/command/backcolor'); 
const util_editor_command_blockquote_js = require('nej-commonjs/util/editor/command/blockquote'); 
const util_editor_command_bold_js = require('nej-commonjs/util/editor/command/bold'); 
const util_editor_command_card_js = require('nej-commonjs/util/editor/command/card'); 
const util_editor_command_color_js = require('nej-commonjs/util/editor/command/color'); 
const util_editor_command_font_js = require('nej-commonjs/util/editor/command/font'); 
const util_editor_command_fontname_js = require('nej-commonjs/util/editor/command/fontname'); 
const util_editor_command_fontsize_js = require('nej-commonjs/util/editor/command/fontsize'); 
const util_editor_command_forecolor_js = require('nej-commonjs/util/editor/command/forecolor'); 
const util_editor_command_format_js = require('nej-commonjs/util/editor/command/format'); 
const util_editor_command_insertorderedlist_js = require('nej-commonjs/util/editor/command/insertorderedlist'); 
const util_editor_command_insertunorderedlist_js = require('nej-commonjs/util/editor/command/insertunorderedlist'); 
const util_editor_command_italic_js = require('nej-commonjs/util/editor/command/italic'); 
const util_editor_command_justifycenter_js = require('nej-commonjs/util/editor/command/justifycenter'); 
const util_editor_command_justifyleft_js = require('nej-commonjs/util/editor/command/justifyleft'); 
const util_editor_command_justifyright_js = require('nej-commonjs/util/editor/command/justifyright'); 
const util_editor_command_link_js = require('nej-commonjs/util/editor/command/link'); 
const util_editor_command_removeformat_js = require('nej-commonjs/util/editor/command/removeformat'); 
const util_editor_command_simple_js = require('nej-commonjs/util/editor/command/simple'); 
const util_editor_command_space_js = require('nej-commonjs/util/editor/command/space'); 
const util_editor_command_strikethrough_js = require('nej-commonjs/util/editor/command/strikethrough'); 
const util_editor_command_superscript_js = require('nej-commonjs/util/editor/command/superscript'); 
const util_editor_command_underline_js = require('nej-commonjs/util/editor/command/underline'); 
const util_editor_command_uploadimage_js = require('nej-commonjs/util/editor/command/uploadimage'); 

const NEJ_MAP = {
  index,
'base/chain': base_chain_js,
'base/config': base_config_js,
'base/constant': base_constant_js,
'base/element': base_element_js,
'base/event': base_event_js,
'base/global': base_global_js,
'base/klass': base_klass_js,
'base/platform': base_platform_js,
'base/util': base_util_js,
'util/event': util_event_js,
'util/ajax/dwr': util_ajax_dwr_js,
'util/ajax/jsonp': util_ajax_jsonp_js,
'util/ajax/message': util_ajax_message_js,
'util/ajax/rest': util_ajax_rest_js,
'util/ajax/tag': util_ajax_tag_js,
'util/ajax/xdr': util_ajax_xdr_js,
'util/animation/animation': util_animation_animation_js,
'util/animation/bezier': util_animation_bezier_js,
'util/animation/bounce': util_animation_bounce_js,
'util/animation/decelerate': util_animation_decelerate_js,
'util/animation/easein': util_animation_easein_js,
'util/animation/easeinout': util_animation_easeinout_js,
'util/animation/easeout': util_animation_easeout_js,
'util/animation/linear': util_animation_linear_js,
'util/audio/audio': util_audio_audio_js,
'util/cache/abstract': util_cache_abstract_js,
'util/cache/cache': util_cache_cache_js,
'util/cache/cache.list.base': util_cache_cache_list_base_js,
'util/cache/cache.list': util_cache_cache_list_js,
'util/cache/cache.share': util_cache_cache_share_js,
'util/cache/cookie': util_cache_cookie_js,
'util/cache/database': util_cache_database_js,
'util/cache/list': util_cache_list_js,
'util/cache/manager': util_cache_manager_js,
'util/cache/share': util_cache_share_js,
'util/cache/storage': util_cache_storage_js,
'util/calendar/calendar': util_calendar_calendar_js,
'util/chain/NodeList': util_chain_NodeList_js,
'util/chain/chainable': util_chain_chainable_js,
'util/chart/chart': util_chart_chart_js,
'util/clipboard/clipboard': util_clipboard_clipboard_js,
'util/clipper/clipper': util_clipper_clipper_js,
'util/clock/clock': util_clock_clock_js,
'util/color/color': util_color_color_js,
'util/counter/counter': util_counter_counter_js,
'util/cursor/cursor': util_cursor_cursor_js,
'util/cycler/cycler': util_cycler_cycler_js,
'util/dispatcher/dispatcher.2': util_dispatcher_dispatcher_2_js,
'util/dispatcher/dispatcher': util_dispatcher_dispatcher_js,
'util/dispatcher/module.base': util_dispatcher_module_base_js,
'util/dispatcher/module': util_dispatcher_module_js,
'util/dispatcher/regularModule': util_dispatcher_regularModule_js,
'util/dispatcher/test': util_dispatcher_test_js,
'util/dragger/dragger': util_dragger_dragger_js,
'util/dragger/simple': util_dragger_simple_js,
'util/editor/area': util_editor_area_js,
'util/editor/command': util_editor_command_js,
'util/editor/editor': util_editor_editor_js,
'util/editor/text': util_editor_text_js,
'util/editor/toolbar': util_editor_toolbar_js,
'util/effect/api': util_effect_api_js,
'util/effect/effect.api': util_effect_effect_api_js,
'util/effect/effect': util_effect_effect_js,
'util/encode/base64': util_encode_base64_js,
'util/encode/crc32': util_encode_crc32_js,
'util/encode/json': util_encode_json_js,
'util/encode/md5': util_encode_md5_js,
'util/encode/sha.md5': util_encode_sha_md5_js,
'util/es/array': util_es_array_js,
'util/event/event': util_event_event_js,
'util/file/paste': util_file_paste_js,
'util/file/save': util_file_save_js,
'util/file/select': util_file_select_js,
'util/flash/flash': util_flash_flash_js,
'util/focus/focus': util_focus_focus_js,
'util/form/form': util_form_form_js,
'util/helper/select': util_helper_select_js,
'util/highlight/touch': util_highlight_touch_js,
'util/history/history': util_history_history_js,
'util/history/history.override': util_history_history_override_js,
'util/history/manager': util_history_manager_js,
'util/hover/hover': util_hover_hover_js,
'util/lazy/image': util_lazy_image_js,
'util/lazy/loading': util_lazy_loading_js,
'util/lightbox/lightbox': util_lightbox_lightbox_js,
'util/list/holder': util_list_holder_js,
'util/list/module': util_list_module_js,
'util/list/module.pager': util_list_module_pager_js,
'util/list/module.waterfall': util_list_module_waterfall_js,
'util/list/page': util_list_page_js,
'util/list/waterfall': util_list_waterfall_js,
'util/media/audio': util_media_audio_js,
'util/media/flash': util_media_flash_js,
'util/media/media': util_media_media_js,
'util/media/playlist': util_media_playlist_js,
'util/page/base': util_page_base_js,
'util/page/page.base': util_page_page_base_js,
'util/page/page': util_page_page_js,
'util/page/page.simple': util_page_page_simple_js,
'util/page/simple': util_page_simple_js,
'util/placeholder/placeholder': util_placeholder_placeholder_js,
'util/query/nes': util_query_nes_js,
'util/query/query': util_query_query_js,
'util/range/range': util_range_range_js,
'util/region/region.zh': util_region_region_zh_js,
'util/region/zh': util_region_zh_js,
'util/resize/resize': util_resize_resize_js,
'util/scroll/scroll.simple': util_scroll_scroll_simple_js,
'util/scroll/simple': util_scroll_simple_js,
'util/scroll/smart': util_scroll_smart_js,
'util/selector/cascade': util_selector_cascade_js,
'util/selector/range': util_selector_range_js,
'util/selector/selector': util_selector_selector_js,
'util/selector/selector.range': util_selector_selector_range_js,
'util/slider/simple': util_slider_simple_js,
'util/slider/slider': util_slider_slider_js,
'util/slider/slider.simple': util_slider_slider_simple_js,
'util/slider/slider.x': util_slider_slider_x_js,
'util/slider/slider.xy': util_slider_slider_xy_js,
'util/slider/slider.y': util_slider_slider_y_js,
'util/slider/x': util_slider_x_js,
'util/slider/xy': util_slider_xy_js,
'util/slider/y': util_slider_y_js,
'util/sort/horizontal': util_sort_horizontal_js,
'util/sort/sortable': util_sort_sortable_js,
'util/sort/vertical': util_sort_vertical_js,
'util/suggest/at': util_suggest_at_js,
'util/suggest/suggest': util_suggest_suggest_js,
'util/tab/tab': util_tab_tab_js,
'util/tab/tab.view': util_tab_tab_view_js,
'util/tab/view': util_tab_view_js,
'util/template/jst': util_template_jst_js,
'util/template/tpl': util_template_tpl_js,
'util/template/trimpath': util_template_trimpath_js,
'util/timer/animation': util_timer_animation_js,
'util/timer/interval': util_timer_interval_js,
'util/toggle/toggle': util_toggle_toggle_js,
'util/ajax/loader/html': util_ajax_loader_html_js,
'util/ajax/loader/loader': util_ajax_loader_loader_js,
'util/ajax/loader/script': util_ajax_loader_script_js,
'util/ajax/loader/style': util_ajax_loader_style_js,
'util/ajax/loader/text': util_ajax_loader_text_js,
'util/ajax/proxy/flash': util_ajax_proxy_flash_js,
'util/ajax/proxy/frame': util_ajax_proxy_frame_js,
'util/ajax/proxy/proxy': util_ajax_proxy_proxy_js,
'util/ajax/proxy/upload': util_ajax_proxy_upload_js,
'util/ajax/proxy/xhr': util_ajax_proxy_xhr_js,
'util/data/portrait/portrait': util_data_portrait_portrait_js,
'util/data/region/zh': util_data_region_zh_js,
'util/dispatcher/dsp/group': util_dispatcher_dsp_group_js,
'util/dispatcher/dsp/node': util_dispatcher_dsp_node_js,
'util/dispatcher/dsp/single': util_dispatcher_dsp_single_js,
'util/dispatcher/dsp/util': util_dispatcher_dsp_util_js,
'util/editor/command/backcolor': util_editor_command_backcolor_js,
'util/editor/command/blockquote': util_editor_command_blockquote_js,
'util/editor/command/bold': util_editor_command_bold_js,
'util/editor/command/card': util_editor_command_card_js,
'util/editor/command/color': util_editor_command_color_js,
'util/editor/command/font': util_editor_command_font_js,
'util/editor/command/fontname': util_editor_command_fontname_js,
'util/editor/command/fontsize': util_editor_command_fontsize_js,
'util/editor/command/forecolor': util_editor_command_forecolor_js,
'util/editor/command/format': util_editor_command_format_js,
'util/editor/command/insertorderedlist': util_editor_command_insertorderedlist_js,
'util/editor/command/insertunorderedlist': util_editor_command_insertunorderedlist_js,
'util/editor/command/italic': util_editor_command_italic_js,
'util/editor/command/justifycenter': util_editor_command_justifycenter_js,
'util/editor/command/justifyleft': util_editor_command_justifyleft_js,
'util/editor/command/justifyright': util_editor_command_justifyright_js,
'util/editor/command/link': util_editor_command_link_js,
'util/editor/command/removeformat': util_editor_command_removeformat_js,
'util/editor/command/simple': util_editor_command_simple_js,
'util/editor/command/space': util_editor_command_space_js,
'util/editor/command/strikethrough': util_editor_command_strikethrough_js,
'util/editor/command/superscript': util_editor_command_superscript_js,
'util/editor/command/underline': util_editor_command_underline_js,
'util/editor/command/uploadimage': util_editor_command_uploadimage_js,
}

const nejRequire = (id) => {
  return NEJ_MAP[id] || NEJ_MAP[id + '.js']
}

window.nejRequire = nejRequire