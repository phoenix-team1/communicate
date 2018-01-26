// automatically generated by the FlatBuffers compiler, do not modify

package momentspack;

import java.nio.*;
import java.lang.*;
import java.util.*;
import com.google.flatbuffers.*;

@SuppressWarnings("unused")
public final class T_MOMENTS_ARTICLE_ADD_RQ extends Table {
  public static T_MOMENTS_ARTICLE_ADD_RQ getRootAsT_MOMENTS_ARTICLE_ADD_RQ(ByteBuffer _bb) { return getRootAsT_MOMENTS_ARTICLE_ADD_RQ(_bb, new T_MOMENTS_ARTICLE_ADD_RQ()); }
  public static T_MOMENTS_ARTICLE_ADD_RQ getRootAsT_MOMENTS_ARTICLE_ADD_RQ(ByteBuffer _bb, T_MOMENTS_ARTICLE_ADD_RQ obj) { _bb.order(ByteOrder.LITTLE_ENDIAN); return (obj.__assign(_bb.getInt(_bb.position()) + _bb.position(), _bb)); }
  public void __init(int _i, ByteBuffer _bb) { bb_pos = _i; bb = _bb; }
  public T_MOMENTS_ARTICLE_ADD_RQ __assign(int _i, ByteBuffer _bb) { __init(_i, _bb); return this; }

  public commonpack.S_RQ_HEAD sRqHead() { return sRqHead(new commonpack.S_RQ_HEAD()); }
  public commonpack.S_RQ_HEAD sRqHead(commonpack.S_RQ_HEAD obj) { int o = __offset(4); return o != 0 ? obj.__assign(o + bb_pos, bb) : null; }
  public long articleId() { int o = __offset(6); return o != 0 ? bb.getLong(o + bb_pos) : 0L; }
  public long userId() { int o = __offset(8); return o != 0 ? bb.getLong(o + bb_pos) : 0L; }
  public String userNickname() { int o = __offset(10); return o != 0 ? __string(o + bb_pos) : null; }
  public ByteBuffer userNicknameAsByteBuffer() { return __vector_as_bytebuffer(10, 1); }
  public String title() { int o = __offset(12); return o != 0 ? __string(o + bb_pos) : null; }
  public ByteBuffer titleAsByteBuffer() { return __vector_as_bytebuffer(12, 1); }
  public int contentType() { int o = __offset(14); return o != 0 ? bb.getInt(o + bb_pos) : 0; }
  public String content() { int o = __offset(16); return o != 0 ? __string(o + bb_pos) : null; }
  public ByteBuffer contentAsByteBuffer() { return __vector_as_bytebuffer(16, 1); }
  public int privType() { int o = __offset(18); return o != 0 ? bb.getInt(o + bb_pos) : 0; }
  public String whiteList() { int o = __offset(20); return o != 0 ? __string(o + bb_pos) : null; }
  public ByteBuffer whiteListAsByteBuffer() { return __vector_as_bytebuffer(20, 1); }
  public String blackList() { int o = __offset(22); return o != 0 ? __string(o + bb_pos) : null; }
  public ByteBuffer blackListAsByteBuffer() { return __vector_as_bytebuffer(22, 1); }

  public static void startT_MOMENTS_ARTICLE_ADD_RQ(FlatBufferBuilder builder) { builder.startObject(10); }
  public static void addSRqHead(FlatBufferBuilder builder, int sRqHeadOffset) { builder.addStruct(0, sRqHeadOffset, 0); }
  public static void addArticleId(FlatBufferBuilder builder, long articleId) { builder.addLong(1, articleId, 0L); }
  public static void addUserId(FlatBufferBuilder builder, long userId) { builder.addLong(2, userId, 0L); }
  public static void addUserNickname(FlatBufferBuilder builder, int userNicknameOffset) { builder.addOffset(3, userNicknameOffset, 0); }
  public static void addTitle(FlatBufferBuilder builder, int titleOffset) { builder.addOffset(4, titleOffset, 0); }
  public static void addContentType(FlatBufferBuilder builder, int contentType) { builder.addInt(5, contentType, 0); }
  public static void addContent(FlatBufferBuilder builder, int contentOffset) { builder.addOffset(6, contentOffset, 0); }
  public static void addPrivType(FlatBufferBuilder builder, int privType) { builder.addInt(7, privType, 0); }
  public static void addWhiteList(FlatBufferBuilder builder, int whiteListOffset) { builder.addOffset(8, whiteListOffset, 0); }
  public static void addBlackList(FlatBufferBuilder builder, int blackListOffset) { builder.addOffset(9, blackListOffset, 0); }
  public static int endT_MOMENTS_ARTICLE_ADD_RQ(FlatBufferBuilder builder) {
    int o = builder.endObject();
    return o;
  }
  public static void finishT_MOMENTS_ARTICLE_ADD_RQBuffer(FlatBufferBuilder builder, int offset) { builder.finish(offset); }
}

