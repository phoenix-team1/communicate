// automatically generated by the FlatBuffers compiler, do not modify

package momentspack;

import java.nio.*;
import java.lang.*;
import java.util.*;
import com.google.flatbuffers.*;

@SuppressWarnings("unused")
public final class T_MOMENTS_SETTING_BLACKNOTCARELIST_MODIFY_NOTIFY extends Table {
  public static T_MOMENTS_SETTING_BLACKNOTCARELIST_MODIFY_NOTIFY getRootAsT_MOMENTS_SETTING_BLACKNOTCARELIST_MODIFY_NOTIFY(ByteBuffer _bb) { return getRootAsT_MOMENTS_SETTING_BLACKNOTCARELIST_MODIFY_NOTIFY(_bb, new T_MOMENTS_SETTING_BLACKNOTCARELIST_MODIFY_NOTIFY()); }
  public static T_MOMENTS_SETTING_BLACKNOTCARELIST_MODIFY_NOTIFY getRootAsT_MOMENTS_SETTING_BLACKNOTCARELIST_MODIFY_NOTIFY(ByteBuffer _bb, T_MOMENTS_SETTING_BLACKNOTCARELIST_MODIFY_NOTIFY obj) { _bb.order(ByteOrder.LITTLE_ENDIAN); return (obj.__assign(_bb.getInt(_bb.position()) + _bb.position(), _bb)); }
  public void __init(int _i, ByteBuffer _bb) { bb_pos = _i; bb = _bb; }
  public T_MOMENTS_SETTING_BLACKNOTCARELIST_MODIFY_NOTIFY __assign(int _i, ByteBuffer _bb) { __init(_i, _bb); return this; }

  public long userId() { int o = __offset(4); return o != 0 ? bb.getLong(o + bb_pos) : 0L; }
  public momentspack.T_SETTING_LIST_DTO list(int j) { return list(new momentspack.T_SETTING_LIST_DTO(), j); }
  public momentspack.T_SETTING_LIST_DTO list(momentspack.T_SETTING_LIST_DTO obj, int j) { int o = __offset(6); return o != 0 ? obj.__assign(__vector(o) + j * 24, bb) : null; }
  public int listLength() { int o = __offset(6); return o != 0 ? __vector_len(o) : 0; }

  public static int createT_MOMENTS_SETTING_BLACKNOTCARELIST_MODIFY_NOTIFY(FlatBufferBuilder builder,
      long user_id,
      int listOffset) {
    builder.startObject(2);
    T_MOMENTS_SETTING_BLACKNOTCARELIST_MODIFY_NOTIFY.addUserId(builder, user_id);
    T_MOMENTS_SETTING_BLACKNOTCARELIST_MODIFY_NOTIFY.addList(builder, listOffset);
    return T_MOMENTS_SETTING_BLACKNOTCARELIST_MODIFY_NOTIFY.endT_MOMENTS_SETTING_BLACKNOTCARELIST_MODIFY_NOTIFY(builder);
  }

  public static void startT_MOMENTS_SETTING_BLACKNOTCARELIST_MODIFY_NOTIFY(FlatBufferBuilder builder) { builder.startObject(2); }
  public static void addUserId(FlatBufferBuilder builder, long userId) { builder.addLong(0, userId, 0L); }
  public static void addList(FlatBufferBuilder builder, int listOffset) { builder.addOffset(1, listOffset, 0); }
  public static void startListVector(FlatBufferBuilder builder, int numElems) { builder.startVector(24, numElems, 8); }
  public static int endT_MOMENTS_SETTING_BLACKNOTCARELIST_MODIFY_NOTIFY(FlatBufferBuilder builder) {
    int o = builder.endObject();
    return o;
  }
  public static void finishT_MOMENTS_SETTING_BLACKNOTCARELIST_MODIFY_NOTIFYBuffer(FlatBufferBuilder builder, int offset) { builder.finish(offset); }
}

