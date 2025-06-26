import { createSlice } from "@reduxjs/toolkit";

const sliceStore = createSlice({
  name: "sliceStore",
  initialState: {
    blogs: [] as any[],
    blogsData: [] as any[],
    fetchedBlogs: false,
    selectedBlog: 0,
    excludeBlogTypes: [],
    blogTypes: [] as string[],
    selectedBlogData: {} as any,
    searchTerm: "",
    editingBlog: false,
    themeMode: "light",
  },
  reducers: {
    /** Selects a blog */
    selectBlog(state, action) {
      state.selectedBlog = action.payload;
      state.selectedBlogData = state.blogs[action.payload];
    },

    /** Updates the blog currently selected */
    updateBlog(state, action) {
      const data = action.payload.blogData;
      state.blogs[state.selectedBlog] = {
        ...state.selectedBlogData,
        ...data,
      };
      state.selectedBlogData = {
        title: data.title,
        details: data.details,
        photo: state.selectedBlogData.photo,
        type: state.selectedBlogData.type,
      };
      state.editingBlog = false;
    },

    /** Adds a new blog */
    addBlog(state, action) {
      if (!state.blogTypes.includes("Local")) {
        state.blogTypes = [...state.blogTypes, "Local"].sort().reverse();
      }

      state.blogsData.unshift(action.payload);

      if (!state.excludeBlogTypes.includes("Local")) {
        state.blogs.unshift(action.payload);
        state.selectedBlog = 0;
        state.selectedBlogData = action.payload;
      }
    },

    /** Updates blog type filters */
    updateFilters(state, action) {
      if (!action.payload.exclude) {
        state.excludeBlogTypes = state.excludeBlogTypes.filter(
          (filter) => filter !== action.payload.filter
        );
      } else if (!state.excludeBlogTypes.includes(action.payload.filter)) {
        state.excludeBlogTypes.push(action.payload.filter);
      }

      const filteredBlogs = state.blogsData.filter(
        (blog) =>
          blog.title.toLowerCase().includes(state.searchTerm.toLowerCase()) &&
          !state.excludeBlogTypes.includes(blog.type)
      );

      state.blogs = filteredBlogs;
      state.selectedBlog = 0;
      state.selectedBlogData = filteredBlogs[0] || {};
    },

    /** Filters blogs by search term */
    filterBlogs(state, action) {
      const searchTerm = action.payload.toLowerCase();
      let filteredBlogs = [];

      if (state.excludeBlogTypes.length) {
        filteredBlogs = state.blogsData.filter(
          (blog) =>
            blog.title.toLowerCase().includes(searchTerm) &&
            !state.excludeBlogTypes.includes(blog.type)
        );
      } else {
        filteredBlogs = state.blogsData.filter((blog) =>
          blog.title.toLowerCase().includes(searchTerm)
        );
      }

      state.blogs = filteredBlogs;
      state.searchTerm = action.payload;
      state.selectedBlog = 0;
      state.selectedBlogData = filteredBlogs[0] || {};
    },

    /** Sets editing mode */
    editingBlog(state, action) {
      state.editingBlog = action.payload;
    },

    /** Stores fetched blogs in state */
      setFetchedBlogs(state, action) {
        state.blogsData = action.payload;
        state.fetchedBlogs = true;
      
        // Extract blog types
        const types = new Set<string>();
        action.payload.forEach((blog: any) => {
          if (blog.type) types.add(blog.type);
        });
        state.blogTypes = Array.from(types).sort();
      
        // Filter blogs using existing excludeBlogTypes
        const filtered = action.payload.filter(
          (blog) =>
            blog.title.toLowerCase().includes(state.searchTerm.toLowerCase()) &&
            !state.excludeBlogTypes.includes(blog.type)
        );
      
        state.blogs = filtered;
        state.selectedBlog = 0;
        state.selectedBlogData = filtered[0] || {};
      },
      //toggle mode
      toggleThemeMode(state) {
        state.themeMode = state.themeMode === "light" ? "dark" : "light";
      },
  },
});

export const SliceActions = sliceStore.actions;

export default sliceStore;
