// automatically generated by the FlatBuffers compiler, do not modify

/**
 * @const
 * @namespace
 */
var commonpack = commonpack || {};

/**
 * @const
 * @namespace
 */
var ecpack = ecpack || {};

/**
 * @constructor
 */
ecpack.T_EC_ISUSERBUSY_RQ = function() {
  /**
   * @type {flatbuffers.ByteBuffer}
   */
  this.bb = null;

  /**
   * @type {number}
   */
  this.bb_pos = 0;
};

/**
 * @param {number} i
 * @param {flatbuffers.ByteBuffer} bb
 * @returns {ecpack.T_EC_ISUSERBUSY_RQ}
 */
ecpack.T_EC_ISUSERBUSY_RQ.prototype.__init = function(i, bb) {
  this.bb_pos = i;
  this.bb = bb;
  return this;
};

/**
 * @param {flatbuffers.ByteBuffer} bb
 * @param {ecpack.T_EC_ISUSERBUSY_RQ=} obj
 * @returns {ecpack.T_EC_ISUSERBUSY_RQ}
 */
ecpack.T_EC_ISUSERBUSY_RQ.getRootAsT_EC_ISUSERBUSY_RQ = function(bb, obj) {
  return (obj || new ecpack.T_EC_ISUSERBUSY_RQ).__init(bb.readInt32(bb.position()) + bb.position(), bb);
};

/**
 * @param {commonpack.S_RQ_HEAD=} obj
 * @returns {commonpack.S_RQ_HEAD}
 */
ecpack.T_EC_ISUSERBUSY_RQ.prototype.sRqHead = function(obj) {
  var offset = this.bb.__offset(this.bb_pos, 4);
  return offset ? (obj || new commonpack.S_RQ_HEAD).__init(this.bb_pos + offset, this.bb) : null;
};

/**
 * @returns {flatbuffers.Long}
 */
ecpack.T_EC_ISUSERBUSY_RQ.prototype.bId = function() {
  var offset = this.bb.__offset(this.bb_pos, 6);
  return offset ? this.bb.readUint64(this.bb_pos + offset) : this.bb.createLong(0, 0);
};

/**
 * @returns {flatbuffers.Long}
 */
ecpack.T_EC_ISUSERBUSY_RQ.prototype.cId = function() {
  var offset = this.bb.__offset(this.bb_pos, 8);
  return offset ? this.bb.readUint64(this.bb_pos + offset) : this.bb.createLong(0, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 */
ecpack.T_EC_ISUSERBUSY_RQ.startT_EC_ISUSERBUSY_RQ = function(builder) {
  builder.startObject(3);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} sRqHeadOffset
 */
ecpack.T_EC_ISUSERBUSY_RQ.addSRqHead = function(builder, sRqHeadOffset) {
  builder.addFieldStruct(0, sRqHeadOffset, 0);
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Long} bId
 */
ecpack.T_EC_ISUSERBUSY_RQ.addBId = function(builder, bId) {
  builder.addFieldInt64(1, bId, builder.createLong(0, 0));
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Long} cId
 */
ecpack.T_EC_ISUSERBUSY_RQ.addCId = function(builder, cId) {
  builder.addFieldInt64(2, cId, builder.createLong(0, 0));
};

/**
 * @param {flatbuffers.Builder} builder
 * @returns {flatbuffers.Offset}
 */
ecpack.T_EC_ISUSERBUSY_RQ.endT_EC_ISUSERBUSY_RQ = function(builder) {
  var offset = builder.endObject();
  return offset;
};

/**
 * @param {flatbuffers.Builder} builder
 * @param {flatbuffers.Offset} offset
 */
ecpack.T_EC_ISUSERBUSY_RQ.finishT_EC_ISUSERBUSY_RQBuffer = function(builder, offset) {
  builder.finish(offset);
};

// Exports for Node.js and RequireJS
this.commonpack = commonpack;
this.ecpack = ecpack;
