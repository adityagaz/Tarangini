import React from "react";
import images from "../images/images.jpg";
import Navigation from "../navigation/navigation";

const PodcastPage = () => {
  return (
    <>
      <Navigation />
      <div className="bg-gray-100 min-h-screen mt-24">
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-3xl font-bold mb-8">Featured Podcasts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[...Array(8).keys()].map((index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden bg-gray-800 shadow-md"
              >
                <img
                  src={images}
                  alt="Podcast Cover"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-4 text-white">
                    Single MoM 101
                  </h3>
                  <p className="text-gray-400">
                    Podcast description or episode details...
                  </p>
                  <div className="mt-4 flex justify-between items-center">
                    <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded">
                      Play
                    </button>
                    <audio controls className="flex-1 ml-4">
                      <source
                        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"
                        type="audio/mp3"
                      />
                      Your browser does not support the audio element.
                    </audio>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PodcastPage;
