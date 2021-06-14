export const rootMetaTitle = 'Technical Interview';

export const composeMetaTitle = (...parts: string[]): string => {
    if (parts.length === 0) {
        return rootMetaTitle;
    }

    return `${parts.join(' - ')} | ${rootMetaTitle}`;
};
