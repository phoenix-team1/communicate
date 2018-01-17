# automatically generated by the FlatBuffers compiler, do not modify

# namespace: commonpack

import flatbuffers

class S_RS_HEAD(object):
    __slots__ = ['_tab']

    # S_RS_HEAD
    def Init(self, buf, pos):
        self._tab = flatbuffers.table.Table(buf, pos)

    # S_RS_HEAD
    def UserId(self): return self._tab.Get(flatbuffers.number_types.Uint64Flags, self._tab.Pos + flatbuffers.number_types.UOffsetTFlags.py_type(0))
    # S_RS_HEAD
    def PackSessionId(self): return self._tab.Get(flatbuffers.number_types.Int32Flags, self._tab.Pos + flatbuffers.number_types.UOffsetTFlags.py_type(8))
    # S_RS_HEAD
    def Result(self): return self._tab.Get(flatbuffers.number_types.Int32Flags, self._tab.Pos + flatbuffers.number_types.UOffsetTFlags.py_type(12))
    # S_RS_HEAD
    def Platform(self): return self._tab.Get(flatbuffers.number_types.Int8Flags, self._tab.Pos + flatbuffers.number_types.UOffsetTFlags.py_type(16))

def CreateS_RS_HEAD(builder, userId, packSessionId, result, platform):
    builder.Prep(8, 24)
    builder.Pad(7)
    builder.PrependInt8(platform)
    builder.PrependInt32(result)
    builder.PrependInt32(packSessionId)
    builder.PrependUint64(userId)
    return builder.Offset()
