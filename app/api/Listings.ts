import client from "./Client";

const endpoint = "/listings";
const getListings = () => client.get(endpoint);

export const addListings = (listing: any, onUploadProgress: any) => {
  const data = new FormData();
  data.append("title", listing.title);
  data.append("price", listing.price);
  data.append("categoryId", listing.category.value.toString());
  data.append("description", listing.description);
  listing.images.forEach((image: any, index: number) =>
    data.append("images", {
      name: "image" + index,
      type: "image/jpeg",
      uri: image,
    } as unknown as Blob)
  );

  if (listing.location)
    data.append("location", JSON.stringify(listing.location));
  return client.post(endpoint, data, {
    onUploadProgress: (progress: any) => {
      onUploadProgress(progress.loaded / progress.total);
    },
  });
};

export default {
  getListings,
};
