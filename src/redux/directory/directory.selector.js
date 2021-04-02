import {creatSelector} from 'reselect';

const selectDirectory = (state) => state.directory;

export const selectDirectorySections = creatSelector(
    [selectDirectory],
    directory => directory.sections
);