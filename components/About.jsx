import Image from "next/image";
import React from "react";

function About() {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest gradient-1-text">
            About
          </p>
          <h2 className="py-4">Who am I?</h2>
          <p className="py-2">
            Hello! My name is Mohammed Al-Musawi. I am 20 year old
            Iraqi-American born in Washington and raised in Michigan. I am a
            Junior studying for a B.S. in Computer Science at Wayne State
            University with a (hopeful) graduation date in May &apos;25.{" "}
          </p>
          <p className="py-2">
            I am currently working towards a career in the software engineering
            field, but will be pursuing game development on my own time as
            developing a world-class game that's played and loved by many is a
            dream of mine.
          </p>
          <p className="py-2">
            I'm extremely enthusiastic about gaming, video production and
            photography, music, and most importantly, One Piece. These passions
            led me to develop the enjoyment for software and game development,
            graphic design, 3D animation, and playing the guitar and piano.
          </p>
          <p className="py-2">
            Currently, I am running an Islamic clothing brand, Heaven Sent, with
            a close friend of mine. Our goal is inspire Muslim youth and allow
            people to recognize that God is for everyone, and is always there no
            matter your circumstances.
          </p>
          <div className="flex underline justify-between py-2 text-gray-400">
            <p>
              <a
                className="cursor-pointer hover:gradient-1-text hover:font-normal ease-in duration-300"
                target="_blank"
                href="https://heavensent.site/"
              >
                Heaven Sent
              </a>
            </p>
            <p>
              <a
                className="cursor-pointer hover:gradient-1-text hover:font-normal ease-in duration-300"
                target="_blank"
                href="https://linkedin.com/in/m-almusawi/"
              >
                LinkedIn
              </a>
            </p>
            <p>
              <a
                className="cursor-pointer hover:gradient-1-text hover:font-normal ease-in duration-300"
                target="_blank"
                href="https://github.com/m0hue/"
              >
                GitHub
              </a>
            </p>
          </div>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-800 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in-out duration-300">
          <Image
            unoptimized
            className="rounded-xl"
            src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/51158316-fd7e-48ca-b5fe-8542e9dfe357/dfssp88-f1817799-321d-427f-a84c-57891b5cd211.png/v1/fill/w_1068,h_748,q_70,strp/one_piece_wano_kuni_wallpaper_by_bodskih_dfssp88-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjgwNCIsInBhdGgiOiJcL2ZcLzUxMTU4MzE2LWZkN2UtNDhjYS1iNWZlLTg1NDJlOWRmZTM1N1wvZGZzc3A4OC1mMTgxNzc5OS0zMjFkLTQyN2YtYTg0Yy01Nzg5MWI1Y2QyMTEucG5nIiwid2lkdGgiOiI8PTQwMDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.4jv5g86ZRLYUo0i21snC8x5v6afVec3Hk0uGda8pmHg"
            alt="/"
            width={1800}
            height={1800}
          />
        </div>
      </div>
    </div>
  );
}

export default About;
