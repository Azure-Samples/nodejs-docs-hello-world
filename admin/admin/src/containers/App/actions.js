/*
 *
 * LanguageProvider actions
 *
 */

import {
  FREEZE_APP,
  GET_APP_PLUGINS_SUCCEEDED,
  LOAD_PLUGIN,
  PLUGIN_DELETED,
  PLUGIN_LOADED,
  UNFREEZE_APP,
  UNSET_HAS_USERS_PLUGIN,
  UPDATE_PLUGIN,
} from './constants';

export function freezeApp(data) {
  return {
    type: FREEZE_APP,
    data,
  };
}

export function getAppPluginsSucceeded(plugins) {
  return {
    type: GET_APP_PLUGINS_SUCCEEDED,
    appPlugins: plugins.map(plugin => plugin.id),
  };
}

export function loadPlugin(newPlugin) {
  return {
    type: LOAD_PLUGIN,
    plugin: newPlugin,
  };
}

export function pluginDeleted(plugin) {
  return {
    type: PLUGIN_DELETED,
    plugin,
  };
}

export function pluginLoaded(newPlugin) {
  return {
    type: PLUGIN_LOADED,
    plugin: newPlugin,
  };
}

export function unfreezeApp() {
  return {
    type: UNFREEZE_APP,
  };
}

export function unsetHasUserPlugin() {
  return {
    type: UNSET_HAS_USERS_PLUGIN,
  };
}

export function updatePlugin(pluginId, updatedKey, updatedValue) {
  return {
    type: UPDATE_PLUGIN,
    pluginId,
    updatedKey,
    updatedValue,
  };
}
