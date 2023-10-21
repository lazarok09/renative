import { Text, Image, View, PixelRatio, TouchableOpacity } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { Api, getScaledValue } from "@rnv/renative";

import {
  ThemeProvider,
  ThemeContext,
  ICON_LOGO,
  testProps,
  CONFIG,
} from "../config";
import { Banner } from "../components/Banner";
import packageJson from "../../package.json";

const App = () => (
  <ThemeProvider>
    <AppThemed />
  </ThemeProvider>
);

const AppThemed = () => {
  const { theme, toggle }: any = useContext(ThemeContext);

  const [pixelRatio, setPixelRatio] = useState(1);
  const [fontScale, setFontScale] = useState(1);

  useEffect(() => {
    setPixelRatio(PixelRatio.get());
    setFontScale(PixelRatio.getFontScale());
  }, []);

  return (
    <View style={theme.styles.container}>
      <Image
        style={theme.styles.image}
        source={ICON_LOGO}
        {...testProps("template-starter-home-screen-renative-image")}
      />
      <Text
        style={theme.styles.textH2}
        {...testProps("template-starter-home-screen-welcome-message-text")}
      >
        {CONFIG.welcomeMessage}
      </Text>
      <Text
        style={theme.styles.textH2}
        {...testProps("template-starter-home-screen-version-number-text")}
      >
        v {packageJson.version}
      </Text>
      <Text style={theme.styles.textH3}>
        {`platform: ${Api.platform}, factor: ${Api.formFactor}, engine: ${Api.engine}`}
      </Text>
      <Text style={theme.styles.textH3}>
        {
          //@ts-ignore
          `hermes: ${global.HermesInternal === undefined ? "no" : "yes"}`
        }
      </Text>
      <Text
        style={theme.styles.textH3}
      >{`pixelRatio: ${pixelRatio}, ${fontScale}`}</Text>
      <TouchableOpacity
        onPress={toggle}
        style={theme.styles.button}
        {...testProps("template-starter-home-screen-try-my-button")}
      >
        <Text style={theme.styles.buttonText}>Try me!</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => alert("vai toma no cu")}>
        <Banner {...testProps("template-starter-home--banner")} />
      </TouchableOpacity>
    </View>
  );
};

export default App;
