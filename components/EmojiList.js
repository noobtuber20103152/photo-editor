import { useState } from 'react';
import { StyleSheet, FlatList, Image, Platform, Pressable } from 'react-native';

export default function EmojiList({ onSelect, onCloseModal }) {
    const [emoji] = useState([
        'http://cdn.shopify.com/s/files/1/1061/1924/products/Slightly_Smiling_Emoji_Icon_34f238ed-d557-4161-b966-779d8f37b1ac_grande.png?v=1571606093',
        'https://cdn.shopify.com/s/files/1/1061/1924/products/Smiling_With_Sweat_Emoji_2_03db33ba-4c3b-4e9e-8f29-8bac5b9b9166_large.png?v=1571606093',
        'https://cdn.shopify.com/s/files/1/1061/1924/products/17_large.png?v=1571606116',
        'https://cdn.shopify.com/s/files/1/1061/1924/products/B01_4480d32e-5116-41c8-9638-3c8fd4c85415_large.png?v=1571606090',
        'https://cdn.shopify.com/s/files/1/1061/1924/products/Upside-Down_Face_Emoji_4dbbbd80-eb60-4c91-9642-83368692e361_large.png?v=1571606036',
    ]);

    return (
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={Platform.OS === 'web' ? true : false}
            data={emoji}
            contentContainerStyle={styles.listContainer}
            renderItem={({ item, index }) => {
                return (
                    <Pressable
                        onPress={() => {
                            onSelect(item);
                            onCloseModal();
                        }}>
                        <Image source={{ uri: item }} key={index} style={styles.image} />
                    </Pressable>
                );
            }}
        />
    );
}

const styles = StyleSheet.create({
    listContainer: {
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    image: {
        width: 100,
        height: 100,
        marginRight: 20,
    },
});
