import React, {useState} from 'react';
import {
    Text,
    View, SafeAreaView, ScrollView, Dimensions,
    Button, StyleSheet, Image, NativeModules, ActivityIndicator, Alert
} from 'react-native';

import ImagePicker from 'react-native-image-crop-picker';
import ProgressCircle from 'react-native-progress-circle';
import TesseractOcr, {
  LANG_ENGLISH,
  useEventListener,
} from 'react-native-tesseract-ocr';

import MlkitOcr from 'react-native-mlkit-ocr';

const DEFAULT_HEIGHT = 500;
const DEFAULT_WITH = 600;
const defaultPickerOptions = {
  cropping: true,
  height: DEFAULT_HEIGHT,
  width: DEFAULT_WITH,
};

export default function DateScan({route, navigation}) {
    // const {itemId} = route.params;
    const [isLoading, setIsLoading] = useState(false);
    const [progress, setProgress] = useState(0);
    const [imgSrc, setImgSrc] = useState(null);
    const [text, setText] = useState('');
    const [result, setResult] = useState(null);
    const [imgHeight, setHeight] = useState(0);
    const [imgWidth, setWidth] = useState(0);



    useEventListener('onProgressChange', (p) => {
        setProgress(p.percent / 100);
    });

    const recognizeTextFromImage = async (path) => {
        setIsLoading(true);

        try {
            const tesseractOptions = {};
            const recognizedText = await TesseractOcr.recognize(
                path,
                LANG_ENGLISH, 
                tesseractOptions
            );
            
            setText(recognizedText);
            Alert.alert(
                //title
                'Discounted Price',
                //body
                '$4.50',
                [
                  {
                    text: 'Add to cart',
                    onPress: () => {
                        console.log('Yes Pressed');
                        navigation.navigate("CartScreen");
                    }
                  },
                  {
                    text: 'Cancel',
                    onPress: () => console.log('No Pressed'), style: 'cancel'
                  },
                ],
                {cancelable: false},
                //clicking out side of alert will not cancel
              );
        } catch (err) {
            console.error(err);
            setText('');
        }

        setIsLoading(false);
        setProgress(0);
    }

    const recognizeFromPicker = async (options = defaultPickerOptions) => {
        try {
            const image = await ImagePicker.openPicker(options);
            setImgSrc({uri: image.path});
            await recognizeTextFromImage(image.path);
        } catch (err) {
            if (err.message !== 'User cancelled image selection') {
                console.error(err);
            }
        }
    }

    const recognizeFromCamera = async (options = defaultPickerOptions) => {
        try {
            const image = await ImagePicker.openCamera(options);
            setHeight(image.height);
            setWidth(image.width);
            setImgSrc({uri: image.path});
            setResult(await MlkitOcr.detectFromUri(image.path));
        } catch (err) {
            if (err.message !== 'User cancelled image selection') {
                console.error(err);
            }
        }
    }

    if (isLoading) {
        return (
            <SafeAreaView style={styles.container}>
                <ActivityIndicator/>
            </SafeAreaView>
        )
    }

    return (
        <View style={styles.container}>
            <Image source={require('./logo.png')}></Image>
            <Text style={styles.title}>Scan expiry date</Text>
            <Text style={styles.instructions}>Select an image source:</Text>
            <View style={styles.options}>
                <View style={styles.button}>
                    <Button
                        disabled={isLoading}
                        title="Cam"
                        onPress={() => {
                        recognizeFromCamera();
                        }}
                    />  
                </View>
                <View style={styles.button}>
                    <Button
                        disabled={isLoading}
                        title="Picker"
                        onPress={() => {
                        recognizeFromPicker();
                        }}
                    />
                </View>
            </View>
            {imgSrc && (
                <View style={styles.imageContainer}>
                <Image style={styles.image} source={imgSrc} />
                {isLoading ? (
                    <ProgressCircle showsText radius={50} percent={progress} />
                ) : (
                    <SafeAreaView style={styles.container}>
                        {!!result?.length && (
                            <ScrollView
                                contentContainerStyle={{
                                    alignItems: 'stretch',
                                    padding: 20,
                                    height: Dimensions.get('window').height,
                                }}
                                showsVerticalScrollIndicator
                                style={styles.scroll}
                                >
                                {result?.map((block) => {
                                    return block.lines.map((line) => {
                                    return (
                                        <View
                                            key={line.text}
                                            style={{
                                                backgroundColor: '#ccccccaf',
                                                position: 'absolute',
                                                top: fitHeight(line.bounding.top, imgHeight ?? 0),
                                                height: fitHeight(line.bounding.height, imgHeight ?? 0),
                                                left: fitWidth(line.bounding.left, imgWidth ?? 0),
                                                width: fitWidth(line.bounding.width, imgWidth ?? 0),
                                            }}
                                            >
                                            <Text style={{ fontSize: 10 }}>{line.text}</Text>
                                        </View>
                                    );
                                    });
                                })}
                            </ScrollView>
                        )}
                    </SafeAreaView>
                )}
                </View>
            )}
        </View>
    );

}

function fitWidth(value, imageWidth) {
    const fullWidth = Dimensions.get('window').width;
    return (value / imageWidth) * fullWidth;
  }
  
  function fitHeight(value, imageHeight) {
    const fullHeight = Dimensions.get('window').height;
    return (value / imageHeight) * fullHeight;
  }

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
    options: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 10,
    },
    button: {
      marginHorizontal: 10,
    },
    imageContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      marginVertical: 15,
      height: DEFAULT_HEIGHT / 2.5,
      width: DEFAULT_WITH / 2.5,
    },
    title: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
      fontFamily: "Inter-Bold",
    },
    instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
    },
  });