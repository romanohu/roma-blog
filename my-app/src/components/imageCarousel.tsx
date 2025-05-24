import fs from "fs";
import path from "path";
import Image from "next/image";



export function getAllImages() {
    const imagesDir = path.join(process.cwd(), "/public/images");
    const filenames = fs.readdirSync(imagesDir);

    const images = filenames
        .filter((name) => name.endsWith(".jpg") || name.endsWith(".png") || name.endsWith(".JPG") || name.endsWith(".PNG"))
        .map((filename) => {
            const image = filename.replace(/\.(jpg|png|JPG|PNG)$/, "");
            return {
                image,
                filename,
            };
        });
    console.log(images);
    return images;
}

export default function ImageCarousel(){
    const images = getAllImages();
    return (
        <div className="w-full">
        
            <div className="flex gap-4 py-4 overflow-x-auto">
                {images.map((file) => (
                    <div key={file.image} id={file.image} className="flex-shrink-0 w-64 h-40 rounded shadow #eecd90 flex items-center justify-center">
                        <Image src={`/images/${file.filename}`}
                        alt=""
                        width={256}
                        height={160}
                        className="object-contain w-full h-full"/>
                    </div>
                ))}
            </div>
        </div>
    );
}