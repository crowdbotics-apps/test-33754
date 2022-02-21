import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_2_147}>
        <View style={styles.View_2_148}>
          <View style={styles.View_2_149}>
            <Text style={styles.Text_2_149}>Sign Up to Smartkies</Text>
          </View>
        </View>
        <View style={styles.View_2_150}>
          <Text style={styles.Text_2_150}>
            Already have an Account? Sign In
          </Text>
        </View>
      </View>
      <View style={styles.View_2_151}>
        <View style={styles.View_2_152}>
          <View style={styles.View_2_153}>
            <View style={styles.View_2_154}>
              <View style={styles.View_I2_154_56_165}>
                <View style={styles.View_I2_154_56_163}>
                  <Text style={styles.Text_I2_154_56_163}>First Name*</Text>
                </View>
                <View style={styles.View_I2_154_56_161}>
                  <View style={styles.View_I2_154_56_162}>
                    <Text style={styles.Text_I2_154_56_162}>Joe</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_2_155}>
              <View style={styles.View_I2_155_56_165}>
                <View style={styles.View_I2_155_56_163}>
                  <Text style={styles.Text_I2_155_56_163}>Last Name</Text>
                </View>
                <View style={styles.View_I2_155_56_161}>
                  <View style={styles.View_I2_155_56_162}>
                    <Text style={styles.Text_I2_155_56_162}>Tenser</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_2_156}>
              <View style={styles.View_I2_156_56_165}>
                <View style={styles.View_I2_156_56_163}>
                  <Text style={styles.Text_I2_156_56_163}>Sur Name*</Text>
                </View>
                <View style={styles.View_I2_156_56_161}>
                  <View style={styles.View_I2_156_56_162}>
                    <Text style={styles.Text_I2_156_56_162}>Daniel</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_2_157}>
              <View style={styles.View_2_158}>
                <Text style={styles.Text_2_158}>Phone Number*</Text>
              </View>
              <View style={styles.View_2_159}>
                <View style={styles.View_2_160}>
                  <View style={styles.View_2_161}>
                    <Text style={styles.Text_2_161}>🇦🇪</Text>
                  </View>
                  <ImageBackground
                    source={{
                      uri:
                        "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c6e3/0ca5/dbebcfc270b58aeadfe73a3a4d334cb0"
                    }}
                    style={styles.ImageBackground_2_162}
                  />
                </View>
                <View style={styles.View_2_163}>
                  <View style={styles.View_2_164}>
                    <Text style={styles.Text_2_164}>+971 555 555 555</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_2_165}>
              <View style={styles.View_I2_165_56_165}>
                <View style={styles.View_I2_165_56_163}>
                  <Text style={styles.Text_I2_165_56_163}>Email Address*</Text>
                </View>
                <View style={styles.View_I2_165_56_161}>
                  <View style={styles.View_I2_165_56_162}>
                    <Text style={styles.Text_I2_165_56_162}>
                      Example@gmail.com{" "}
                    </Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_2_166}>
              <View style={styles.View_2_167}>
                <View style={styles.View_I2_167_56_165}>
                  <View style={styles.View_I2_167_56_163}>
                    <Text style={styles.Text_I2_167_56_163}>
                      Date of Birth*
                    </Text>
                  </View>
                  <View style={styles.View_I2_167_56_161}>
                    <View style={styles.View_I2_167_56_162}>
                      <Text style={styles.Text_I2_167_56_162}>dd/mm/yy</Text>
                    </View>
                  </View>
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9c39/05ba/07e39b340311b9e2e164cd2a8f8109b2"
                }}
                style={styles.ImageBackground_2_168}
              />
            </View>
            <View style={styles.View_2_169}>
              <View style={styles.View_I2_169_77_158}>
                <View style={styles.View_I2_169_77_159}>
                  <Text style={styles.Text_I2_169_77_159}>
                    Choose your Gender
                  </Text>
                </View>
                <View style={styles.View_I2_169_77_163}>
                  <View style={styles.View_I2_169_77_146}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/10cb/5da4/54b920a0431df1bf7f3362a11bed65d9"
                      }}
                      style={styles.ImageBackground_I2_169_77_147}
                    />
                    <View style={styles.View_I2_169_77_148}>
                      <Text style={styles.Text_I2_169_77_148}>Male</Text>
                    </View>
                  </View>
                  <View style={styles.View_I2_169_77_122}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1e9c/ae16/dc4c7a701a39120c8f59312ad71311ca"
                      }}
                      style={styles.ImageBackground_I2_169_77_72}
                    />
                    <View style={styles.View_I2_169_77_126}>
                      <Text style={styles.Text_I2_169_77_126}>Female</Text>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_2_170}>
              <View style={styles.View_I2_170_56_165}>
                <View style={styles.View_I2_170_56_163}>
                  <Text style={styles.Text_I2_170_56_163}>
                    Do you have any Referral Code?
                  </Text>
                </View>
                <View style={styles.View_I2_170_56_161}>
                  <View style={styles.View_I2_170_56_162}>
                    <Text style={styles.Text_I2_170_56_162}>12345</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_2_171}>
        <Text style={styles.Text_2_171}>Main Details</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/12ec/f7ce/7065b6e381662a9c34c0667f0e54b54c"
        }}
        style={styles.ImageBackground_2_172}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/68ef/ee32/253a949d6396e94461ab50ddad1a8264"
        }}
        style={styles.ImageBackground_2_173}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8a34/1f30/153dfe672d0221b5514cb764055cb764"
        }}
        style={styles.ImageBackground_2_174}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6310/85e0/2f68e565ab2525fe41416acd33ba6ca7"
        }}
        style={styles.ImageBackground_2_175}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c799/2aea/2b255252cd647a836ad4a4a5bfc7c5f0"
        }}
        style={styles.ImageBackground_2_176}
      />
      <View style={styles.View_2_177}>
        <Text style={styles.Text_2_177}>
          You should write your right name on your ID Card
        </Text>
      </View>
      <View style={styles.View_2_178}>
        <View style={styles.View_2_179} />
        <View style={styles.View_2_180}>
          <View style={styles.View_2_181}>
            <View style={styles.View_I2_181_52_7}>
              <Text style={styles.Text_I2_181_52_7}>Continue</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("155%") },
  View_2_147: {
    width: wp("83%"),
    minWidth: wp("83%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("11%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_148: {
    width: wp("69%"),
    minWidth: wp("69%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_149: {
    width: wp("69%"),
    minWidth: wp("69%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_149: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_150: {
    width: wp("83%"),
    minWidth: wp("83%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_2_150: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_151: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("115%"),
    minHeight: hp("115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("25%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_152: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("115%"),
    minHeight: hp("115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_153: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("115%"),
    minHeight: hp("115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_154: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_154_56_165: {
    flexGrow: 1,
    width: wp("92%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_154_56_163: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I2_154_56_163: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_154_56_161: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I2_154_56_162: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I2_154_56_162: {
    color: "rgba(224, 224, 224, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_155: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_155_56_165: {
    flexGrow: 1,
    width: wp("92%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_155_56_163: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I2_155_56_163: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_155_56_161: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I2_155_56_162: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I2_155_56_162: {
    color: "rgba(224, 224, 224, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_156: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("30%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_156_56_165: {
    flexGrow: 1,
    width: wp("92%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_156_56_163: {
    width: wp("21%"),
    minWidth: wp("21%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I2_156_56_163: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_156_56_161: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I2_156_56_162: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I2_156_56_162: {
    color: "rgba(224, 224, 224, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_157: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("45%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_158: {
    width: wp("31%"),
    minWidth: wp("31%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_158: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_159: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_160: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_2_161: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_2_161: {
    color: "rgba(189, 189, 189, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_162: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  View_2_163: {
    width: wp("75%"),
    minWidth: wp("75%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_2_164: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_2_164: {
    color: "rgba(189, 189, 189, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_165: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("60%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_165_56_165: {
    flexGrow: 1,
    width: wp("92%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_165_56_163: {
    width: wp("30%"),
    minWidth: wp("30%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I2_165_56_163: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_165_56_161: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I2_165_56_162: {
    width: wp("36%"),
    minWidth: wp("36%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I2_165_56_162: {
    color: "rgba(224, 224, 224, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_166: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("74%")
  },
  View_2_167: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_167_56_165: {
    flexGrow: 1,
    width: wp("92%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_167_56_163: {
    width: wp("26%"),
    minWidth: wp("26%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I2_167_56_163: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_167_56_161: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I2_167_56_162: {
    width: wp("19%"),
    minWidth: wp("19%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I2_167_56_162: {
    color: "rgba(224, 224, 224, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_168: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%")
  },
  View_2_169: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("89%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_169_77_158: {
    flexGrow: 1,
    width: wp("92%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_169_77_159: {
    width: wp("40%"),
    minWidth: wp("40%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I2_169_77_159: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_169_77_163: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_169_77_146: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(241, 245, 254, 1)"
  },
  ImageBackground_I2_169_77_147: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  View_I2_169_77_148: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I2_169_77_148: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_169_77_122: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("0%"),
    backgroundColor: "rgba(241, 245, 254, 1)"
  },
  ImageBackground_I2_169_77_72: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  View_I2_169_77_126: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I2_169_77_126: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_170: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("104%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_170_56_165: {
    flexGrow: 1,
    width: wp("92%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_170_56_163: {
    width: wp("62%"),
    minWidth: wp("62%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I2_170_56_163: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_170_56_161: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I2_170_56_162: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I2_170_56_162: {
    color: "rgba(224, 224, 224, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_171: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_2_171: {
    color: "rgba(51, 51, 51, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_172: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_2_173: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%")
  },
  ImageBackground_2_174: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%")
  },
  ImageBackground_2_175: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%")
  },
  ImageBackground_2_176: {
    width: wp("17%"),
    minWidth: wp("17%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%")
  },
  View_2_177: {
    width: wp("71%"),
    minWidth: wp("71%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("20%"),
    justifyContent: "flex-start"
  },
  Text_2_177: {
    color: "rgba(130, 130, 130, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_178: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("89%")
  },
  View_2_179: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_2_180: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_181: {
    width: wp("92%"),
    minWidth: wp("92%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(84, 56, 254, 1)"
  },
  View_I2_181_52_7: {
    flexGrow: 1,
    width: wp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I2_181_52_7: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
