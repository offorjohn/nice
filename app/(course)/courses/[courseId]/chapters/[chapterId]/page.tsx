import React from 'react';
import { getChapter } from '@/actions/getChapter';
import { Banner } from '@/components/banner';
import { auth } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import { VideoPlayer } from './_components/VideoPlayer';
import { CourseProgressButton } from './_components/CourseProgressButton';
import { Separator } from '@/components/ui/separator';
import { Preview } from '@/components/preview';
import { File } from 'lucide-react';

// Define types for Params and SearchParams
export type Params = Promise<{ courseId: string; chapterId: string }>;
export type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

// Metadata generation example (if needed)
export async function generateMetadata(props: { params: Params; searchParams: SearchParams }) {
  const params = await props.params;
  const searchParams = await props.searchParams;
  // Utilize params and searchParams for metadata generation if required.
}

interface PageProps {
  params: Params;
  searchParams: SearchParams;
}

const ChapterIdPage = async (props: PageProps) => {
  const params = await props.params;
  const searchParams = await props.searchParams;

  const { userId } = auth();
  if (!userId) {
    redirect('/');
    return null;
  }

  const { courseId, chapterId } = params;

  const data = await getChapter({
    userId,
    courseId,
    chapterId,
  });

  if (!data?.chapter || !data?.course) {
    redirect('/');
    return null;
  }

  const { chapter, course, muxData, attachments, nextChapter, userProgress, purchase } = data;
  const isLocked = !chapter.isFree && !purchase;
  const completeOnEnd = !!purchase && !userProgress?.isCompleted;

  return (
    <div className="max-w-4xl mx-auto pb-20">
      {userProgress?.isCompleted && (
        <Banner variant="success" label="You already completed this chapter." />
      )}

      {isLocked && (
        <Banner variant="warning" label="You need to purchase this course to watch this chapter." />
      )}

      <div className="p-4">
        <VideoPlayer
          chapterId={chapterId}
          title={chapter.title}
          courseId={courseId}
          nextChapterId={nextChapter?.id}
          playbackId={muxData?.playbackId || ''}
          isLocked={isLocked}
          completeOnEnd={completeOnEnd}
        />
      </div>

      <div className="p-4 flex flex-col md:flex-row items-center justify-between">
        <h2 className="text-2xl font-semibold mb-2">{chapter.title}</h2>
        <CourseProgressButton
          chapterId={chapterId}
          courseId={courseId}
          nextChapterId={nextChapter?.id}
          isCompleted={!!userProgress?.isCompleted}
        />
      </div>

      <Separator />
      <Preview value={chapter.description || ''} />

      {attachments.length > 0 && (
        <>
          <Separator />
          <div className="p-4">
            {attachments.map((attachment) => (
              <a
                href={attachment.url}
                target="_blank"
                key={attachment.id}
                className="flex items-center p-3 w-full bg-sky-200 border text-sky-700 rounded-md hover:underline"
              >
                <File className="mr-2" />
                <p className="line-clamp-1">{attachment.name}</p>
              </a>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default ChapterIdPage;
