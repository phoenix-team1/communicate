// automatically generated by the FlatBuffers compiler, do not modify

package offcialpack;

import java.nio.*;
import java.lang.*;
import java.util.*;
import com.google.flatbuffers.*;

@SuppressWarnings("unused")
public final class T_CLIENT_FANS_GET_SYS_MSG_RQ extends Table {
  public static T_CLIENT_FANS_GET_SYS_MSG_RQ getRootAsT_CLIENT_FANS_GET_SYS_MSG_RQ(ByteBuffer _bb) { return getRootAsT_CLIENT_FANS_GET_SYS_MSG_RQ(_bb, new T_CLIENT_FANS_GET_SYS_MSG_RQ()); }
  public static T_CLIENT_FANS_GET_SYS_MSG_RQ getRootAsT_CLIENT_FANS_GET_SYS_MSG_RQ(ByteBuffer _bb, T_CLIENT_FANS_GET_SYS_MSG_RQ obj) { _bb.order(ByteOrder.LITTLE_ENDIAN); return (obj.__assign(_bb.getInt(_bb.position()) + _bb.position(), _bb)); }
  public void __init(int _i, ByteBuffer _bb) { bb_pos = _i; bb = _bb; }
  public T_CLIENT_FANS_GET_SYS_MSG_RQ __assign(int _i, ByteBuffer _bb) { __init(_i, _bb); return this; }

  public commonpack.S_RQ_HEAD sRqHead() { return sRqHead(new commonpack.S_RQ_HEAD()); }
  public commonpack.S_RQ_HEAD sRqHead(commonpack.S_RQ_HEAD obj) { int o = __offset(4); return o != 0 ? obj.__assign(o + bb_pos, bb) : null; }
  public long messageId() { int o = __offset(6); return o != 0 ? bb.getLong(o + bb_pos) : 0L; }

  public static void startT_CLIENT_FANS_GET_SYS_MSG_RQ(FlatBufferBuilder builder) { builder.startObject(2); }
  public static void addSRqHead(FlatBufferBuilder builder, int sRqHeadOffset) { builder.addStruct(0, sRqHeadOffset, 0); }
  public static void addMessageId(FlatBufferBuilder builder, long messageId) { builder.addLong(1, messageId, 0L); }
  public static int endT_CLIENT_FANS_GET_SYS_MSG_RQ(FlatBufferBuilder builder) {
    int o = builder.endObject();
    return o;
  }
  public static void finishT_CLIENT_FANS_GET_SYS_MSG_RQBuffer(FlatBufferBuilder builder, int offset) { builder.finish(offset); }
}

