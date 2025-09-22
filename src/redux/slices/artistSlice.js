import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import axios from 'axios';

// const baseurl=process.env.NEXT_PUBLIC_API_BASE_URL;

// export const uploadGallery = createAsyncThunk(
//   'artist/uploadGallery',
//   async (formData, { rejectWithValue }) => {
//     try {
//       const response = await axios.post(
//         `${baseurl}/users/upload-gallery`,
//         formData,
//         {
//           headers: {
//             'Content-Type': 'multipart/form-data',
//           },
//         }
//       );
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.response?.data || 'Something went wrong');
//     }
//   }
// );

const artistSlice = createSlice({
    name: 'artist',
    initialState: {
        data: null,
        status: 'pending',
    },
    reducers: {
        setArtistData: (state, action) => {
            state.data = action.payload
        },
        setStatus: (state, action) => {
            console.log('action', action)
            state.status = action.payload
        },
    },

//      extraReducers: (builder) => {
//     builder
//       .addCase(uploadGallery.pending, (state) => {
//         state.status = 'loading';
//         state.error = null;
//       })
//       .addCase(uploadGallery.fulfilled, (state, action) => {
//         state.status = 'succeeded';
//         state.data = action.payload;
//       })
//       .addCase(uploadGallery.rejected, (state, action) => {
//         state.status = 'failed';
//         state.error = action.payload;
//       });
//   },
})

export const { setArtistData, setStatus } = artistSlice.actions;
export default artistSlice.reducer;
