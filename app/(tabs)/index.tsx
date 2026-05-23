import {  Text,  TouchableOpacity,  View,Image, ScrollView,Linking, FlatList, RefreshControl } from "react-native";
import {styles} from "../../styles/feed.styles";
import { STORIES } from "@/constants/Mock-data";
import Story from "@/components/Story";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { COLORS } from "@/constants/theme";
import { Loader } from "@/components/Loader";
import Post from "@/components/Post";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";



export default function Index() {
  
  const posts = useQuery(api.posts.getFeedPosts)

  const [refreshing, setRefeshing] = useState(false);

  if(posts === undefined) return <Loader />

  if(posts.length === 0) return <NoPostsFound />

  //this does nothing but it is used to refresh the screen
  const onRefresh = () => {
    setRefeshing(true);
    setTimeout(() => {
      setRefeshing(false);
    }, 1000);
  };

  const openLink = () => {
    Linking.openURL('https://github.com/AbhishekGanvir/Blendy');
  };

  return (
    <View
      style={styles.container}
    >    
      {/* header */}
      <View style={styles.header}>
        <Image source={require('../../assets/images/Screenshot 2025-03-12 141012.png')} style={{ width: 190, height: 42,right:40}} />

        <TouchableOpacity onPress={openLink}>
        <Image source={require('../../assets/images/icons8-github-72.png')} style={{ width: 32, height: 32}} />
          </TouchableOpacity> 
      </View>
      
      <FlatList data={posts} renderItem={({item}) =><Post post={{...item, isLiked: item.isliked}} /> } //post={{item}}
      keyExtractor={(item) => item._id}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ paddingBottom:60}}
      ListHeaderComponent={<StoriesSection />}
      refreshControl={
        <RefreshControl 
        
        refreshing={refreshing}
        onRefresh={onRefresh}
        tintColor={COLORS.primary}
        />
      }
      />

    </View>
  );
}       
const StoriesSection = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}
    style={styles.container} >
      
    {STORIES.map((story) =>(
      <Story key={story.id} story={story} />
    ))}
    </ScrollView>
  )
}

const NoPostsFound = () => {
  return (
    <View style={{
      flex:1,
      backgroundColor:COLORS.background,
      justifyContent:"center",
      alignItems:"center",
    }}>
      <Ionicons name="alert-circle-outline" size={88} bottom={15} color={COLORS.primary} />
      <Text style={{fontSize:27,bottom:15,  color:COLORS.white}}>No posts yet</Text>
    </View>
  );
}




{/*  <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom:60}} //enable vertical scrolling 
        > 
        
        <ScrollView horizontal showsHorizontalScrollIndicator={false}
        style={styles.container} >
          
        {STORIES.map((story) =>(
          <Story key={story.id} story={story} />
        ))}
        </ScrollView>

        {posts.map((post) =>(
          <Post key={post._id} post={{...post, isLiked: post.isliked}}/>
        ))
        
        }

        </ScrollView>  */}

       //flatlist for performance optimization it only renders screen visible components at once while screenscroll shows each and every component even if itis not available which can crash the