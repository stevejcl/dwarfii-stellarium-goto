import { useContext } from "react";
import { ConnectionContext } from "@/stores/ConnectionContext";
import { IRCut } from "dwarfii_api";
type PropType = {
  mode: string;
};
export default function StatusBar(props: PropType) {
  const { mode } = props;
  let connectionCtx = useContext(ConnectionContext);

  let connection = connectionCtx.connectionStatus ? (
    <i className="bi bi-check-circle" style={{ color: "green" }}></i>
  ) : (
    <i className="bi bi-x-circle" style={{ color: "red" }}></i>
  );

  let connectionStellarium = connectionCtx.connectionStatusStellarium ? (
    <i className="bi bi-check-circle" style={{ color: "green" }}></i>
  ) : (
    <i className="bi bi-x-circle" style={{ color: "red" }}></i>
  );

  if (mode) {
    return (
      <div className="mb-2">
        {/* {JSON.stringify(connectionCtx, null, 2)}
        <br /> */}
        <span className="me-3">Dwarf II: {connection}</span>
        <span className="me-3">Stellarium: {connectionStellarium}</span>
        {connectionCtx.astroSettings.gain !== undefined && (
          <span className="me-3">Gain: {connectionCtx.astroSettings.gain}</span>
        )}
        {connectionCtx.astroSettings.exposure !== undefined && (
          <span className="me-3">
            Exp: {connectionCtx.astroSettings.exposure}
          </span>
        )}
        {connectionCtx.astroSettings.IR !== undefined && (
          <span className="me-3">
            IR: {connectionCtx.astroSettings.IR === IRCut ? "Cut" : "Pass"}
          </span>
        )}
      </div>
    );
  } else {
    return <></>;
  }
}
