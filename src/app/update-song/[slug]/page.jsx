"use client"
import React, { useState, useEffect, use } from 'react';
import { useRouter } from 'next/navigation';
import { Button, Input, Textarea, Select, SelectItem, Tooltip, Image, Switch } from '@heroui/react';
import { CiCircleRemove } from 'react-icons/ci';
import toast from 'react-hot-toast'
import { musicCategories } from '@/data/music-data';
import FileUploader from '@/components/file-uploader';
import Container from '@/components/ui/container';
import usePublishSongForm from '@/app/(others)/artists/publish-song/_hook/usePublishSongForm';
import { editSongs, getSongDataByID } from '@/services/api/song-api-service';
import { withAuthProtection } from '@/components/auth/protected-component';

function UpdateSongForm({ params }) {
    const { handleAddAlbum, albums } = usePublishSongForm()
    const router = useRouter()
    const [songData, setSongData] = useState(null);
    const [isOpenThumbnailUpload, setIsOpenThumbnailUpload] = useState(false);
    const [isOpenMusicUpload, setIsOpenMusicUpload] = useState(false);
    const [singleUpload, setSingleUpload] = useState(true);  // For toggling between single upload and album upload
    const [formValues, setFormValues] = useState({
        title: '',
        description: '',
        category: '',
        url: '',
        artwork: '',
        album_id: null,
    });
    const [errors, setErrors] = useState({});
    const { slug } = use(params);

    // Fetch song details by ID
    const getSongDetailById = async () => {
        const resp = await getSongDataByID(slug);
        if (resp.status === "success") {
            setSongData(resp.song);
        }
    };

    useEffect(() => {
        getSongDetailById();
    }, []);

    // Update form values when songData changes
    useEffect(() => {
        if (songData) {
            setFormValues({
                title: songData.title || '',
                description: songData.description || '',
                category: songData.category.name || "",
                url: songData.url || '',
                artwork: songData.artwork || '',
                albumsOfSong: songData.albumsOfSong || null,
            });

            // Automatically set the upload mode if albumsOfSong is present
            setSingleUpload(songData.albumsOfSong?.length === 0);  // If no album, use Single upload mode
        }
    }, [songData]);

    const handleMusicUpload = (filePath) => {
        setFormValues({ ...formValues, url: filePath });
    };

    const handleThumbnailUpload = (filePath) => {
        setFormValues({ ...formValues, artwork: filePath });
    };

    const handleRemoveSong = () => {
        setFormValues({ ...formValues, url: '' });
    };

    const handleRemoveThumbnail = () => {
        setFormValues({ ...formValues, artwork: '' });
    };

    const handleChangeUploadMode = (value) => {
        setSingleUpload(value);
        setFormValues({ ...formValues, album_id: null });  // Reset album_id when switching upload mode
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Validation
        if (!formValues.title || !formValues.description || !formValues.category) {
            setErrors({ general: 'All fields are required.' });
            return;
        }

        try {
            const resp = await editSongs(slug, formValues);
            if (resp.status === "success") {
                toast.success("Updated Successfully");
                router.replace('/artists/my-library/song/draft-songs')
            }
        } catch (err) {
            setErrors({ general: 'Error updating song. Please try again.' });
        }
    };

    return (
        <Container>
            <div className='mb-4'>
                <Switch
                    onValueChange={handleChangeUploadMode}
                    isSelected={singleUpload}
                >
                    Upload Mode:
                    <span className={`font-semibold ${singleUpload ? 'text-success-500' : 'text-danger-500'}`}>
                        {singleUpload ? 'Single' : 'Inside Album'}
                    </span>
                </Switch>
            </div>

            {/* File uploader for song */}
            <FileUploader
                isOpen={isOpenMusicUpload}
                onClose={() => setIsOpenMusicUpload(false)}
                onSuccess={handleMusicUpload}
                accept={{
                    'audio/mpeg': ['.mp3'],
                    'audio/mp4': ['.m4a', '.aac'],
                    'audio/ogg': ['.ogg', '.opus'],
                    'audio/flac': ['.flac'],
                    'audio/wav': ['.wav'],
                    'audio/x-aiff': ['.aiff', '.aif'],
                }}
            />

            {/* File uploader for thumbnail */}
            <FileUploader
                isOpen={isOpenThumbnailUpload}
                onClose={() => setIsOpenThumbnailUpload(false)}
                onSuccess={handleThumbnailUpload}
                accept={{
                    'image/*': ['.jpg', '.jpeg', '.png'],
                }}
            />

            <div className="space-y-6">
                <form className="mx-auto grid grid-cols-1 gap-6 md:grid-cols-2 lg:w-2/3" onSubmit={handleSubmit}>
                    {/* Song file display */}
                    {formValues.url && (
                        <div>
                            <div className="flex items-center gap-1">
                                <audio controls src={`https://d13hus0rdpxu56.cloudfront.net/${formValues.url}`} className="h-8" />
                                <Tooltip content="Remove Song">
                                    <Button isIconOnly variant="light" onPress={handleRemoveSong} isDisabled={songData?.is_public}>
                                        <CiCircleRemove className="text-2xl text-danger-500" />
                                    </Button>
                                </Tooltip>
                            </div>
                            {songData?.is_public &&
                                <span className='text-sm text-danger-500'>You can&apos;t edit this field as you have already published this song</span>
                            }
                        </div>
                    )}

                    {/* Upload button for song */}
                    {!formValues.url && (
                        <Button variant="faded" onPress={() => setIsOpenMusicUpload(true)}>
                            Upload Song
                        </Button>
                    )}

                    {/* Thumbnail display */}
                    {formValues.artwork && (
                        <div className="relative w-fit">
                            <Image
                                src={formValues.artwork || '/img/open-graph.png'}
                                alt="song thumbnail"
                                className="h-20 w-20 object-cover"
                                radius="sm"
                            />
                            <Tooltip content="Remove Thumbnail">
                                <Button isIconOnly variant="light" className="absolute -right-8 -top-6" onPress={handleRemoveThumbnail}>
                                    <CiCircleRemove className="text-2xl text-danger-500" />
                                </Button>
                            </Tooltip>
                        </div>
                    )}

                    {/* Upload button for thumbnail */}
                    {!formValues.artwork && (
                        <Button variant="faded" onPress={() => setIsOpenThumbnailUpload(true)}>
                            Upload Thumbnail
                        </Button>
                    )}

                    {/* Category selection */}
                    <div className='flex flex-col'>
                        <label className='mb-2'>Category</label>
                        <select
                            className="custom-select"
                            variant="faded"
                            label="Category"
                            placeholder="Song Category"
                            value={formValues.category}  // Ensure category is correctly set from form values
                            onChange={(e) => setFormValues({ ...formValues, category: e.target.value })} // Update category on selection
                        >
                            {musicCategories.map((category) => (
                                <option key={category.value} value={category.value}>
                                    {category.label}  {/* Display the label */}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Title input */}
                    <div className='flex flex-col'>
                        <label className='mb-2'>Title</label>
                        <Input
                            type="text"
                            variant="faded"
                            label="Title"
                            placeholder="Song Title"
                            value={formValues.title}
                            onChange={(e) => setFormValues({ ...formValues, title: e.target.value })}
                        />
                    </div>

                    {/* Description input */}
                    <div className='flex flex-col'>
                        <label className='mb-2'>Description</label>
                        <Textarea
                            type="text"
                            variant="faded"
                            label="Description"
                            placeholder="Song Description"
                            value={formValues.description}
                            onChange={(e) => setFormValues({ ...formValues, description: e.target.value })}
                        />
                    </div>

                    {/* Show album selection when 'Inside Album' is selected */}
                    {!singleUpload && albums?.length > 0 && (
                        <div>
                            <label>Album</label>
                            <div className="flex gap-3 mt-2">
                                <Select
                                    variant="faded"
                                    label="Select Album"
                                    value={formValues?.album_id || ''}
                                    onChange={(e) => setFormValues({ ...formValues, album_id: e.target.value })}
                                >
                                    {albums?.filter((album) => !songData?.albumsOfSong.some(item => item._id === album._id))
                                        .map((album) => (
                                            <SelectItem key={album._id} value={album._id}>
                                                {album.name}
                                            </SelectItem>
                                        ))}
                                </Select>
                                <Button className="py-7" onPress={handleAddAlbum}>
                                    Add
                                </Button>
                            </div>
                        </div>
                    )}

                    {/* Submit Button */}
                    <Button
                        isLoading={false}
                        size="lg"
                        type="submit"
                        className="mb-6 w-full font-bold md:col-span-2"
                        color="primary"
                    >
                        Update Song
                    </Button>

                    {errors.general && <div className="text-red-500">{errors.general}</div>}
                </form>
            </div>
        </Container>
    );
}

export default withAuthProtection(UpdateSongForm);
