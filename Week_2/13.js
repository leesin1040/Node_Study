function errorException(isTrow) {
  try {
    console.log('자원을 할당하였습니다');
    if (isTrow) throw new Error();
  } catch (error) {
    console.log('에러가 발생했습니다.');
  } finally {
    console.log('자원을 제거하였습니다.');
  }
}

errorException(true);
