// automatically generated by the FlatBuffers compiler, do not modify

package syspack;

import java.nio.*;
import java.lang.*;
import java.util.*;
import com.google.flatbuffers.*;

@SuppressWarnings("unused")
public final class T_SMS_VALID_RQ extends Table {
  public static T_SMS_VALID_RQ getRootAsT_SMS_VALID_RQ(ByteBuffer _bb) { return getRootAsT_SMS_VALID_RQ(_bb, new T_SMS_VALID_RQ()); }
  public static T_SMS_VALID_RQ getRootAsT_SMS_VALID_RQ(ByteBuffer _bb, T_SMS_VALID_RQ obj) { _bb.order(ByteOrder.LITTLE_ENDIAN); return (obj.__assign(_bb.getInt(_bb.position()) + _bb.position(), _bb)); }
  public void __init(int _i, ByteBuffer _bb) { bb_pos = _i; bb = _bb; }
  public T_SMS_VALID_RQ __assign(int _i, ByteBuffer _bb) { __init(_i, _bb); return this; }

  public commonpack.S_RQ_HEAD sRqHead() { return sRqHead(new commonpack.S_RQ_HEAD()); }
  public commonpack.S_RQ_HEAD sRqHead(commonpack.S_RQ_HEAD obj) { int o = __offset(4); return o != 0 ? obj.__assign(o + bb_pos, bb) : null; }
  public int nationCode() { int o = __offset(6); return o != 0 ? bb.getInt(o + bb_pos) : 0; }
  public long mobile() { int o = __offset(8); return o != 0 ? bb.getLong(o + bb_pos) : 0L; }

  public static void startT_SMS_VALID_RQ(FlatBufferBuilder builder) { builder.startObject(3); }
  public static void addSRqHead(FlatBufferBuilder builder, int sRqHeadOffset) { builder.addStruct(0, sRqHeadOffset, 0); }
  public static void addNationCode(FlatBufferBuilder builder, int nationCode) { builder.addInt(1, nationCode, 0); }
  public static void addMobile(FlatBufferBuilder builder, long mobile) { builder.addLong(2, mobile, 0L); }
  public static int endT_SMS_VALID_RQ(FlatBufferBuilder builder) {
    int o = builder.endObject();
    return o;
  }
  public static void finishT_SMS_VALID_RQBuffer(FlatBufferBuilder builder, int offset) { builder.finish(offset); }
}
