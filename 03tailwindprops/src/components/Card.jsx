import React from "react";

function Card({userName = "AR", userDesignation = "Developer"}) {

    // console.log(props);

  return (
    <div>
        <figure className="bg-slate-100 rounded-xl m-2 p-8 dark:bg-slate-800">
        <img className="w-24 h-24 rounded-full mx-auto" src="https://images.pexels.com/photos/21939684/pexels-photo-21939684/free-photo-of-a-sign-that-says-barberiere-hanging-from-a-building.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width="384" height="512" />
        <div className="pt-6 space-y-4">
            <blockquote>
            <p className="text-lg font-medium">
                “Tailwind CSS is the only framework that I've seen scale
                on large teams. It’s easy to customize, adapts to any design,
                and the build size is tiny.”
            </p>
            </blockquote>
            <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">
                {userName}
            </div>
            <div className="text-slate-700 dark:text-slate-500">
                {userDesignation}, Algolia
            </div>
            </figcaption>
        </div>
        </figure>
    </div>
  );
}


export default Card;
