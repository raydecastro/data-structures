class QueueIsEmptyError extends Error {
  constructor() {
    super("QueueIsEmptyError");
  }
}

export default QueueIsEmptyError;