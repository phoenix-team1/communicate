// automatically generated by the FlatBuffers compiler, do not modify

package offcialpack;

import java.nio.*;
import java.lang.*;
import java.util.*;
import com.google.flatbuffers.*;

@SuppressWarnings("unused")
public final class T_FANS_OFFLINE_MESSAGE extends Table {
  public static T_FANS_OFFLINE_MESSAGE getRootAsT_FANS_OFFLINE_MESSAGE(ByteBuffer _bb) { return getRootAsT_FANS_OFFLINE_MESSAGE(_bb, new T_FANS_OFFLINE_MESSAGE()); }
  public static T_FANS_OFFLINE_MESSAGE getRootAsT_FANS_OFFLINE_MESSAGE(ByteBuffer _bb, T_FANS_OFFLINE_MESSAGE obj) { _bb.order(ByteOrder.LITTLE_ENDIAN); return (obj.__assign(_bb.getInt(_bb.position()) + _bb.position(), _bb)); }
  public void __init(int _i, ByteBuffer _bb) { bb_pos = _i; bb = _bb; }
  public T_FANS_OFFLINE_MESSAGE __assign(int _i, ByteBuffer _bb) { __init(_i, _bb); return this; }

  public long userId() { int o = __offset(4); return o != 0 ? bb.getLong(o + bb_pos) : 0L; }
  public long messageId() { int o = __offset(6); return o != 0 ? bb.getLong(o + bb_pos) : 0L; }
  public commonpack.S_MSG sMsg() { return sMsg(new commonpack.S_MSG()); }
  public commonpack.S_MSG sMsg(commonpack.S_MSG obj) { int o = __offset(8); return o != 0 ? obj.__assign(__indirect(o + bb_pos), bb) : null; }
  public long bId() { int o = __offset(10); return o != 0 ? bb.getLong(o + bb_pos) : 0L; }
  public long wId() { int o = __offset(12); return o != 0 ? bb.getLong(o + bb_pos) : 0L; }
  public long cId() { int o = __offset(14); return o != 0 ? bb.getLong(o + bb_pos) : 0L; }

  public static int createT_FANS_OFFLINE_MESSAGE(FlatBufferBuilder builder,
      long user_id,
      long message_id,
      int s_msgOffset,
      long b_id,
      long w_id,
      long c_id) {
    builder.startObject(6);
    T_FANS_OFFLINE_MESSAGE.addCId(builder, c_id);
    T_FANS_OFFLINE_MESSAGE.addWId(builder, w_id);
    T_FANS_OFFLINE_MESSAGE.addBId(builder, b_id);
    T_FANS_OFFLINE_MESSAGE.addMessageId(builder, message_id);
    T_FANS_OFFLINE_MESSAGE.addUserId(builder, user_id);
    T_FANS_OFFLINE_MESSAGE.addSMsg(builder, s_msgOffset);
    return T_FANS_OFFLINE_MESSAGE.endT_FANS_OFFLINE_MESSAGE(builder);
  }

  public static void startT_FANS_OFFLINE_MESSAGE(FlatBufferBuilder builder) { builder.startObject(6); }
  public static void addUserId(FlatBufferBuilder builder, long userId) { builder.addLong(0, userId, 0L); }
  public static void addMessageId(FlatBufferBuilder builder, long messageId) { builder.addLong(1, messageId, 0L); }
  public static void addSMsg(FlatBufferBuilder builder, int sMsgOffset) { builder.addOffset(2, sMsgOffset, 0); }
  public static void addBId(FlatBufferBuilder builder, long bId) { builder.addLong(3, bId, 0L); }
  public static void addWId(FlatBufferBuilder builder, long wId) { builder.addLong(4, wId, 0L); }
  public static void addCId(FlatBufferBuilder builder, long cId) { builder.addLong(5, cId, 0L); }
  public static int endT_FANS_OFFLINE_MESSAGE(FlatBufferBuilder builder) {
    int o = builder.endObject();
    return o;
  }
  public static void finishT_FANS_OFFLINE_MESSAGEBuffer(FlatBufferBuilder builder, int offset) { builder.finish(offset); }
}

