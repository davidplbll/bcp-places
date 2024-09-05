import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';

const { width } = Dimensions.get('window');
type props = {
  images: string[];
  title: string;
};

export const ImageCarousel = ({ images, title }: props) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (event: any) => {
    const slide = Math.ceil(
      event.nativeEvent.contentOffset.x /
        event.nativeEvent.layoutMeasurement.width
    );
    if (slide !== activeIndex) {
      setActiveIndex(slide);
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        style={{
          paddingTop: 30,
        }}
        scrollEventThrottle={16}
      >
        {images.map((image, index) => (
          <Image key={index} source={{ uri: image }} style={styles.image} />
        ))}
      </ScrollView>
      <View style={styles.pagination}>
        {images.map((_, index) => (
          <Text
            key={index}
            style={index === activeIndex ? styles.activeDot : styles.dot}
          >
            ●
          </Text>
        ))}
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    height: 280,
    position: 'absolute',
    bottom: 0,
    padding: 10,
    backgroundColor: '#797c9175',
  },
  image: {
    width: width - 20,
    height: 230,
    resizeMode: 'cover',
    borderRadius: 20,
  },
  pagination: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
  },
  titleContainer: {
    position: 'absolute',
    top: 0,
    padding: 10,
    width,
  },
  title: {
    color: '#040D12',
    textAlign: 'center',
    fontSize: 20,
  },
  dot: {
    color: '#888',
    fontSize: 16,
    margin: 3,
  },
  activeDot: {
    color: '#fff',
    fontSize: 16,
    margin: 3,
  },
});
