// automatically generated by the FlatBuffers compiler, do not modify

package friendpack;

import java.nio.*;
import java.lang.*;
import java.util.*;
import com.google.flatbuffers.*;

@SuppressWarnings("unused")
public final class T_FRIEND_UPDATE_RQ extends Table {
  public static T_FRIEND_UPDATE_RQ getRootAsT_FRIEND_UPDATE_RQ(ByteBuffer _bb) { return getRootAsT_FRIEND_UPDATE_RQ(_bb, new T_FRIEND_UPDATE_RQ()); }
  public static T_FRIEND_UPDATE_RQ getRootAsT_FRIEND_UPDATE_RQ(ByteBuffer _bb, T_FRIEND_UPDATE_RQ obj) { _bb.order(ByteOrder.LITTLE_ENDIAN); return (obj.__assign(_bb.getInt(_bb.position()) + _bb.position(), _bb)); }
  public void __init(int _i, ByteBuffer _bb) { bb_pos = _i; bb = _bb; }
  public T_FRIEND_UPDATE_RQ __assign(int _i, ByteBuffer _bb) { __init(_i, _bb); return this; }

  public commonpack.S_RQ_HEAD sRqHead() { return sRqHead(new commonpack.S_RQ_HEAD()); }
  public commonpack.S_RQ_HEAD sRqHead(commonpack.S_RQ_HEAD obj) { int o = __offset(4); return o != 0 ? obj.__assign(o + bb_pos, bb) : null; }
  public long peerUserId() { int o = __offset(6); return o != 0 ? bb.getLong(o + bb_pos) : 0L; }

  public static void startT_FRIEND_UPDATE_RQ(FlatBufferBuilder builder) { builder.startObject(2); }
  public static void addSRqHead(FlatBufferBuilder builder, int sRqHeadOffset) { builder.addStruct(0, sRqHeadOffset, 0); }
  public static void addPeerUserId(FlatBufferBuilder builder, long peerUserId) { builder.addLong(1, peerUserId, 0L); }
  public static int endT_FRIEND_UPDATE_RQ(FlatBufferBuilder builder) {
    int o = builder.endObject();
    return o;
  }
  public static void finishT_FRIEND_UPDATE_RQBuffer(FlatBufferBuilder builder, int offset) { builder.finish(offset); }
}

