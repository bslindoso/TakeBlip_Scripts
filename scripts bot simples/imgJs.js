function run(input, inputType) {
    try {
      if (inputType == 'application/vnd.lime.media-link+json') {
        //input = JSON.parse(input);
        if (input.type.includes('image')) {
          return input.uri;
        } else {
          return 'imgJs ERROR: UNSUPPORTED FILE'
        }
      } else {
        return 'imgJs ERROR: UNSUPPORTED FILE'
      }
    } catch (e) {
      return 'imgJs ERROR: UNEXPECTED ERROR'
    }
  }