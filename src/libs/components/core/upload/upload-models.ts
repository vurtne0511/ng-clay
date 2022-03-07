export class NcUploadResponse<T> {
  constructor(public data: T) { }
}

export class NcUploadError {
  constructor(public file: File | Blob, public error: any) { }
}
