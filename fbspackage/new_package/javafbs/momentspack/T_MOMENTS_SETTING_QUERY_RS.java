// automatically generated by the FlatBuffers compiler, do not modify

package momentspack;

import java.nio.*;
import java.lang.*;
import java.util.*;
import com.google.flatbuffers.*;

@SuppressWarnings("unused")
public final class T_MOMENTS_SETTING_QUERY_RS extends Table {
  public static T_MOMENTS_SETTING_QUERY_RS getRootAsT_MOMENTS_SETTING_QUERY_RS(ByteBuffer _bb) { return getRootAsT_MOMENTS_SETTING_QUERY_RS(_bb, new T_MOMENTS_SETTING_QUERY_RS()); }
  public static T_MOMENTS_SETTING_QUERY_RS getRootAsT_MOMENTS_SETTING_QUERY_RS(ByteBuffer _bb, T_MOMENTS_SETTING_QUERY_RS obj) { _bb.order(ByteOrder.LITTLE_ENDIAN); return (obj.__assign(_bb.getInt(_bb.position()) + _bb.position(), _bb)); }
  public void __init(int _i, ByteBuffer _bb) { bb_pos = _i; bb = _bb; }
  public T_MOMENTS_SETTING_QUERY_RS __assign(int _i, ByteBuffer _bb) { __init(_i, _bb); return this; }

  public commonpack.S_RS_HEAD sRsHead() { return sRsHead(new commonpack.S_RS_HEAD()); }
  public commonpack.S_RS_HEAD sRsHead(commonpack.S_RS_HEAD obj) { int o = __offset(4); return o != 0 ? obj.__assign(o + bb_pos, bb) : null; }
  public momentspack.T_MOMENTS_SETTING_DTO setting() { return setting(new momentspack.T_MOMENTS_SETTING_DTO()); }
  public momentspack.T_MOMENTS_SETTING_DTO setting(momentspack.T_MOMENTS_SETTING_DTO obj) { int o = __offset(6); return o != 0 ? obj.__assign(__indirect(o + bb_pos), bb) : null; }

  public static void startT_MOMENTS_SETTING_QUERY_RS(FlatBufferBuilder builder) { builder.startObject(2); }
  public static void addSRsHead(FlatBufferBuilder builder, int sRsHeadOffset) { builder.addStruct(0, sRsHeadOffset, 0); }
  public static void addSetting(FlatBufferBuilder builder, int settingOffset) { builder.addOffset(1, settingOffset, 0); }
  public static int endT_MOMENTS_SETTING_QUERY_RS(FlatBufferBuilder builder) {
    int o = builder.endObject();
    return o;
  }
  public static void finishT_MOMENTS_SETTING_QUERY_RSBuffer(FlatBufferBuilder builder, int offset) { builder.finish(offset); }
}
