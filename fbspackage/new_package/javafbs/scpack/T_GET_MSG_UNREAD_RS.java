// automatically generated by the FlatBuffers compiler, do not modify

package scpack;

import java.nio.*;
import java.lang.*;
import java.util.*;
import com.google.flatbuffers.*;

@SuppressWarnings("unused")
public final class T_GET_MSG_UNREAD_RS extends Table {
  public static T_GET_MSG_UNREAD_RS getRootAsT_GET_MSG_UNREAD_RS(ByteBuffer _bb) { return getRootAsT_GET_MSG_UNREAD_RS(_bb, new T_GET_MSG_UNREAD_RS()); }
  public static T_GET_MSG_UNREAD_RS getRootAsT_GET_MSG_UNREAD_RS(ByteBuffer _bb, T_GET_MSG_UNREAD_RS obj) { _bb.order(ByteOrder.LITTLE_ENDIAN); return (obj.__assign(_bb.getInt(_bb.position()) + _bb.position(), _bb)); }
  public void __init(int _i, ByteBuffer _bb) { bb_pos = _i; bb = _bb; }
  public T_GET_MSG_UNREAD_RS __assign(int _i, ByteBuffer _bb) { __init(_i, _bb); return this; }

  public commonpack.S_RS_HEAD sRsHead() { return sRsHead(new commonpack.S_RS_HEAD()); }
  public commonpack.S_RS_HEAD sRsHead(commonpack.S_RS_HEAD obj) { int o = __offset(4); return o != 0 ? obj.__assign(o + bb_pos, bb) : null; }
  public int unreadCount() { int o = __offset(6); return o != 0 ? bb.getInt(o + bb_pos) : 0; }

  public static void startT_GET_MSG_UNREAD_RS(FlatBufferBuilder builder) { builder.startObject(2); }
  public static void addSRsHead(FlatBufferBuilder builder, int sRsHeadOffset) { builder.addStruct(0, sRsHeadOffset, 0); }
  public static void addUnreadCount(FlatBufferBuilder builder, int unreadCount) { builder.addInt(1, unreadCount, 0); }
  public static int endT_GET_MSG_UNREAD_RS(FlatBufferBuilder builder) {
    int o = builder.endObject();
    return o;
  }
  public static void finishT_GET_MSG_UNREAD_RSBuffer(FlatBufferBuilder builder, int offset) { builder.finish(offset); }
}

