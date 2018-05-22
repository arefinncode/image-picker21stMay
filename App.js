/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    Text,
    View,Image,Button,StyleSheet,PixelRatio,TouchableOpacity,
} from 'react-native';

import ImagePicker from 'react-native-image-picker';


const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {

    constructor(props) {
        super(props);
        this.state = {
            // avatarSource:null,
            avatarSource: null,
            videoSource: null
        };


        // More info on all the options is below in the README...just some common use cases shown here
        // var options = {
        //     title: 'Select Avatar',
        //     customButtons: [
        //         {name: 'fb', title: 'Choose Photo from Facebook'},
        //     ],
        //     storageOptions: {
        //         skipBackup: true,
        //         path: 'images'
        //     }
        // };
    }
    // a11(){
    //     alert("check line # 53");
    //
    //     ImagePicker.showImagePicker(this.options, (response) => {
    //         console.log('Response = ', response);
    //
    //         if (response.didCancel) {
    //             console.log('User cancelled image picker');
    //         }
    //         else if (response.error) {
    //             console.log('ImagePicker Error: ', response.error);
    //         }
    //         else if (response.customButton) {
    //             console.log('User tapped custom button: ', response.customButton);
    //         }
    //         else {
    //             var source = { uri: response.uri };
    //
    //             // You can also display the image using data:
    //             // let source = { uri: 'data:image/jpeg;base64,' + response.data };
    //
    //             this.setState({
    //                 avatarSource: source
    //             });
    //         }
    //     });
    //
    // };

    // a22(){
    //     alert("check line # 53");
    //
    //     ImagePicker.showImagePicker(this.options, (response) => {
    //         console.log('Response = ', response);
    //
    //         if (response.didCancel) {
    //             console.log('User cancelled image picker');
    //         }
    //         else if (response.error) {
    //             console.log('ImagePicker Error: ', response.error);
    //         }
    //         else if (response.customButton) {
    //             console.log('User tapped custom button: ', response.customButton);
    //         }
    //         else {
    //             var source = { uri: response.uri };
    //
    //             // You can also display the image using data:
    //             // let source = { uri: 'data:image/jpeg;base64,' + response.data };
    //
    //             this.setState({
    //                 avatarSource: source
    //             });
    //         }
    //     });
    //
    // }

    selectPhotoTapped() {
        const options = {
            quality: 1.0,
            maxWidth: 500,
            maxHeight: 500,
            storageOptions: {
                skipBackup: true
            }
        };

        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled photo picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                // uri option not present in video source.uri

                let source = { uri: response.uri };

                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    avatarSource: source
                });
            }
        });
    }

    selectVideoTapped() {
        const options = {
            title: 'Video Picker',
            takePhotoButtonTitle: 'Take Video...',
            mediaType: 'video',
            videoQuality: 'medium'
        };

        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled video picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                this.setState({
                    videoSource: response.uri
                });
            }
        });
    }


    render() {
        return (

            <View style={styles.container}>
                <Greetings/>

                <Button
                    onPress={this.a11}
                    title="Image insertion Button"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />

                <Button
                    onPress={this.a22}
                    title="Image insertion Button 2"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                />

                <TouchableOpacity onPress={this.selectPhotoTapped.bind(this)}>
                    <View style={[styles.avatar, styles.avatarContainer, {marginBottom: 20}]}>
                        { this.state.avatarSource === null ? <Text>Select a Photo</Text> :
                            <Image style={styles.avatar} source={this.state.avatarSource} />
                        }
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={this.selectVideoTapped.bind(this)}>
                    <View style={[styles.avatar, styles.avatarContainer]}>
                        { this.state.videoSource === null ? <Text>Select a video</Text> :
                            <Image style={styles.avatar} source={this.state.videoSource} />
                        }
                    </View>
                </TouchableOpacity>



                <Text style={styles.welcome}>
                    Welcome to React Native!
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit App.js
                </Text>
                <Text style={styles.instructions}>
                    {instructions}
                </Text>


                <Image source={this.state.avatarSource} style={styles.uploadAvatar} />

                { this.state.videoSource &&
                <Text style={{margin: 8, textAlign: 'center'}}>{this.state.videoSource}</Text>
                }

            </View>
        );
    }
}



//  The first arg is the options object for customization (it can also be null or omitted for default options),
// The second arg is the callback which sends object: response (more info below in README)
//

class Greetings extends Component{


    render(){

        return <Text>Hello world</Text>
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    avatarContainer: {
        borderColor: '#9B9B9B',
        borderWidth: 1 / PixelRatio.get(),
        justifyContent: 'center',
        alignItems: 'center'
    },
    avatar: {
        borderRadius: 75,
        width: 150,
        height: 150
    }
});
