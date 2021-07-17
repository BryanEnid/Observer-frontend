import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Card } from '..';

const styles = StyleSheet.create({
    certifications_container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 5,
        
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5,
    },
    certifications_row: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    content_column: {
        marginVertical: 10,
    },
    logo_column: {
        marginLeft: -50,
        marginRight: -40,
    },
    content_title: {
        textTransform: 'capitalize',
        fontWeight: 'bold',
    },
    content_company: {
        textTransform: 'capitalize',
    },
    content_obtained: {
        textTransform: 'capitalize',
    },
    uppercase: {
        textTransform: 'uppercase',
    }
});

export default function Certification({ item }) {
    const { icon, title, company, obtained } = item;
    return (
        <View style={styles.certifications_container}>
            <Card style={styles.card}>
                <View style={styles.certifications_row}>
                    <View style={styles.logo_column}>
                        {icon}
                    </View>
                    <View style={styles.content_column}>
                        <Text style={styles.content_title}>{title}</Text>
                        <Text style={styles.content_company}>{ company }</Text>
                        <Text style={styles.content_obtained}>{ obtained }</Text>
                    </View>
                </View>
            </Card>
        </View>
    );
}