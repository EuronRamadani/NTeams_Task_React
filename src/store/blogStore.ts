import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Post {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  readTime: string;
  category: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  image: string;
}

interface BlogState {
  posts: Post[];
  categories: string[];
  selectedCategory: string;
  searchQuery: string;
  currentPage: number;
  postsPerPage: number;
  setSelectedCategory: (category: string) => void;
  setSearchQuery: (query: string) => void;
  setCurrentPage: (page: number) => void;
  filteredPosts: () => Post[];
}

export const useBlogStore = create<BlogState>()(
  persist(
    (set, get) => ({
      posts: [
        {
          id: 1,
          title: "10 Best things to do in Tbilisi, Georgia",
          excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
          content: "Full content here...",
          readTime: "6 min read",
          category: "Travel",
          author: {
            name: "John Doe",
            avatar: "/author-avatar.png"
          },
          date: "March 15, 2024",
          image: "/tbilisi.jpg"
        },
        // Add more posts here
      ],
      categories: ["All", "Travel", "Technology", "Lifestyle", "Food", "Culture"],
      selectedCategory: "All",
      searchQuery: "",
      currentPage: 1,
      postsPerPage: 9,
      
      setSelectedCategory: (category) => set({ selectedCategory: category, currentPage: 1 }),
      setSearchQuery: (query) => set({ searchQuery: query, currentPage: 1 }),
      setCurrentPage: (page) => set({ currentPage: page }),
      
      filteredPosts: () => {
        const state = get();
        let filtered = state.posts;
        
        // Filter by category
        if (state.selectedCategory !== "All") {
          filtered = filtered.filter(post => post.category === state.selectedCategory);
        }
        
        // Filter by search query
        if (state.searchQuery) {
          const query = state.searchQuery.toLowerCase();
          filtered = filtered.filter(post => 
            post.title.toLowerCase().includes(query) ||
            post.excerpt.toLowerCase().includes(query)
          );
        }
        
        return filtered;
      }
    }),
    {
      name: 'blog-storage',
    }
  )
);