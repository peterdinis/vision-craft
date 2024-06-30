import { FC } from 'react';
import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from '@/components/ui/resizable';
import EditorComponents from './components/EditorComponents';
import { Button } from '@/components/ui/button';
import PagePreview from './page/PagePreview';

const EditorResize: FC = () => {
    return (
        <main className='flex w-full flex-col'>
            <div className='flex items-center justify-between gap-3 border-b-2 p-4'>
                <h2 className='mt-5 truncate text-balance text-xl font-bold'>
                    Your website
                </h2>
                <Button variant='default'>Save</Button>
            </div>

            <div className='flex w-full justify-between gap-2 mt-5'>
                <ResizablePanelGroup direction='horizontal'>
                    <ResizablePanel minSize={20} maxSize={80}>
                        <EditorComponents />
                    </ResizablePanel>
                    <ResizableHandle />
                    <ResizablePanel minSize={0} maxSize={80}>
                        <PagePreview />
                    </ResizablePanel>
                </ResizablePanelGroup>
            </div>
        </main>
    );
};

export default EditorResize;