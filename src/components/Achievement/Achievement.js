import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { Text, Card, } from '..';


const styles = StyleSheet.create({
    achievements_container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    card: {
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingVertical: 15,
    },
    achievements_row: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    achievements_content_column: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flex: 2,
    },
    achievements_icon: {
      
    },
    achievements_details: {
      
    },
    achievements_button_column: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    achievements_button: {
       backgroundColor: '#1CB9FE',
       width: 40,
       height: 40,
       borderRadius: 50,
       flexDirection: 'column',
       justifyContent: 'center',
       alignItems: 'center',
   },
    achievements_title: {
        textTransform: 'capitalize',
        fontWeight: 'bold'
    },
    achievements_institution: {
        textTransform: 'capitalize',

    },
    achievements_obtained: {
        textTransform: 'capitalize',
    },              
});

export default function Achievement({ item }) {
    const { icon, title, institution, obtained } = item;
    return (
        <View style={styles.achievements_container}>
            <Card style={styles.card}>
                <View style={styles.achievements_row}>
                    <View style={styles.achievements_content_column}>
                        <View style={styles.achievements_icon}>{icon}</View>
                        <View style={styles.achievements_details}>
                            <Text style={styles.achievements_title}>{title}</Text>
                            <Text style={styles.achievements_institution}>{institution}</Text>
                            <Text style={styles.achievements_obtained}>{obtained}</Text>
                        </View>
                    </View>
                    <View style={styles.achievements_button_column}>
                        <TouchableWithoutFeedback>
                            <View v style={styles.achievements_button}>
                                <AntDesign style={styles.arrowRight} name="arrowright" size={24} color="white" />
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </View>
            </Card>
        </View>
    )
}