/// <reference types="wicg-file-system-access" />

/**
 * Module that allows extensions to interact with the user's file system.
 */
declare module '@bridge/fs' {
	/**
	 * 
	 * @param baseDirectory 
	 */
	export function setup(baseDirectory: FileSystemDirectoryHandle): void

	/**
	 * The getDirectoryHandle() method returns a FileSystemDirectoryHandle for a subdirectory with the specified name within the directory handle on which the method is called.
	 * @param path 
	 * A USVString representing the FileSystemHandle.name of the subdirectory you wish to retrieve.
	 * @param options 
	 * An optional object containing options for the retrieved subdirectory.
	 */
	export function getDirectoryHandle(
		path: string,
		{ create, createOnce }: Partial<IGetHandleConfig>
	): Promise<FileSystemDirectoryHandle>
	export function getFileHandle(path: string, create: boolean): Promise<FileSystemFileHandle>

	export function mkdir(path: string, { recursive }: Partial<IMkdirConfig>): Promise<void>

	/**
	 * Read the contents of a given directory.
	 * @param path 
	 * @param config 
	 */
	export function readdir(
		path: string,
		config: { withFileTypes: true }
	): Promise<FileSystemHandle[]>
	export function readdir(path: string, config?: { withFileTypes?: false }): Promise<string[]>
	export function readdir(
		path: string,
		{ withFileTypes }: { withFileTypes?: boolean }
	): Promise<FileSystemHandle[]>
	/**
	 * Read the contents of a directory and returns the files.
	 * @param path 
	 * @param dirHandle 
	 */
	export function readFilesFromDir(
		path: string,
		dirHandle:
			| FileSystemDirectoryHandle
			| Promise<FileSystemDirectoryHandle>
	): Promise<{
        name: string;
        path: string;
        kind: string;
    }[]>

	/**
	 * Read a file and return it.
	 * @param path 
	 */
	export function readFile(path: string): Promise<File>

	/**
	 * Unlink a directory from the fileSystem, deleting it.
	 * @param path 
	 */
	export function unlink(path: string): Promise<void>

	/**
	 * Write to a file at the specified path.
	 * @param path 
	 * @param data 
	 */
	export function writeFile(path: string, data: FileSystemWriteChunkType): Promise<FileSystemFileHandle>

	/**
	 * Write to a file from a FileSystemDirectoryHandle.
	 * @param fileHandle 
	 * @param data 
	 */
	export function write(
		fileHandle: FileSystemFileHandle,
		data: FileSystemWriteChunkType
	): Promise<FileSystemFileHandle>

	/**
	 * Read a JSON file at a given path and return the file handle.
	 * @param path 
	 */
	export function readJSON(path: string): Promise<FileSystemFileHandle>
	/**
	 * Write a javascript object as JSON to a file.
	 * @param path 
	 * @param data 
	 * @param beautify 
	 */
	export function writeJSON(path: string, data: any, beautify: boolean): Promise<FileSystemFileHandle>

	/**
	 * Copy a file.
	 * @param originPath 
	 * @param destPath 
	 */
	export function copyFile(originPath: string, destPath: string): Promise<FileSystemFileHandle>
	/**
	 * Copy a file handle.
	 * @param originHandle 
	 * @param destHandle 
	 */
	export function copyFileHandle(
		originHandle: FileSystemFileHandle,
		destHandle: FileSystemFileHandle
	): Promise<FileSystemFileHandle>
	/**
	 * Copy a folder by their paths.
	 * @param originPath 
	 * @param destPath 
	 */
	export function copyFolder(originPath: string, destPath: string): Promise<void>
	/**
	 * Copy a folder by its FileSystemDirectoryHandle.
	 * @param originHandle 
	 * @param destHandle 
	 */
	export function copyFolderByHandle(
		originHandle: FileSystemDirectoryHandle,
		destHandle: FileSystemDirectoryHandle
	): Promise<void>

	/**
	 * Read a file by its FileHandle as a URL.
	 * @param fileHandle 
	 */
	export function loadFileHandleAsDataUrl(fileHandle: FileSystemFileHandle): Promise<string>

	/**
	 * Return whether a file exists or not.
	 * @param path 
	 */
	export function fileExists(path: string): Promise<boolean>

	/**
	 * Return whether a directory exists or not.
	 * @param path 
	 */
	export function directoryExists(path: string): Promise<boolean>
}

declare interface IGetHandleConfig {
	create: boolean
	createOnce: boolean
}

declare interface IMkdirConfig {
	recursive: boolean
}