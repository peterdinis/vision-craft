"use client"

import { FC, useState } from 'react';
import { DndContext, useDroppable } from '@dnd-kit/core';
import { Button } from '@/components/ui/button';

const PagePreview: FC = () => {
    const [components, setComponents] = useState<string[]>([]);

    const { setNodeRef } = useDroppable({
        id: 'droppable',
    });

    const handleDragEnd = (event: any) => {
        const { over, active } = event;
        if (over && over.id === 'droppable') {
            setComponents((prev) => [...prev, active.id]);
        }
    };

    const displayCodePreview = () => {
        const generatedHtml = components.map((component, index) => {
            switch (component) {
                case 'Paragraph':
                    return `<p key=${index}>This is a paragraph</p>`;
                case 'Link':
                    return `<a href="#" key=${index}>This is a link</a>`;
                case 'Nav':
                    return `<nav key=${index}>This is a nav</nav>`;
                default:
                    return null;
            }
        }).join('');
        console.log(generatedHtml);
    };

    return (
        <DndContext onDragEnd={handleDragEnd}>
            <div className="flex w-full h-full">
                <div className="float-right">
                    <Button onClick={displayCodePreview} variant={"ghost"}>
                        Code preview
                    </Button>
                </div>
                <div className="p-4 mt-10 w-full flex justify-center align-top" ref={setNodeRef}>
                    DROP HERE
                </div>
            </div>
        </DndContext>
    );
};

export default PagePreview;