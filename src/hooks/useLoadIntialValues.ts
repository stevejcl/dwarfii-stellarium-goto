import { useContext, useEffect } from "react";

import { ConnectionContext } from "@/stores/ConnectionContext";
import {
  fetchCoordinatesDB,
  fetchInitialConnectionTimeDB,
  fetchIPStellariumDB,
  fetchPortStellariumDB,
  fetchUrlStellariumDB,
  fetchConnectionStatusStellariumDB,
  fetchIPDwarfDB,
  fetchUserCurrentObjectListNameDb,
  fetchCurrentObjectListNameDb,
  fetchConnectionStatusDB,
  fetchAstroSettingsAllDb,
  fetchDebugDb,
  fetchDebugMessagesDb,
} from "@/db/db_utils";

export function useLoadIntialValues() {
  let connectionCtx = useContext(ConnectionContext);

  useEffect(() => {
    if (connectionCtx.connectionStatus === undefined) {
      let data = fetchConnectionStatusDB();
      if (data !== undefined) connectionCtx.setConnectionStatus(data);
    }
    if (connectionCtx.connectionStatusStellarium === undefined) {
      let data = fetchConnectionStatusStellariumDB();
      if (data !== undefined) connectionCtx.setConnectionStatusStellarium(data);
    }
    if (connectionCtx.latitude === undefined) {
      let data = fetchCoordinatesDB();
      if (data.latitude) {
        connectionCtx.setLatitude(data.latitude);
        connectionCtx.setLongitude(data.longitude);
      }
    }
    if (connectionCtx.initialConnectionTime === undefined) {
      let data = fetchInitialConnectionTimeDB();
      if (data !== undefined) connectionCtx.setInitialConnectionTime(data);
    }
    if (connectionCtx.IPDwarf === undefined) {
      let data = fetchIPDwarfDB();
      if (data !== undefined) connectionCtx.setIPDwarf(data);
    }
    if (connectionCtx.connectionStatusStellarium === undefined) {
      let data = fetchConnectionStatusStellariumDB();
      if (data !== undefined) connectionCtx.setConnectionStatusStellarium(data);
    }
    if (connectionCtx.IPStellarium === undefined) {
      let data = fetchIPStellariumDB();
      if (data !== undefined) connectionCtx.setIPStellarium(data);
    }
    if (connectionCtx.portStellarium === undefined) {
      let data = fetchPortStellariumDB();
      if (data !== undefined) connectionCtx.setPortStellarium(data);
    }
    if (connectionCtx.urlStellarium === undefined) {
      let data = fetchUrlStellariumDB();
      if (data !== undefined) connectionCtx.setUrlStellarium(data);
    }

    if (connectionCtx.currentObjectListName === undefined) {
      let data = fetchCurrentObjectListNameDb();
      if (data !== undefined) {
        connectionCtx.setCurrentObjectListName(data);
      }
    }

    if (connectionCtx.currentUserObjectListName === undefined) {
      let data = fetchUserCurrentObjectListNameDb();
      if (data !== undefined) {
        connectionCtx.setUserCurrentObjectListName(data);
      }
    }

    if (connectionCtx.astroSettings.gain === undefined) {
      let data = fetchAstroSettingsAllDb();
      if (data !== undefined) {
        connectionCtx.setAstroSettings(data);
      }
    }

    if (connectionCtx.debug === undefined) {
      let data = fetchDebugDb();
      if (data !== undefined) {
        connectionCtx.setDebug(data);
      }
    }

    if (connectionCtx.logger === undefined) {
      let data = fetchDebugMessagesDb();
      if (data !== undefined) {
        connectionCtx.setLogger(data);
      }
    }
  }, []);
}
