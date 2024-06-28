import React from 'react';

export interface SidebarItemType {
    path: string;
    text: string;
    icon: React.FC<React.SVGProps<SVGSVGElement>>;
    authOnly?: boolean;
}
