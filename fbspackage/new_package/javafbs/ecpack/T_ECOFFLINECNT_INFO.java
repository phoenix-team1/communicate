// automatically generated by the FlatBuffers compiler, do not modify

package ecpack;

import java.nio.*;
import java.lang.*;
import java.util.*;
import com.google.flatbuffers.*;

@SuppressWarnings("unused")
public final class T_ECOFFLINECNT_INFO extends Table {
  public static T_ECOFFLINECNT_INFO getRootAsT_ECOFFLINECNT_INFO(ByteBuffer _bb) { return getRootAsT_ECOFFLINECNT_INFO(_bb, new T_ECOFFLINECNT_INFO()); }
  public static T_ECOFFLINECNT_INFO getRootAsT_ECOFFLINECNT_INFO(ByteBuffer _bb, T_ECOFFLINECNT_INFO obj) { _bb.order(ByteOrder.LITTLE_ENDIAN); return (obj.__assign(_bb.getInt(_bb.position()) + _bb.position(), _bb)); }
  public void __init(int _i, ByteBuffer _bb) { bb_pos = _i; bb = _bb; }
  public T_ECOFFLINECNT_INFO __assign(int _i, ByteBuffer _bb) { __init(_i, _bb); return this; }

  public long bId() { int o = __offset(4); return o != 0 ? bb.getLong(o + bb_pos) : 0L; }
  public long cnt() { int o = __offset(6); return o != 0 ? (long)bb.getInt(o + bb_pos) & 0xFFFFFFFFL : 0L; }

  public static int createT_ECOFFLINECNT_INFO(FlatBufferBuilder builder,
      long b_id,
      long cnt) {
    builder.startObject(2);
    T_ECOFFLINECNT_INFO.addBId(builder, b_id);
    T_ECOFFLINECNT_INFO.addCnt(builder, cnt);
    return T_ECOFFLINECNT_INFO.endT_ECOFFLINECNT_INFO(builder);
  }

  public static void startT_ECOFFLINECNT_INFO(FlatBufferBuilder builder) { builder.startObject(2); }
  public static void addBId(FlatBufferBuilder builder, long bId) { builder.addLong(0, bId, 0L); }
  public static void addCnt(FlatBufferBuilder builder, long cnt) { builder.addInt(1, (int)cnt, (int)0L); }
  public static int endT_ECOFFLINECNT_INFO(FlatBufferBuilder builder) {
    int o = builder.endObject();
    return o;
  }
  public static void finishT_ECOFFLINECNT_INFOBuffer(FlatBufferBuilder builder, int offset) { builder.finish(offset); }
}
