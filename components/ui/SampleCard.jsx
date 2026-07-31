import Image from "next/image";
import { FileText } from "lucide-react";

export default function SampleCard({ sample, priority = false }) {
    return (
        <div className="group rounded-2xl border border-black/5 bg-white p-5 shadow-sm hover:shadow-md transition-shadow">
            <h3 className="text-lg sm:text-xl font-bold text-[#001d49] text-center mb-4 tracking-tight">
                {sample.title.toUpperCase()}
            </h3>

            <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-black/5">
                <Image
                    src={sample.image}
                    alt={`${sample.title} estimate sample`}
                    fill
                    priority={priority}
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            <a
                href={sample.file}
                download
                className="mt-4 flex items-center justify-center gap-2 rounded-md bg-[#0b1220] px-4 py-2.5 text-xs sm:text-sm font-semibold text-white hover:bg-[#001d49] transition-colors"
            >
                <FileText className="h-3.5 w-3.5" />
                Download Sample
            </a>
        </div>
    );
}