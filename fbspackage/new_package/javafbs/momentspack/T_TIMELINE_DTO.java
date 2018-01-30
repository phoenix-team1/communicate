// automatically generated by the FlatBuffers compiler, do not modify

package momentspack;

import java.nio.*;
import java.lang.*;
import java.util.*;
import com.google.flatbuffers.*;

@SuppressWarnings("unused")
public final class T_TIMELINE_DTO extends Table {
  public static T_TIMELINE_DTO getRootAsT_TIMELINE_DTO(ByteBuffer _bb) { return getRootAsT_TIMELINE_DTO(_bb, new T_TIMELINE_DTO()); }
  public static T_TIMELINE_DTO getRootAsT_TIMELINE_DTO(ByteBuffer _bb, T_TIMELINE_DTO obj) { _bb.order(ByteOrder.LITTLE_ENDIAN); return (obj.__assign(_bb.getInt(_bb.position()) + _bb.position(), _bb)); }
  public void __init(int _i, ByteBuffer _bb) { bb_pos = _i; bb = _bb; }
  public T_TIMELINE_DTO __assign(int _i, ByteBuffer _bb) { __init(_i, _bb); return this; }

  public long articleUserId() { int o = __offset(4); return o != 0 ? bb.getLong(o + bb_pos) : 0L; }
  public long articleId() { int o = __offset(6); return o != 0 ? bb.getLong(o + bb_pos) : 0L; }

  public static int createT_TIMELINE_DTO(FlatBufferBuilder builder,
      long article_user_id,
      long article_id) {
    builder.startObject(2);
    T_TIMELINE_DTO.addArticleId(builder, article_id);
    T_TIMELINE_DTO.addArticleUserId(builder, article_user_id);
    return T_TIMELINE_DTO.endT_TIMELINE_DTO(builder);
  }

  public static void startT_TIMELINE_DTO(FlatBufferBuilder builder) { builder.startObject(2); }
  public static void addArticleUserId(FlatBufferBuilder builder, long articleUserId) { builder.addLong(0, articleUserId, 0L); }
  public static void addArticleId(FlatBufferBuilder builder, long articleId) { builder.addLong(1, articleId, 0L); }
  public static int endT_TIMELINE_DTO(FlatBufferBuilder builder) {
    int o = builder.endObject();
    return o;
  }
}
