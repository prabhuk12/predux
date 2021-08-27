import React from "react";
import { useRemoteComponent } from "./useRemoteComponent";

const plugins = ["https://raw.githubusercontent.com/Paciolan/remote-component/master/examples/remote-components/Time.js","https://raw.githubusercontent.com/Paciolan/remote-component/master/examples/remote-components/HelloWorld.js", "https://raw.githubusercontent.com/Paciolan/remote-component/master/examples/remote-components/Counter.js"]; // prettier-ignore

const RenderPlugin = ({ plugin, ...props }) => {
  const [loading, err, Component] = useRemoteComponent(plugin);

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log(err);

  if (err != null) {
    return <div>Unknown Error: {err.toString()}</div>;
  }

  return <Component {...props} />;
};

const RenderPlugins = ({ pluginList }) =>
  pluginList.map((plugin) => <RenderPlugin plugin={plugin} />);

const RemoteComponent2 = (props) => {
  return <RenderPlugins pluginList={plugins} />;
};

export {RemoteComponent2};