function run(input, inputType) {
  try {
    if (inputType == 'text/plain') {
      return input;
    } else if (inputType == 'application/vnd.lime.media-link+json') {
      input = JSON.parse(input);
      if (input.type.includes('image')) {
        return input.uri;
      } else {
        return 'imgTxtJs ERROR: UNSUPPORTED FILE'
      }
    } else {
      return 'imgTxtJs ERROR: UNSUPPORTED FILE'
    }
  } catch (e) {
    return 'imgTxtJs ERROR: UNEXPECTED ERROR'
  }
}