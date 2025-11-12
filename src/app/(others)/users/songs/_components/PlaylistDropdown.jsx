const PlaylistDropdown = ({
  playLists,
  name,
  value,
  onChange,
  onBlur,
  touched,
  errors,
}) => {
  return (
    <div className="relative col-span-12 mb-2 md:col-span-5">
      <label
        htmlFor={name}
        className="mb-2 block text-sm md:text-base text-[#D1CAD5]"
      >
        Select a playlist
      </label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={`h-[3rem] w-full rounded-md border px-3 text-[0.82rem] ${
          touched && errors ? 'border-red-500' : 'border-[rgba(255,255,255,0.15)]'
        } bg-[#2E2E2E] text-[#929292]`}
      >
        <option value="">Playlist</option>
        {playLists.map((playlist) => (
          <option key={playlist._id} value={playlist._id}>
            {playlist.title}
          </option>
        ))}
      </select>
      {touched && errors ? (
        <p className="mt-1 text-xs text-red-500">{errors}</p>
      ) : null}
    </div>
  );
};

export default PlaylistDropdown;
