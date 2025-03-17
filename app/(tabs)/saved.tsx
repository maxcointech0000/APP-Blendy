import { Loader } from "@/components/Loader";
import { COLORS } from "@/constants/theme";
import { api } from "@/convex/_generated/api";
import { Doc } from "@/convex/_generated/dataModel";
import { styles } from "@/styles/feed.styles";
import { Ionicons } from "@expo/vector-icons";
import { useQuery } from "convex/react";
import { Image } from "expo-image";
import { useState } from "react";
import { View, Text, TouchableOpacity, Modal, FlatList } from "react-native";

export default function Saved() {
  const bookmarkedPosts = useQuery(api.bookmarks.getBookmarkedPosts);
  const [selectedPost, setSelectedPost] = useState<Doc<"posts"> | null>(null);

  if (bookmarkedPosts === undefined) return <Loader />;
  if (bookmarkedPosts.length === 0) return <NoBookmarksFound />;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Saved</Text>
      </View>

      {/* Saved Posts */}
      <FlatList
        data={bookmarkedPosts}
        keyExtractor={(item) => item?._id ?? 'unknown'}
        numColumns={3}
        contentContainerStyle={{
          padding: 8,
          paddingBottom: 60,
        }}
        columnWrapperStyle={{
          justifyContent: "space-between", // Distributes space between columns
        }}
      
        renderItem={({ item: post }) => {
          if (!post) return null;
          return (
            <View style={{ width: "31.33%", padding: 1 }}>
              <TouchableOpacity onPress={() => setSelectedPost(post)}>
                <Image
                  source={post.imageUrl}
                  style={{ width: "100%", aspectRatio: 1, borderRadius: 8 }}
                  contentFit="cover"
                  transition={200}
                  cachePolicy="memory-disk"
                />
              </TouchableOpacity>
            </View>
          );
        }}
      />

      {/* Modal for Selected Post */}
      <Modal
        visible={!!selectedPost}
        animationType="fade"
        transparent={true}
        onRequestClose={() => setSelectedPost(null)}
      >
        <View style={styles.modalBackdrop}>
          {selectedPost && (
            <View style={styles.postDetailContainer}>
              <View style={styles.postDetailHeader}>
                <TouchableOpacity onPress={() => setSelectedPost(null)}>
                  <Ionicons name="close" size={30} color={COLORS.white} />
                </TouchableOpacity>
              </View>
              <Image
                source={selectedPost.imageUrl}
                cachePolicy={"memory-disk"}
                style={styles.postDetailImage}
              />
            </View>
          )}
        </View>
      </Modal>
    </View>
  );
}

function NoBookmarksFound() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: COLORS.background,
      }}
    >
      <Image
        source={require("../../assets/images/No result found.png")}
        style={{ width: 190, height: 190, bottom: 50 }}
      />
      <Text style={{ fontSize: 25, bottom: 36, color: COLORS.white }}>
        No Saved posts yet
      </Text>
    </View>
  );
}
